(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6],{12:function(s,n,a){"use strict";a.r(n),function(s){a.d(n,"default",(function(){return t}));var l,o,e,c=a(0);class t extends c.a{inited(){s.hub&&s.hub.fire&&s.hub.fire("changed",{level:0})}}e={},(o="components")in(l=t)?Object.defineProperty(l,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[o]=e}.call(this,a(3))},37:function(s,n){s.exports=' <div class="content"><div class="markdown"><h1 id="%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B"><a class="header-anchor" href="#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B">#</a> 快速上手</h1> <blockquote> <p><strong>前提条件</strong></p> <p>SDoc 需要 Node.js (opens new window)&gt;= 8.6</p> </blockquote> <p>本文会帮助你从头搭建一个简单的 SDoc 文档。如果你想在一个现有项目中使用 SDoc 管理文档，从步骤 3 开始。</p> <ol> <li>创建并进入一个新目录</li> </ol> <pre class="language-shell"><code class="language-shell"><span class="token function">mkdir</span> sdoc-starter <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> sdoc-starter</code></pre> <ol start="2"> <li>使用你喜欢的包管理器进行初始化</li> </ol> <pre class="language-shell"><code class="language-shell"><span class="token function">yarn</span> init <span class="token comment"># npm init</span></code></pre> <ol start="3"> <li>将 SDoc 安装为本地依赖</li> </ol> <p>我们已经不再推荐全局安装 SDoc</p> <pre class="language-shell"><code class="language-shell"><span class="token function">yarn</span> <span class="token function">add</span> -D @sdoc/cli <span class="token comment"># npm install -D @sdoc/cli</span></code></pre> <blockquote> <p><strong>注意</strong></p> <p>如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn 而不是 npm 来安装 SDoc。因为在这种情形下，npm 会生成错误的依赖树。</p> </blockquote> <ol start="4"> <li>创建你的第一篇文档</li> </ol> <pre class="language-shell"><code class="language-shell"><span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">\'# Hello SDoc\'</span> <span class="token operator">></span> docs/README.md</code></pre> <ol start="5"> <li>在 package.json 中添加一些 scripts</li> </ol> <p>这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。</p> <pre class="language-shell"><code class="language-shell"><span class="token punctuation">{</span>\n  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"docs:start"</span><span class="token builtin class-name">:</span> <span class="token string">"sdoc start docs"</span>,\n    <span class="token string">"docs:build"</span><span class="token builtin class-name">:</span> <span class="token string">"sdoc build docs"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <ol start="6"> <li>在本地启动服务器</li> </ol> <pre class="language-shell"><code class="language-shell"><span class="token function">yarn</span> docs:start <span class="token comment"># npm run docs:start</span></code></pre> <p>SDoc 会在 http://localhost:8080 启动一个热重载的开发服务器。</p> <p>现在，你应该已经有了一个简单可用的 SDoc 文档。接下来，了解一下推荐的 目录结构 和 SDoc 中的 基本配置。</p> </div></div> '},49:function(s,n,a){var l=a(1),o=a(37),e=a(12).default;s.exports=a(12),s.exports.default=l(e,o,[])}}]);