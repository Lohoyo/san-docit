import SanRouter, {router} from '../common/san-router';
import NProgress from 'nprogress';
import hub from '../common/hub';
import {base} from '../common/utils';
import NotFound from 'VAR_LAYOUT_IMPORT/not-found.san';

import 'nprogress/nprogress.css';

const route = new SanRouter.Router({
    mode: 'html5'
});

SanRouter.router = route;

// Webpack Inject
const config = VAR_SAN_CONFIG;
const components = VAR_ROUTES_IMPORT;

const sidebar = config.themeConfig.sidebar;

const addRouter = node => {
    if (!node || !node.path) {
        return;
    }

    const path = node.path;
    let component = components[path]
        ? components[path] : /\.js$/.test(node.filename)
            ? require(node.filename) : '';

    if (component) {
        router.add({
            rule: base + path,
            Component: component,
            target: '#router-view'
        });
    }
};

const parseRouter = (root, callback) => {
    if (!root) {
        return;
    }
    callback(root);

    if (!root.children) {
        return;
    }
    root.children.forEach(item => {
        callback(item);

        if (item && item.children) {
            parseRouter(item, callback);
        }
    });
};

// router.add 注册路由
Object.keys(sidebar).forEach(path => {
    parseRouter(sidebar[path], node => addRouter(node));
});

const routes = [{
    path: '.*',
    component: NotFound
}];

routes.forEach(route => {
    router.add({
        rule: base + route.path,
        Component: route.component,
        target: '#router-view'
    });
});

router.listen(e => {
    if (e.path === e.referrer) {
        e.stop();
        return;
    }

    // 加载进度条
    if (NProgress.isRendered) {
        NProgress.remove();
    }
    NProgress.inc();

    hub.fire('router-changed', e);
});

router.afterEach(e => {
    NProgress.done(true);
});

export default router;
