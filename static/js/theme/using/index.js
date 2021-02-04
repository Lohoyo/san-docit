!function(e){function n(n){for(var o,s,c=n[0],p=n[1],u=n[2],i=0,f=[];i<c.length;i++)s=c[i],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);for(l&&l(n);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var p=t[c];0!==r[p]&&(o=!1)}o&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={10:0,20:0},a=[];function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/san-docit/";var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=p;a.push([53,0]),t()}({16:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"default",(function(){return c}));var o,r,a,s=t(0);class c extends s.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0})}}a={},(r="components")in(o=c)?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a}.call(this,t(3))},41:function(e,n){e.exports=' <div class="content"><div class="markdown"><h1 id="%E4%BD%BF%E7%94%A8%E4%B8%BB%E9%A2%98"><a class="header-anchor" href="#%E4%BD%BF%E7%94%A8%E4%B8%BB%E9%A2%98">#</a> 使用主题</h1> <p>通过 <code>config.js</code> 配置文件加载使用主题。</p> <p>一个主题可以在以 <code>sdoc-theme-xxx</code> 的形式发布到 npm，你可以这样使用它：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    theme<span class="token operator">:</span> <span class="token string">\'sdoc-theme-xx\'</span>\n<span class="token punctuation">}</span></code></pre> <blockquote> <p><strong>注意</strong></p> <p>以 <code>@sdoc/theme-</code> 开头的主题是官方维护的主题。</p> </blockquote> </div></div> '},53:function(e,n,t){var o=t(1),r=t(41),a=t(16).default;e.exports=t(16),e.exports.default=o(a,r,[])}});