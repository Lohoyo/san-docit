(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{21:function(n,s,o){"use strict";o.r(s),function(n){o.d(s,"default",(function(){return c}));var a,e,t,p=o(0);class c extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"三种导出类型",hash:"%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B"}]})}}t={},(e="components")in(a=c)?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t}.call(this,o(3))},47:function(n,s){n.exports=' <div class="content"><div class="markdown"><h1 id="markdown-%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD"><a class="header-anchor" href="#markdown-%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD">#</a> Markdown 高级功能</h1> <h2 id="%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B"><a class="header-anchor" href="#%E4%B8%89%E7%A7%8D%E5%AF%BC%E5%87%BA%E7%B1%BB%E5%9E%8B">#</a> 三种导出类型</h2> <p>SDoc 中的 <code>markdown-loader</code> 对 md 文件支持三种类型的导出，以支持在同一个MD文件中，导出文档 <code>codebox</code> 和 <code>markdown</code> 两部分内容组合。</p> <p>使用方式通过md文件 <code>exportType</code> 的query参数来决定：</p> <ul> <li><code>exportType=markdown</code>：导出全部的 <code>markdown</code> 内容，不包括 <code>codebox</code> 标签内容；</li> <li><code>exportType=component</code>：只导出预览的 <code>codebox</code> 标签内容，不包括 <code>markdown</code> 内容；</li> <li>不加参数：导出全部 <code>markdown</code> 和 <code>codebox</code> 内容；</li> </ul> <p>如下示例代码展示三种不同的导出情况。</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> san <span class="token keyword">from</span> <span class="token string">\'san\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxComponent <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxMd <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=markdown\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxAll <span class="token keyword">from</span> <span class="token string">\'./codebox.md\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>\n        &lt;h1>Markdown 高级配置&lt;/h1>\n        &lt;codebox-component/>&lt;hr>\n        &lt;codebox-md/>&lt;hr>\n        &lt;codebox-all/>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'codebox-component\'</span><span class="token operator">:</span> codeboxComponent<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-md\'</span><span class="token operator">:</span> codeboxMd<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-all\'</span><span class="token operator">:</span> codeboxAll\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},57:function(n,s,o){var a=o(1),e=o(47),t=o(21).default;n.exports=o(21),n.exports.default=a(t,e,[])}}]);