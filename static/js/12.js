(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{19:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return u}));var t,e,o,p=a(0),c=a(22),l=a.n(c);class u extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"为什么需要预览组件",hash:"%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E9%A2%84%E8%A7%88%E7%BB%84%E4%BB%B6"},{level:2,title:"如何使用",hash:"%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8"},{level:2,title:"二次定制",hash:"%E4%BA%8C%E6%AC%A1%E5%AE%9A%E5%88%B6"},{level:2,title:"原理",hash:"%E5%8E%9F%E7%90%86"}]})}}t=u,e="components",o={"code-preview-0":l.a},e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}.call(this,a(3))},20:function(n,s,a){"use strict";a.r(s),s.default={initData:()=>({text:"From codebox.md."})}},22:function(n,s,a){var t=a(1);a(45);var e=a(46),o=a(20).default;n.exports=a(20),n.exports.default=t(o,e,[])},44:function(n,s){n.exports=' <div class="content"># Markdown 预览组件 SDoc 实现了针对 Markdown 的内容分发 API。通过这个特性，你可以将你的文档分割成多个片段，以便于在组件中灵活组合。 ## 为什么需要预览组件 技术开发文档里，会有示例**代码片段展示**，同时期望代码能够渲染运行，展示**代码运行结果**。 因此在 SDoc 里，默认集成了可执行的 Markdown 代码片段，通过 `codebox` 标签语法，封装预览组件，同时展现代码片段和运行代码片段。 ## 如何使用 文档中通过 `codebox` 的标签，包含 San 单文件组件的标准写法，会实现同时预览组件和显示组件代码的功能。 如下示例使用 `codebox` 预览组件渲染的结果，可以通过点击按钮 <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" width="16" style="margin:0"/> 查看包含的代码： <codebox> <code-preview-0 slot="code-preview"></code-preview-0> <section slot="text-place-holder"><h4 id="%E8%AF%B4%E6%98%8E">说明</h4> <p>这段文字来自<code>codebox.md</code>.</p> </section> <div slot="code-place-holder"> <div class="markdown"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>codebox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>&#123;&#123;text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n        <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                text<span class="token operator">:</span> <span class="token string">\'From codebox.md.\'</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n    <span class="token atrule"><span class="token rule">@red</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>\n    <span class="token selector">#codebox</span> <span class="token punctuation">{</span>\n        <span class="token selector">h2</span> <span class="token punctuation">{</span>\n            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code></pre> </div> </div> </codebox> ## 二次定制 SDoc 提供了默认的 `codebox` 组件，如果实际项目不满足时，可以进行二次定制开发，具体参考 [codebox 组件](https://github.com/kidnes/san-docit/blob/master/%40sdoc/theme/global-components/codebox.san)。 二次开发中，提供三个 `slot` 插槽区，可由用户自由定制结构和样式，三个`slot` 插槽的 `name` 分别为： - `code-preview`：代码片段渲染结果，由 `codebox` 标签里的 `html` 或 `san` 代码部分渲染的结果； - `text-place-holder`：代码说明部分的标题和描述 - `code-place-holder`：代码片段区 具体使用方式： 1. 首先新建 `codebox.san` 放在 `components` 目录，会自动加载成全局组件； 2. 在 `template` 需要的地方插入如下 `slot` 标签； ```html <slot name="code-preview"></slot> ``` ## 原理 首先了解下 md 文档的编译过程，编译阶段首先由 `markdown-loader` 处理成San的单文件组件，再经 `san-loader` 编译成可执行的San组件，交给浏览器运行。 当文档中包含 `codebox` 标签时，`markdown-loader` 会把文档处理成如下结构，最后在运行阶段由全局的 `codebox` 组件展示： ```html <codebox> <code-preview slot="code-preview"></code-preview> <section slot="text-place-holder">${textPlaceHolder}</section> <div slot="code-place-holder">${codePlaceHolder}</div> </codebox> ``` - `code-preview` 表示代码片段渲染结果的组件，由 `codebox` 标签里的 `html` 或 `san` 代码部分渲染的结果； - `text-place-holder` 提取说明部分的标题和描述 - `code-place-holder` 提取代码预览部分 </div> '},45:function(n,s,a){"use strict";a.r(s)},46:function(n,s){n.exports=' <div id="codebox"> <h2>{{text}}</h2> </div> '},56:function(n,s,a){var t=a(1),e=a(44),o=a(19).default;n.exports=a(19),n.exports.default=t(o,e,[])}}]);