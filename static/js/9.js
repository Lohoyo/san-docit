(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{13:function(s,n,a){"use strict";a.r(n),function(s){a.d(n,"default",(function(){return l}));var t,e,c,o=a(1);class l extends o.a{inited(){s.hub&&s.hub.fire&&s.hub.fire("changed",{level:0,children:[{level:2,title:"默认的页面路由",hash:"%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1"}]})}}c={},(e="components")in(t=l)?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c}.call(this,a(4))},31:function(s,n){s.exports=' <div class="content"><div class="markdown"><h1 id="%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"><a class="header-anchor" href="#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">#</a> 目录结构</h1> <p>SDoc 遵循 “约定优于配置” 的原则，推荐的目录结构如下：</p> <pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">.</span>\n├── docs\n│   ├── .sdoc <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   ├── components <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   ├── theme <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   │   └── layout.san\n│   │   ├── public <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   ├── styles <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   │   ├── index.less\n│   │   │   └── vars.less\n│   │   ├── templates <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │   └── enhanceApp.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json</code></pre> <ul> <li><code>docs/.sdoc</code>: 用于存放全局的配置、组件、静态资源等。</li> <li><code>docs/.sdoc/components</code>: 该目录中的 San 组件将会被自动注册为全局组件。</li> <li><code>docs/.sdoc/theme</code>: 用于存放本地主题。</li> <li><code>docs/.sdoc/styles</code>: 用于存放样式相关的文件。</li> <li><code>docs/.sdoc/styles/index.less</code>: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式高的优先级。</li> <li><code>docs/.sdoc/styles/vars.less</code>: 用于重写默认颜色常量，或者设置新的 less 颜色常量。</li> <li><code>docs/.sdoc/public</code>: 静态资源目录。</li> <li><code>docs/.sdoc/templates</code>: 存储 HTML 模板文件。</li> <li><code>docs/.sdoc/templates/dev.ejs</code>: 用于开发环境的 HTML 模板文件。</li> <li><code>docs/.sdoc/templates/ssr.ejs</code>: 构建时基于 San SSR 的 HTML 模板文件。</li> <li><code>docs/.sdoc/config.js</code>: 配置文件的入口文件。</li> </ul> <blockquote> <p><strong>注意</strong></p> <p>当你想要去自定义 templates/ssr.ejs 或 templates/dev.ejs 时，最好基于 默认的模板文件来修改，否则可能会导致构建出错。</p> </blockquote> <h2 id="%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1"><a class="header-anchor" href="#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1">#</a> 默认的页面路由</h2> <p>此处我们把 docs 作为文档目录，下面所有的“文件的相对路径”都是相对于 docs 目录的。在项目根目录下的 package.json 中添加 scripts ：</p> <pre class="language-shell"><code class="language-shell"><span class="token punctuation">{</span>\n  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"start"</span><span class="token builtin class-name">:</span> <span class="token string">"sdoc start docs"</span>,\n    <span class="token string">"build"</span><span class="token builtin class-name">:</span> <span class="token string">"sdoc build docs"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>对于上述的目录结构，默认页面路由地址如下：</p> <table> <thead> <tr> <th>文件的相对路径</th> <th>页面路由地址</th> </tr> </thead> <tbody> <tr> <td>/README.md</td> <td>/</td> </tr> <tr> <td>/guide/README.md</td> <td>/guide/</td> </tr> <tr> <td>/config.md</td> <td>/config/</td> </tr> </tbody> </table> <p>注意：避免同时存在 /config.md 和 /config/README.md，因会同时解析为 /config/ 路径。默认使用 /config.md 文件。</p> </div></div> '},36:function(s,n,a){var t=a(2),e=a(31),c=a(13).default;s.exports=a(13),s.exports.default=t(c,e,[])}}]);