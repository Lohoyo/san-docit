!function(e){function t(t){for(var n,i,a=t[0],c=t[1],d=t[2],l=0,u=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(h&&h(t);u.length;)u.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={1:0},o={1:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[];i[e]?t.push(i[e]):0!==i[e]&&{12:1}[e]&&t.push(i[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+".css",o=a.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var d=(h=s[c]).getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===n||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var h;if((d=(h=l[c]).getAttribute("data-href"))===n||d===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";u.onerror=u.onload=function(n){if(u.onerror=u.onload=null,"load"===n.type)t();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,delete i[e],u.parentNode.removeChild(u),r(c)}},u.href=o,document.head.appendChild(u)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"static/js/"+({}[e]||e)+".js"}(e);var d=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,r[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/san-docit/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var h=d;s.push([73,0]),r()}([,,,,function(e,t,r){var n,i,o;!function(s){function a(e){var t={hash:"",queryString:"",params:{},query:{},path:e},r=t.path.indexOf("#");r>=0&&(t.hash=t.path.slice(r+1),t.path=t.path.slice(0,r));var n=t.query,i=t.path.indexOf("?");if(i>=0){t.queryString=t.path.slice(i+1),t.path=t.path.slice(0,i);for(var o=t.queryString.split("&"),s=0;s<o.length;s++){var a=o[s],c=a.indexOf("="),d="";c>0&&(d=a.slice(c+1),a=a.slice(0,c));var l=decodeURIComponent(a);d=decodeURIComponent(d),n.hasOwnProperty(l)?n[l]=[].concat(n[l],d):n[l]=d}}return t}function c(e,t){var r=a(e),n=a(t),i=r.path;if(0===i.indexOf("/"))return e;var o=i.split("/"),s=n.path.split("/");s.pop();for(var c=0;c<o.length;c++){var d=o[c];switch(d){case"..":s.pop();break;case".":break;default:s.push(d)}}return""!==s[0]&&s.unshift(""),s.join("/")+(r.queryString?"?"+r.queryString:"")}var d="undefined"!=typeof window;function l(){}function h(){if(!d)return"";var e=location.href.indexOf("#");return e<0?"/":location.href.slice(e+1)||"/"}function u(){this.current=h(),this.referrer="";var e=this;this.hashChangeHandler=function(){e.redirect(h())}}function p(){return d?location.pathname+location.search:""}function f(){this.current=p(),this.referrer="";var e=this;this.popstateHandler=function(){e.referrer=e.current,e.current=p(),e.fire("redirect",{url:e.current,referrer:e.referrer})}}l.prototype.on=function(e,t){"function"==typeof t&&(this._eventListeners||(this._eventListeners={}),this._eventListeners[e]||(this._eventListeners[e]=[]),this._eventListeners[e].push(t))},l.prototype.un=function(e,t){if(this._eventListeners&&this._eventListeners[e])if(t)for(var r=this._eventListeners[e],n=r.length;n--;)r[n]===t&&r.splice(n,1);else this._eventListeners[e]=[]},l.prototype.fire=function(e,t){if(!e)throw new Error("No event type specified");var r=this._eventListeners&&this._eventListeners[e];if(r)for(var n=0;n<r.length;n++)r[n](t)},u.prototype=new l,u.prototype.constructor=u,u.prototype.start=function(){window.addEventListener&&window.addEventListener("hashchange",this.hashChangeHandler,!1),window.attachEvent&&window.attachEvent("onhashchange",this.hashChangeHandler)},u.prototype.stop=function(){window.removeEventListener&&window.removeEventListener("hashchange",this.hashChangeHandler,!1),window.detachEvent&&window.detachEvent("onhashchange",this.hashChangeHandler)},u.prototype.redirect=function(e,t){t=t||{},e=c(e,this.current);var r=this.current,n=e!==r;n?(this.referrer=r,this.current=e,location.hash=e):r=this.referrer,!n&&!t.force||t.silent||this.fire("redirect",{url:e,referrer:r})},u.prototype.reload=function(){this.redirect(this.current,{force:!0})},f.prototype=new l,f.prototype.constructor=u,f.prototype.start=function(){window.addEventListener("popstate",this.popstateHandler)},f.prototype.stop=function(){window.removeEventListener("popstate",this.popstateHandler)},f.prototype.redirect=function(e,t){t=t||{},e=c(e,this.current);var r=this.current,n=e!==r;n&&(this.referrer=r,this.current=e,history.pushState({},"",e)),!n&&!t.force||t.silent||this.fire("redirect",{url:e,referrer:r})},f.prototype.reload=function(){this.fire("redirect",{url:this.current,referrer:this.referrer})};var m=365611;function g(e){return e.prototype&&(5===e.prototype.nodeType||"san-cmpt"===e.prototype._type)}function v(e){return function(t){for(var r,n=a(t.url),i=0;i<e.routes.length;i++){var o=e.routes[i],s=o.rule.exec(n.path);if(s){r=o;for(var c=o.keys||[],d=1;d<s.length;d++){var l=c[d]||d,h=s[d];n.query[l]=h,n.params[l]=h}n.referrer=t.referrer,n.config=o.config;break}}i=0;var u=1,p={url:t.url,hash:n.hash,queryString:n.queryString,query:n.query,path:n.path,referrer:n.referrer,config:n.config,resume:m,suspend:function(){u=0},stop:function(){u=-1}};function f(){u>0&&(i<e.listeners.length?(e.listeners[i].call(e,p,n.config),u>0&&m()):function(){if(r)e.doRoute(r,n);else for(var t=e.routeAlives.length;t--;)e.routeAlives[t].component.dispose(),e.routeAlives.splice(t,1)}())}function m(){u=1,i++,f()}f()}}function w(e){var t=(e=e||{}).mode||"hash";this.routes=[],this.routeAlives=[],this.listeners=[],this.afterListeners=[],this.locatorRedirectHandler=v(this),this.setMode(t)}w.prototype.listen=function(e){this.listeners.push(e)},w.prototype.afterEach=function(e){this.afterListeners.push(e)},w.prototype.unlisten=function(e){for(var t=this.listeners.length;t--;)this.listeners[t]===e&&this.listeners.splice(t,1);for(t=this.afterListeners.length;t--;)this.afterListeners[t]===e&&this.afterListeners.splice(t,1)},w.prototype.start=function(){return this.isStarted||(this.isStarted=!0,this.locator.on("redirect",this.locatorRedirectHandler),this.locator.start(),this.locator.reload()),this},w.prototype.stop=function(){return this.locator.un("redirect",this.locatorRedirectHandler),this.locator.stop(),this.isStarted=!1,this},w.prototype.setMode=function(e){if(e=e.toLowerCase(),this.mode!==e){this.mode=e;var t=!1;switch(this.isStarted&&(this.stop(),t=!0),e){case"hash":this.locator=new u;break;case"html5":this.locator=new f}return t&&this.start(),this}},w.prototype.doRoute=function(e,t){for(var r=!1,n=this.routeAlives.length;n--;){var i=this.routeAlives[n];i.id===e.id?(i.component.data.set("route",t),i.component._callHook("route"),r=!0):(i.component.dispose(),this.routeAlives.splice(n,1))}if(!r)if(e.Component)if(g(e.Component))this.attachCmpt(e,t);else{var o=this;e.Component().then((function(r){g(r)?e.Component=r:r.__esModule&&g(r.default)&&(e.Component=r.default),o.attachCmpt(e,t)}))}else e.handler.call(this,t)},w.prototype.attachCmpt=function(e,t){var r=new e.Component;r.data.set("route",t),r._callHook("route");var n=function(e){switch(typeof e){case"object":return e;case"string":return document.querySelector?document.querySelector(e):document.getElementById(e.replace(/#/i,""))}}(e.target);if(!n)throw new Error('[SAN-ROUTER ERROR] Attach failed, target element "'+e.target+'" is not found.');r.attach(n),this.routeAlives.push({component:r,id:e.id}),this.afterListeners.forEach(t=>{t.call(y.router,e)})},w.prototype.add=function(e){var t=e.rule,r=[""];if("string"==typeof t){var n=t.replace(/\/:([a-z0-9_-]+)(?=\/|$)/gi,(function(e,t){return r.push(t),"/([^/\\s]+)"}));t=new RegExp("^"+n+"$","i")}if(!(t instanceof RegExp))throw new Error("[SAN-ROUTER ERROR] Rule must be string or RegExp!");var i=(++m).toString();return this.routes.push({id:i,rule:t,handler:e.handler,keys:r,target:e.target||"#main",Component:e.Component,config:e}),this};var y={Link:r(2).defineComponent({template:'<a href="{{hrefPrefix}}{{href}}" onclick="return false;" on-click="clicker($event)" target="{{target}}" class="{{isActive ? activeClass : \'\'}}"><slot/></a>',clicker:function(e){var t=this.data.get("href");"string"==typeof t&&y.router.locator.redirect(t.replace(/^#/,"")),e.preventDefault?e.preventDefault():e.returnValue=!1},inited:function(){var e=this;this.routeListener=function(t){e.data.set("isActive",t.url===e.data.get("href"))},this.routeListener({url:y.router.locator.current}),y.router.listen(this.routeListener)},disposed:function(){y.router.unlisten(this.routeListener),this.routeListener=null},initData:function(){return{isActive:!1,hrefPrefix:"hash"===y.router.mode?"#":""}},computed:{href:function(){return c(this.data.get("to")||"",y.router.locator.current)}}}),router:null,Router:w,HashLocator:u,HTML5Locator:f,resolveURL:c,parseURL:a,version:"1.2.2"};i=[],void 0===(o="function"==typeof(n=y)?n.apply(t,i):n)||(e.exports=o)}()},function(e,t,r){"use strict";const n="/san-docit/".length>1?"/san-docit/".slice(0,-1):"",i=(e,t)=>{e&&(t(e),e.children&&e.children.forEach(e=>{t(e),e.children&&i(e,t)}))};t.a={base:n,treeWalk:i}},function(e,t,r){"use strict";(function(e){var n=r(2);const i=new n.Component({});e.hub=i,t.a=i}).call(this,r(3))},,function(e,t,r){var n=r(1),i=r(64),o=r(29).default;e.exports=r(29),e.exports.default=n(o,i,[])},,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(4),o=r(31),s=r.n(o),a=r(8),c=r.n(a),d=r(33),l=r.n(d),h=r(6),u=r(5);t.default={components:{"router-link":i.Link,"content-area":s.a,drawer:l(),tree:c()},dataTypes:{docit:n.DataTypes.object},computed:{sidebar(){const e=this.data.get("docit"),t=e.themeConfig.sidebar,r=e.pathname||location.pathname;if(t[r])return t[r];for(let e in t){let n=t[e];for(let e=0;e<n.length;e++)if(n[e].path===r)return n}return t["/"]||[]}},initData:()=>({isShowSidebar:!0,selectedNode:[]}),inited(){h.a.on("router-changed",this.isActive.bind(this))},isActive(e){const t=[],r=u.a.base,n=this.data.get("sidebar");u.a.treeWalk(n,n=>{r+n.path===e.path&&t.push(n)}),this.data.set("selectedNodes",t)},getPath:e=>u.a.base+e.path}},function(e,t,r){"use strict";r.r(t),function(e){var n=r(9),i=r.n(n),o=r(10),s=r.n(o),a=r(8),c=r.n(a),d=r(5);t.default={components:{tree:c()},initData:()=>({toc:{},isShowToc:!0,selectedNodes:[]}),inited(){let t={};const r=this.data.get("docit");r&&r.toc?t=r.toc:e.SAN_DOCIT&&e.SAN_DOCIT.toc&&(t=e.SAN_DOCIT.toc),this.data.set("toc",t)},attached(){e.hub.on("changed",this.onChanged.bind(this)),this.__onScroll=this.onScroll.bind(this),this.__onResize=this.onResize.bind(this),i()(e,"scroll",this.__onScroll),i()(e,"resize",this.__onResize),this.initScroll(),this.resize(),this.ref("view").innerHTML=""},getHash(e){const t=this.data.get("docit");return(t.pathname?d.a.base+t.pathname:location.pathname)+"#"+e},onChanged(e){this.data.set("toc",e),this.nextTick(this.initScroll.bind(this)),this.resize()},getTocCount(){const e=this.data.get("toc");let t=0;return d.a.treeWalk(e,()=>t++),t},onResize(){this.timer&&e.clearTimeout(this.timer),this.timer=e.setTimeout(()=>{this.resize(),this.timer=null},10)},resize(){const e=document.documentElement.clientWidth||document.body.clientWidth,t=e>1e3&&this.getTocCount()>2;t!==this.data.get("isShowToc")&&this.data.set("isShowToc",t);const r=e>800;r!==this.parent.data.get("isShowSidebar")&&this.parent.data.set("isShowSidebar",r)},initScroll(){const e=this.ref("view").querySelectorAll("H2, H3");if(!e)return;this.postions=[],this.hashs=[],e.forEach(e=>{this.postions.push(e.offsetTop),this.hashs.push(e.id)});const t=this.hashs.length;this.postions[t]=Number.MAX_VALUE,this.hashs[t]=this.hashs[this.hashs.length-1];const r=this.data.get("toc");r&&r.children&&r.children.length>0&&this.data.set("selectedNodes",[r.children[0]])},onScroll(t){this.timer&&e.clearTimeout(this.timer),this.timer=e.setTimeout(()=>{this.scrollPostion(),this.timer=null},10)},scrollPostion(){const e=document.documentElement.scrollTop||document.body.scrollTop,t=this.postions.findIndex(t=>t>=e);-1!==t&&this.changeSelected(this.hashs[t])},changeSelected(e){if(this.selected===e)return;const t=[],r=this.data.get("toc");d.a.treeWalk(r,r=>{r.hash===e&&t.push(r)}),this.data.set("selectedNodes",t),this.selected=e},detached(){s()(e,"scroll",this.__onScroll),s()(e,"resize",this.__onResize)}}}.call(this,r(3))},function(e,t,r){"use strict";r.r(t);var n=r(2);t.default={components:{},dataTypes:{treeNode:n.DataTypes.object},getNodeId:e=>e.path||e.hash}},function(e,t,r){"use strict";r.r(t),t.default={initData:()=>({isOpened:!1}),onClick(){this.data.set("isOpened",!this.data.get("isOpened"))}}},function(e,t,r){"use strict";r.r(t),t.default={initData:()=>({isExpand:!1}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))}}},function(e,t,r){"use strict";r.r(t),t.default={}},function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(32),o=r.n(i);const s=(e,t)=>new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className);var a=(e,t)=>{s(e,t)||(e.className+=" "+t)},c=(e,t)=>{if(!s(e,t))return;const r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r,"")};t.default={components:{"tree-node":o.a},dataTypes:{treeData:n.DataTypes.object,selectedNodes:n.DataTypes.array},attached(){this.watch("selectedNodes",this.active);const e=this.data.get("selectedNodes");e&&e.length>0&&this.active(e)},active(e){const t=this.el.querySelectorAll("li[data-id]");for(let r=0;r<t.length;r++){const n=t[r],i=n.getAttribute("data-id");void 0!==e.find(e=>i===(e.path||e.hash))?a(n,"active"):c(n,"active")}}}},function(e,t,r){var n=r(1);r(61);var i=r(62),o=r(23).default;e.exports=r(23),e.exports.default=n(o,i,[])},function(e,t,r){var n=r(1),i=r(63),o=r(24).default;e.exports=r(24),e.exports.default=n(o,i,[])},function(e,t,r){var n=r(1),i=r(65),o=r(25).default;e.exports=r(25),e.exports.default=n(o,i,[])},function(e,t,r){var n=r(1);r(66);var i=r(67),o=r(26).default;e.exports=r(26),e.exports.default=n(o,i,[])},function(e,t,r){var n=r(1);r(68);var i=r(69),o=r(27).default;e.exports=r(27),e.exports.default=n(o,i,[])},function(e,t,r){var n=r(1),i=r(70),o=r(28).default;e.exports=r(28),e.exports.default=n(o,i,[])},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t)},function(e,t){e.exports=' <div id="site"> <header id="header"> <a href="{{docit.base}}" class="navbar"> <img src="{{ docit.base + docit.themeConfig.logo }}" alt="Home" class="logo"> <span>{{ docit.title }}</span> </a> <ul> <li s-for="nav in docit.themeConfig.nav"> <a target="{{nav.target || \'_blank\'}}" href="{{nav.link}}"> {{ nav.text }} </a> </li> </ul> </header> <aside s-if="isShowSidebar" id="sidebar" class="sidebar"> <tree treeData="{{sidebar}}" selectedNodes="{{selectedNodes}}"> <router-link s-if="treeNode.path" to="{{getPath(treeNode)}}"> {{ treeNode.title }} </router-link> <span s-else>{{ treeNode.title }}</span> </tree> </aside> <drawer s-else class="sidebar" style="width:0"> <tree treeData="{{sidebar}}" selectedNodes="{{selectedNodes}}" style="padding:50px 0"> <router-link s-if="treeNode.path" to="{{getPath(treeNode)}}"> {{ treeNode.title }} </router-link> <span s-else>{{ treeNode.title }}</span> </tree> </drawer> <content-area docit="{{docit}}" class="{{isShowSidebar ? \'\' : \'hidden\'}}"/> </div> '},function(e,t){e.exports=' <article id="content"> <div id="router-view" s-ref="view" class="router-view {{isShowToc ? \'\' : \'hidden\'}}"> {{ docit.content | raw }} </div> <aside s-if="isShowToc" class="toc"> <tree treeData="{{toc}}" selectedNodes="{{selectedNodes}}"> <a href="{{getHash(treeNode.hash)}}">{{ treeNode.title }}</a> </tree> </aside> </article> '},function(e,t){e.exports=' <ul class="tree"> <tree-node s-for="treeNode in treeData.children" treeNode="{{treeNode}}" selectedNodes="{{selectedNodes}}"> <slot var-treeNode="treeNode"></slot> </tree-node> </ul> '},function(e,t){e.exports=' <li data-id="{{getNodeId(treeNode)}}"> <slot var-treeNode="treeNode"></slot> <ul s-if="treeNode.children"> <li s-for="treeNode2 in treeNode.children" data-id="{{getNodeId(treeNode2)}}"> <slot var-treeNode="treeNode2"></slot> <ul s-if="treeNode2.children"> <li s-for="treeNode3 in treeNode2.children" data-id="{{getNodeId(treeNode3)}}"> <slot var-treeNode="treeNode3"></slot> <ul s-if="treeNode3.children"> <li s-for="treeNode4 in treeNode3.children" data-id="{{getNodeId(treeNode4)}}"> <slot var-treeNode="treeNode4"></slot> </li> </ul> </li> </ul> </li> </ul> </li> '},function(e,t,r){"use strict";r.r(t)},function(e,t){e.exports=' <div class="drawer-wrapper"> <div class="drawer drawer-left {{isOpened ? \'drawer-open\' : \'\'}}"> <div class="drawer-mask" on-click="onClick"></div> <div class="drawer-content-wrapper"> <div class="drawer-content"> <slot></slot> </div> <div class="drawer-handle" on-click="onClick"> <i class="drawer-handle-icon"></i> </div> </div> </div> </div> '},function(e,t,r){"use strict";r.r(t)},function(e,t){e.exports=' <section class="code-box {{isExpand ? \'expand\' : \'\'}}"> <section class="code-box-demo"> <slot name="code-preview"></slot> </section> <section class="code-box-meta"> <slot name="text-place-holder"></slot> <span class="code-expand-icon" on-click="toggleExpand"> <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand ? \'code-expand-icon-hide\':\'code-expand-icon-show\'}}"> <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand ? \'code-expand-icon-show\' : \'code-expand-icon-hide\'}}"> </span> </section> <section class="highlight-wrapper {{isExpand ? \'highlight-wrapper-expand\' : \'\'}}"> <slot s-if="isExpand" name="code-place-holder"></slot> </section> </section> '},function(e,t){e.exports=" <div>Not Found</div> "},,function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=72},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var n=r(0),i=r(2),o=r(30),s=r.n(o),a=r(6),c=r(34);const d={codebox:r.n(c).a};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object(n.b)(d);class h extends i.Component{}l(h,"components",{layout:s.a}),l(h,"dataTypes",{docit:i.DataTypes.object}),l(h,"template",'<layout docit="{{docit}}"><layout>');var u=r(4),p=r.n(u),f=r(7),m=r.n(f);const g="/san-docit/".length>1?"/san-docit/".slice(0,-1):"";var v=r(35),w=r.n(v);r(71);const y=new p.a.Router({mode:"html5"});p.a.router=y;const b={"/":()=>r.e(17).then(r.t.bind(null,48,7)),"/guide/quick-start/":()=>r.e(18).then(r.t.bind(null,49,7)),"/guide/directory-structure/":()=>r.e(16).then(r.t.bind(null,50,7)),"/guide/basic-config/":()=>r.e(14).then(r.t.bind(null,51,7)),"/guide/config/":()=>r.e(15).then(r.t.bind(null,52,7)),"/theme/using/":()=>r.e(20).then(r.t.bind(null,53,7)),"/theme/writing/":()=>r.e(21).then(r.t.bind(null,54,7)),"/theme/default-theme-config/":()=>r.e(19).then(r.t.bind(null,55,7)),"/codebox/":()=>r.e(12).then(r.t.bind(null,56,7)),"/markdown-advance/":()=>r.e(13).then(r.t.bind(null,57,7))},x={"/":{children:[{title:"指南",children:[{path:"/",filename:"guide/introduce.md",title:"介绍"},{path:"/guide/quick-start/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/quick-start.md",title:"快速上手"},{path:"/guide/directory-structure/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/directory-structure.md",title:"目录结构"},{path:"/guide/basic-config/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/basic-config.md",title:"基本配置"},{path:"/guide/config/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/config.md",title:"配置"}]},{title:"样式",children:[{path:"/theme/using/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/using.md",title:"使用主题"},{path:"/theme/writing/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/writing.md",title:"开发主题"},{path:"/theme/default-theme-config/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/default-theme-config.md",title:"默认主题配置"}]},{title:"深入",children:[{path:"/codebox/",filename:"advance/codebox.md",title:"Markdown 预览组件"},{path:"/markdown-advance/",filename:"advance/markdown-advance.md",title:"Markdown 高级能力"}]}]}},k=(e,t)=>{e&&(t(e),e.children&&e.children.forEach(e=>{t(e),e&&e.children&&k(e,t)}))};Object.keys(x).forEach(e=>{k(x[e],e=>(e=>{if(!e||!e.path)return;const t=e.path;let n=b[t]?b[t]:/\.js$/.test(e.filename)?r(72)(e.filename):"";n&&u.router.add({rule:g+t,Component:n,target:"#router-view"})})(e))});[{path:".*",component:w.a}].forEach(e=>{u.router.add({rule:g+e.path,Component:e.component,target:"#router-view"})}),u.router.listen(e=>{e.path!==e.referrer?(m.a.isRendered&&m.a.remove(),m.a.inc(),a.a.fire("router-changed",e)):e.stop()}),u.router.afterEach(e=>{m.a.done(!0)});var N=u.router;function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class E extends n.a{attached(){N.start()}}S(E,"components",{index:h}),S(E,"template",'<index docit="{{docit}}"><index>'),S(E,"computed",{docit:()=>({base:"/san-docit/",title:"sdoc",head:[["link",{rel:"icon",href:"/san-docit/favicon.ico"}]],meta:{description:"文档，文档工具，建站"},dest:".sdoc/dist",open:!0,theme:"@sdoc/theme-default",themeConfig:{logo:"logo.svg",nav:[{text:"GitHub",link:"https://github.com/kidnes/san-docit"}],sidebar:{"/":{children:[{title:"指南",children:[{path:"/",filename:"guide/introduce.md",title:"介绍"},{path:"/guide/quick-start/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/quick-start.md",title:"快速上手"},{path:"/guide/directory-structure/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/directory-structure.md",title:"目录结构"},{path:"/guide/basic-config/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/basic-config.md",title:"基本配置"},{path:"/guide/config/",filename:"/home/runner/work/san-docit/san-docit/docs/guide/config.md",title:"配置"}]},{title:"样式",children:[{path:"/theme/using/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/using.md",title:"使用主题"},{path:"/theme/writing/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/writing.md",title:"开发主题"},{path:"/theme/default-theme-config/",filename:"/home/runner/work/san-docit/san-docit/docs/theme/default-theme-config.md",title:"默认主题配置"}]},{title:"深入",children:[{path:"/codebox/",filename:"advance/codebox.md",title:"Markdown 预览组件"},{path:"/markdown-advance/",filename:"advance/markdown-advance.md",title:"Markdown 高级能力"}]}]}}},headHtmlSnippet:'<link rel="icon" href="/san-docit/favicon.ico"></link>'})}),new E({el:document.getElementById("site")})}]);