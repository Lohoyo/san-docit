(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{18:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var p,t,o,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"导航栏",hash:"%E5%AF%BC%E8%88%AA%E6%A0%8F",children:[{level:3,title:"导航栏 Logo",hash:"%E5%AF%BC%E8%88%AA%E6%A0%8F-logo"},{level:3,title:"导航栏链接",hash:"%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5"},{level:3,title:"禁用导航栏",hash:"%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F"}]},{level:2,title:"侧边栏",hash:"%E4%BE%A7%E8%BE%B9%E6%A0%8F",children:[{level:3,title:"多个侧边栏",hash:"%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F"}]}]})}}o={},(t="components")in(p=c)?Object.defineProperty(p,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):p[t]=o}.call(this,a(3))},43:function(n,s){n.exports=' <div class="content"><div class="markdown"><h1 id="%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE"><a class="header-anchor" href="#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE">#</a> 默认主题配置</h1> <div class="info"> <p><strong>提示</strong></p> <p>本页所列的选项仅对默认主题生效。如果你在使用一个自定义主题，选项可能会有不同。</p> </div> <h2 id="%E5%AF%BC%E8%88%AA%E6%A0%8F"><a class="header-anchor" href="#%E5%AF%BC%E8%88%AA%E6%A0%8F">#</a> 导航栏</h2> <p>导航栏可能包含你的页面标题、它们均取决于你的配置。</p> <h3 id="%E5%AF%BC%E8%88%AA%E6%A0%8F-logo"><a class="header-anchor" href="#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo">#</a> 导航栏 Logo</h3> <p>你可以通过 <code>themeConfig.logo</code> 增加导航栏 Logo ，Logo 可以被放置在<a href="https://github.com/kidnes/san-docit/tree/master/%40sdoc/theme/public" target="_blank">公共文件目录</a>：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        logo<span class="token operator">:</span> <span class="token string">\'logo.svg\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <h3 id="%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5"><a class="header-anchor" href="#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5">#</a> 导航栏链接</h3> <p>你可以通过 <code>themeConfig.nav</code> 增加一些导航栏链接:</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        nav<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">\'Home\'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">\'Github\'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">\'https://github.com/kidnes/san-docit\'</span><span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>外部链接 <code>&lt;a&gt;</code> 标签的特性将默认包含<code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>，你可以提供 <code>target</code> 与 <code>rel</code>，它们将被作为特性被增加到 <code>&lt;a&gt;</code> 标签上：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        nav<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">\'Home\'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> target<span class="token operator">:</span><span class="token string">\'_self\'</span><span class="token punctuation">,</span> rel<span class="token operator">:</span><span class="token string">\'\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">\'Github\'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">\'https://github.com/kidnes/san-docit\'</span><span class="token punctuation">,</span> target<span class="token operator">:</span><span class="token string">\'_blank\'</span><span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <h3 id="%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F"><a class="header-anchor" href="#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F">#</a> 禁用导航栏</h3> <p>你可以使用 <code>themeConfig.navbar</code> 来禁用所有页面的导航栏：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        navbar<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <h2 id="%E4%BE%A7%E8%BE%B9%E6%A0%8F"><a class="header-anchor" href="#%E4%BE%A7%E8%BE%B9%E6%A0%8F">#</a> 侧边栏</h2> <p>想要使 侧边栏（Sidebar）生效，需要配置 <code>themeConfig.sidebar</code>，基本的配置，需要一个包含了多个链接的数组：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">\'/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'/page-a/\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">[</span><span class="token string">\'/page-b/\'</span><span class="token punctuation">]</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>路由配置需要以 <code>/</code> 结尾，会自动解析对应的 <code>md</code> 文件，并提取的 <code>title</code> 标题。对标题的提取，可以明确地在<code>YAML front matter</code> 中指定页面的标题，或者自动分析 <code>md</code> 文件的 <code>[H1 H2]</code> 标题。</p> <p>路由解析后会变成如下的数据结构：</p> <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>\n    <span class="token property">"filename"</span><span class="token operator">:</span> <span class="token string">"/a/b/c.md"</span><span class="token punctuation">,</span>\n    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"标题"</span>\n<span class="token punctuation">}</span></code></pre> <p>所以此处可以直接配置成这三项，明确指定 <code>title</code> 和 <code>path</code>。</p> <p>有些情况下，我们侧边栏的导航会存在多级的树状结构，父节点不能点击，这时可以通过配置 <code>title</code> 和 <code>children</code> 来实现。</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">\'/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">\'介绍\'</span><span class="token punctuation">,</span>\n                    path<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">\'配置\'</span><span class="token punctuation">,</span>\n                    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'/basic-config/\'</span><span class="token punctuation">,</span> <span class="token string">\'/config/\'</span><span class="token punctuation">,</span> <span class="token string">\'/advance-config/\'</span><span class="token punctuation">]</span>\n                <span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>侧边栏除了md文件外，同时支持 JS 文件，以及 SSR 渲染。</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">\'/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">\'Button 按钮\'</span><span class="token punctuation">,</span>\n                filename<span class="token operator">:</span> <span class="token string">\'/components/button/docs/index.js\'</span>\n            <span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F"><a class="header-anchor" href="#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F">#</a> 多个侧边栏</h3> <p>如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：</p> <pre class="language-html"><code class="language-html">.\n├─ README.md\n├─ contact.md\n├─ about.md\n├─ foo/\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar/\n   ├─ README.md\n   ├─ three.md\n   └─ four.md</code></pre> <p>接着，遵循以下的侧边栏配置：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// .sdoc/config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">\'/foo/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'/foo/one/\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'/foo/two/\'</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n            <span class="token string">\'/bar/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'/bar/three/\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'/bar/four/\'</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n            <span class="token comment">// fallback，放在最后</span>\n            <span class="token string">\'/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'/contact/\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'/about/\'</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <blockquote> <p><strong>注意</strong></p> <p>确保 fallback 侧边栏被最后定义。SDoc 会按顺序遍历侧边栏配置来寻找匹配的配置。</p> </blockquote> </div></div> '},55:function(n,s,a){var p=a(1),t=a(43),o=a(18).default;n.exports=a(18),n.exports.default=p(o,t,[])}}]);