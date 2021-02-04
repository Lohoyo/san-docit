!function(n){function a(a){for(var o,p,c=a[0],l=a[1],r=a[2],u=0,i=[];u<c.length;u++)p=c[u],Object.prototype.hasOwnProperty.call(e,p)&&e[p]&&i.push(e[p][0]),e[p]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(d&&d(a);i.length;)i.shift()();return t.push.apply(t,r||[]),s()}function s(){for(var n,a=0;a<t.length;a++){for(var s=t[a],o=!0,c=1;c<s.length;c++){var l=s[c];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),n=p(p.s=s[0]))}return n}var o={},e={8:0,13:0},t=[];function p(a){if(o[a])return o[a].exports;var s=o[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,p),s.l=!0,s.exports}p.m=n,p.c=o,p.d=function(n,a,s){p.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:s})},p.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},p.t=function(n,a){if(1&a&&(n=p(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var s=Object.create(null);if(p.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var o in n)p.d(s,o,function(a){return n[a]}.bind(null,o));return s},p.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return p.d(a,"a",a),a},p.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},p.p="/san-docit/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var r=0;r<c.length;r++)a(c[r]);var d=l;t.push([57,0]),s()}({21:function(n,a,s){"use strict";s.r(a),function(n){s.d(a,"default",(function(){return c}));var o,e,t,p=s(0);class c extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"三种导出类型",hash:"%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B"},{level:2,title:"原理",hash:"%E5%8E%9F%E7%90%86"}]})}}t={},(e="components")in(o=c)?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t}.call(this,s(3))},47:function(n,a){n.exports=' <div class="content"><div class="markdown"><h1 id="markdown-%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD"><a class="header-anchor" href="#markdown-%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD">#</a> Markdown 高级功能</h1> <h2 id="%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B"><a class="header-anchor" href="#%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B">#</a> 三种导出类型</h2> <p>SDoc 中的 <code>markdown-loader</code> 对 md 文件支持三种类型的导出，以支持在同一个MD文件中，导出文档 <code>codebox</code> 和 <code>markdown</code> 两部分内容组合。</p> <p>使用方式通过md文件 <code>exportType</code> 的query参数来决定：</p> <ul> <li><code>exportType=markdown</code>：导出全部的 <code>markdown</code> 内容，不包括 <code>codebox</code> 标签内容；</li> <li><code>exportType=component</code>：只导出预览的 <code>codebox</code> 标签内容，不包括 <code>markdown</code> 内容；</li> <li>不加参数：导出全部 <code>markdown</code> 和 <code>codebox</code> 内容；</li> </ul> <p>如下示例代码展示三种不同的导出情况。</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> san <span class="token keyword">from</span> <span class="token string">\'san\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxComponent <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxMd <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=markdown\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxAll <span class="token keyword">from</span> <span class="token string">\'./codebox.md\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>\n        &lt;h1>Markdown 高级配置&lt;/h1>\n        &lt;codebox-component/>&lt;hr>\n        &lt;codebox-md/>&lt;hr>\n        &lt;codebox-all/>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'codebox-component\'</span><span class="token operator">:</span> codeboxComponent<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-md\'</span><span class="token operator">:</span> codeboxMd<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-all\'</span><span class="token operator">:</span> codeboxAll\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <ul> <li></li> </ul> <h2 id="%E5%8E%9F%E7%90%86"><a class="header-anchor" href="#%E5%8E%9F%E7%90%86">#</a> 原理</h2> <p>首先了解下 md 文档的编译过程，编译阶段首先由 <code>markdown-loader</code> 处理成San的单文件组件，再经 <code>san-loader</code> 编译成可执行的San组件，交给浏览器运行。</p> <p>当文档中包含 <code>codebox</code> 标签时，<code>markdown-loader</code> 会把文档处理成如下结构，最后在运行阶段由全局的 <code>codebox</code> 组件展示：</p> <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>codebox</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code-preview</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>code-preview<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code-preview</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-place-holder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>${textPlaceHolder}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>code-place-holder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>${codePlaceHolder}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>codebox</span><span class="token punctuation">></span></span></code></pre> <ul> <li><code>code-preview</code> 表示代码片段渲染结果的组件，由 <code>codebox</code> 标签里的 <code>html</code> 或 <code>san</code> 代码部分渲染的结果；</li> <li><code>text-place-holder</code> 提取说明部分的标题和描述</li> <li><code>code-place-holder</code> 提取代码预览部分</li> </ul> </div></div> '},57:function(n,a,s){var o=s(1),e=s(47),t=s(21).default;n.exports=s(21),n.exports.default=o(t,e,[])}});