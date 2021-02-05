const fs = require('fs');
const path = require('path');
const globby = require('globby');
const option = require('../bin/option');

const cwd = option.getCwd();
const port = option.getCmd().port || 8080;

const resolve = dir => {
    return path.join(__dirname, '..', dir);
};

const resolveDocit = dir => {
    return path.join(cwd, '.sdoc', dir);
};

let routes = {};
const getRoutes = () => {
    if (Object.keys(routes).length > 0) {
        return routes;
    }

    const files = globby.sync('**/*.md', {
        expandDirectories: false,
        onlyFiles: false,
        cwd: cwd
    });

    files.map(file => routes[file.replace(/\.md$/, '/')] = cwd + '/' + file);
    return routes;
};

const getRoutesImportStr = () => {
    const routes = getRoutes();
    const routesImport = {};
    Object.keys(routes).map(route => {
        routesImport[`/${route}`] = `%() => import('${routes[route]}')%`;
    });
    return JSON.stringify(routesImport).replace(/("%|%")/mg, '');
};

const treeWalk = (root, callback) => {
    if (!root) {
        return;
    }
    callback(root);

    if (!root.children) {
        return;
    }
    root.children.forEach(item => {
        callback(item);

        if (item.children) {
            treeWalk(item, callback);
        }
    });
};

const treeBuild = (root, callback) => {
    if (!root) {
        return {};
    }
    if (!Array.isArray(root)) {
        root = [root];
    }

    const children = root.map(node => {
        if (typeof node === 'string') {
            return callback(node);
        }
        else if (node.children) {
            return {
                ...callback(node),
                ...treeBuild(node.children, callback)
            };
        }
        else if (Array.isArray(node)) {
            return treeBuild(node, callback);
        }
        return callback(node);
    });
    return {
        children
    };
};

let resolvePaths;
const getCommonPaths = dir => {
    return resolvePaths
        .map(p => path.join(p, dir))
        .filter(p => fs.existsSync(p));
};
const setPaths = paths => {
    resolvePaths = paths;
};

const getPaths = () => {
    return resolvePaths;
};

const headBuild = heads => {
    if (!heads || !heads.length) {
        return '';
    }
    const result = heads.map(head => {
        const tag = head[0];
        const attrs = head[1] || {};
        const html = head[2] || '';
        const values = Object.keys(attrs).map(key => {
            return `${key}="${attrs[key]}"`;
        });
        return `<${tag} ${values.join(' ')}>${html}</${tag}>`;
    });
    return result.join('');
};

const tmpdir = (() => {
    const tmpdir = path.join(__dirname, '../dist/');

    return tmpdir;
})();

module.exports = {
    cwd,
    port,
    tmpdir,
    setPaths,
    getPaths,
    resolve,
    resolveDocit,
    getRoutes,
    getRoutesImportStr,
    treeBuild,
    treeWalk,
    headBuild,
    getCommonPaths
};
