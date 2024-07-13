import{_ as o,c as a,o as t,a4 as n}from"./chunks/framework.4aTu-Nia.js";const d=JSON.parse('{"title":"微信读书笔记同步到 Notion","description":"","frontmatter":{},"headers":[],"relativePath":"docs/01 AI/AI 教程/微信读书笔记同步到 Notion.md","filePath":"docs/01 AI/AI 教程/微信读书笔记同步到 Notion.md"}'),e={name:"docs/01 AI/AI 教程/微信读书笔记同步到 Notion.md"},i=n('<p>#知识管理 #效率工具 #Notion</p><h1 id="微信读书笔记同步到-notion" tabindex="-1">微信读书笔记同步到 Notion <a class="header-anchor" href="#微信读书笔记同步到-notion" aria-label="Permalink to &quot;微信读书笔记同步到 Notion&quot;">​</a></h1><p>平时都用微信读书阅读，它很方便，可以查看现成的电子书，也可以自己上传导入电子书。</p><p>平时自己用 Notion 来记录管理知识输入，作为第二大脑。</p><p>于是想着将微信读书笔记自动化同步到第二大脑 Notion，方便进行汇总和回顾</p><p>原文操作指南：<a href="https://malinkang.com/posts/weread2notion-pro/" target="_blank" rel="noreferrer">https://malinkang.com/posts/weread2notion-pro/</a></p><p>最终的效果如下：</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174131.png" alt=""></p><h2 id="一、fork-代码" tabindex="-1">一、Fork 代码 <a class="header-anchor" href="#一、fork-代码" aria-label="Permalink to &quot;一、Fork 代码&quot;">​</a></h2><p>1、浏览器打开 <a href="https://github.com/malinkang/weread2notion-pro" target="_blank" rel="noreferrer">https://github.com/malinkang/weread2notion-pro</a></p><p>2、点击 fork 到到自己的仓库中</p><h2 id="二、获取微信读书-cookie" tabindex="-1">二、获取微信读书 Cookie <a class="header-anchor" href="#二、获取微信读书-cookie" aria-label="Permalink to &quot;二、获取微信读书 Cookie&quot;">​</a></h2><p>1、浏览器打开<a href="https://weread.qq.com/" target="_blank" rel="noreferrer">网页版微信读书</a>，使用手机扫码登录</p><p>2、按 F12 进入开发者模式，依次点网络-&gt;文档，然后选中 weread.qq.com，下拉找到Cookie，复制Cookie值</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174540.png" alt=""></p><h2 id="三、获取-notion-token" tabindex="-1">三、获取 Notion Token <a class="header-anchor" href="#三、获取-notion-token" aria-label="Permalink to &quot;三、获取 Notion Token&quot;">​</a></h2><p>浏览器打开 Notion 集成页面 <a href="https://www.notion.so/my-integrations" target="_blank" rel="noreferrer">https://www.notion.so/my-integrations</a></p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174613.png" alt=""><img src="" alt=""></p><p>点击 New Integration 按钮，填写名称创建集成</p><p><img src="https://raw.githubusercontent.com/muchuang1024/imgcdn/master/image-20231216150637672.png" alt=""></p><p>点击上面的 “Submit” 按钮，就会跳转到集成详情，点击 Show 按钮查看 Key 详情</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174703.png" alt=""></p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174721.png" alt=""></p><p>点击 Copy 按钮复制 Key，记录下来这个 Key，这个 Key 就是 Notion 的 Token</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174743.png" alt=""></p><h2 id="四、复制-notion-模板" tabindex="-1">四、复制 Notion 模板 <a class="header-anchor" href="#四、复制-notion-模板" aria-label="Permalink to &quot;四、复制 Notion 模板&quot;">​</a></h2><p>1、浏览器打开模板 <a href="https://malinkang.notion.site/13d2e1548f024687a42ec68a79a01c62?pvs=4" target="_blank" rel="noreferrer">https://malinkang.notion.site/13d2e1548f024687a42ec68a79a01c62?pvs=4</a>，点击右上角的 Duplicate 复制</p><p>2、打开你刚复制的模板，点击右上角的三个点，找到<code>Connections</code>，然后添加你创建的Integration。</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174806.png" alt=""></p><h2 id="五、获取-notion-页面链接和数据库id" tabindex="-1">五、获取 Notion 页面链接和数据库ID <a class="header-anchor" href="#五、获取-notion-页面链接和数据库id" aria-label="Permalink to &quot;五、获取 Notion 页面链接和数据库ID&quot;">​</a></h2><p>点击右上角的Share，然后点击Copy link获取页面的链接</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174828.png" alt=""></p><p>假设链接为 <a href="https://www.notion.so/9faf861dad464597af8177cc451d4e32?pvs=4" target="_blank" rel="noreferrer">https://www.notion.so/9faf861dad464597af8177cc451d4e32?pvs=4</a> ，则中间的 9faf861dad464597af8177cc451d4e32 就是 数据库ID</p><h2 id="六、添加环境变量" tabindex="-1">六、添加环境变量 <a class="header-anchor" href="#六、添加环境变量" aria-label="Permalink to &quot;六、添加环境变量&quot;">​</a></h2><p>1、打开你 fork 的工程，点击 Settings-&gt;Secrets and variables-&gt;New repository secret</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174854.png" alt=""></p><p>2、添加 WEREAD_COOKIE 变量，填入步骤二获取的微信读书Cookie，然后点击 Add secret</p><p>3、添加 NOTION_TOKEN 变量，填入步骤三获取的NOTION_TOKEN，然后点击 Add secret</p><p>4、添加 NOTION_PAGE 变量，填入步骤五获取的数据库链接，然后点击 Add secret</p><p>最终效果如下： <img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174914.png" alt=""></p><h2 id="七、运行" tabindex="-1">七、运行 <a class="header-anchor" href="#七、运行" aria-label="Permalink to &quot;七、运行&quot;">​</a></h2><p>上面配置完成之后，打开你 Fork 的项目，依次点击 Actions-&gt;weread sync-&gt; Run workflow，就可以运行了</p><p>1、允许打开 workflow</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324174937.png" alt=""></p><p>2、开启 workflow</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324175000.png" alt=""></p><p>3、点击 Run workflow</p><p>运行 workflow 成功后，Github 服务器会将微信读书笔记同步到 Notion，之后自动定时进行同步</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324175025.png" alt=""></p><p>今天按照上面的步骤配置了下，只要配置的值正确，一次性就成功了，真的太好用了，强烈建议！</p>',50),r=[i];function p(s,c,g,h,l,m){return t(),a("div",null,r)}const f=o(e,[["render",p]]);export{d as __pageData,f as default};
