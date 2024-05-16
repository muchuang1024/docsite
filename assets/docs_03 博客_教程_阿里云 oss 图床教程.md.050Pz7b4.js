import{_ as a,c as e,o as s,a4 as t}from"./chunks/framework.4aTu-Nia.js";const d=JSON.parse('{"title":"阿里云 oss 图床教程","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03 博客/教程/阿里云 oss 图床教程.md","filePath":"docs/03 博客/教程/阿里云 oss 图床教程.md"}'),c={name:"docs/03 博客/教程/阿里云 oss 图床教程.md"},o=t('<p>#公众号</p><h1 id="阿里云-oss-图床教程" tabindex="-1">阿里云 oss 图床教程 <a class="header-anchor" href="#阿里云-oss-图床教程" aria-label="Permalink to &quot;阿里云 oss 图床教程&quot;">​</a></h1><p>做自媒体的，图片上传真是件烦心事，尤其是要在好几个平台上传同一批图片时。这时候，图床就能派上大用场了。</p><p>图床是个啥？简单说，就是一个在线的图片存储服务。用上它，你只需要上传一次图片，就能生成一个链接，然后把这个链接用到你的文章里，这样就不用在每个平台都单独上传图片了。</p><p>说了图床，那不得不提阿里云 OSS，阿里云对象存储（Object Storage Service，简称OSS）是阿里云提供的一种海量、安全、低成本、高可靠的云存储服务。对于自媒体人来说，阿里云 OSS 就是一个强大的工具，可以帮助我们轻松地存储和管理大量的图片、视频和其他文件。</p><p>在这篇文章中，我将分享如何注册及使用阿里云 OSS，帮助自媒体人解决多平台图片上传的烦恼，让内容创作变得更加高效。</p><h2 id="一、注册账号" tabindex="-1">一、注册账号 <a class="header-anchor" href="#一、注册账号" aria-label="Permalink to &quot;一、注册账号&quot;">​</a></h2><p>打开 <a href="https://free.aliyun.com/" target="_blank" rel="noreferrer">https://free.aliyun.com/</a> 找到对象存储 OSS，可免费试用 20GB 3个月，试用期结束后，可以按照流量计费，一年下来基本不会超过 10 块钱</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324210917.png" alt=""></p><p>如果没有开通 OSS，直接点击试用按钮</p><h2 id="二、创建存储空间" tabindex="-1">二、创建存储空间 <a class="header-anchor" href="#二、创建存储空间" aria-label="Permalink to &quot;二、创建存储空间&quot;">​</a></h2><p>登录<a href="https://oss.console.aliyun.com/" target="_blank" rel="noreferrer">对象存储OSS控制台</a>，创建存储空间 Bucket</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324210936.png" alt=""></p><p>在<strong>创建Bucket</strong>面板，设置<strong>Bucket名称</strong>，设置<strong>地域</strong>，其他保留默认设置，然后单击<strong>确定</strong>。Bucket名称必须全局唯一，一旦创建不可更改</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324210950.png" alt=""></p><p>创建成功后，就可以上传文件了</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324211010.png" alt=""></p><h2 id="三、创建子用户" tabindex="-1">三、创建子用户 <a class="header-anchor" href="#三、创建子用户" aria-label="Permalink to &quot;三、创建子用户&quot;">​</a></h2><p>打开 RAM 控制台 <a href="https://ram.console.aliyun.com/users/create" target="_blank" rel="noreferrer">https://ram.console.aliyun.com/users/create</a></p><p>创建一个子账号，专门用户为编辑器提供上传图片的访问权限。注意：要勾选下面的 OpenAPI 调用访问</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324211025.png" alt=""></p><p>创建成功后，会生成 AccessKey ID 和 AccessKey Secret，先复制出来，后面要用</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324211041.png" alt=""></p><h2 id="四、新增授权策略" tabindex="-1">四、新增授权策略 <a class="header-anchor" href="#四、新增授权策略" aria-label="Permalink to &quot;四、新增授权策略&quot;">​</a></h2><p>创建一条 Bucket 授权策略，为阿里云账号授予该 Bucket 的读写权限，方便使用 PicGo 等工具上传</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324211057.png" alt=""></p><h2 id="五、图床设置" tabindex="-1">五、图床设置 <a class="header-anchor" href="#五、图床设置" aria-label="Permalink to &quot;五、图床设置&quot;">​</a></h2><p>安装 PicGo 软件，添加阿里云 OSS 图床，将上面的 key 和 secret ，以及 Bucket 和 存储区域，点击确定并且设置为默认图床</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240324211119.png" alt=""></p><h2 id="六、编辑器设置" tabindex="-1">六、编辑器设置 <a class="header-anchor" href="#六、编辑器设置" aria-label="Permalink to &quot;六、编辑器设置&quot;">​</a></h2><p>我一般使用 Obisian 作为写文章的编辑器，只要安装插件 <code> Image Auto Upload</code> ，并配置剪切板自动上传和默认上传器为 PicGo，就可以实现粘贴图片时自动上传至阿里云 oss，并生成链接，整个流程非常丝滑，就想写文字一样简单</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240516220511.png" alt="image.png"></p><p>如果你使用的 Typora，也可以通过设置 Typora-&gt;图像，实现类似效果</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240516220749.png" alt=""></p><h2 id="七、总结" tabindex="-1">七、总结 <a class="header-anchor" href="#七、总结" aria-label="Permalink to &quot;七、总结&quot;">​</a></h2><p>本篇文章主要介绍如何使用阿里云对象存储服务（OSS）作为自媒体人的图床，以解决多平台图片上传的烦恼，并提高内容创作效率。文章分为六个部分：</p><p>1、注册账号：介绍了如何在阿里云官网注册并免费试用OSS服务，强调了其低成本和高可靠性。</p><p>2、创建存储空间：指导用户在OSS控制台创建存储空间，并设置 Bucket 名称和地域。</p><p>3、创建子用户：说明如何创建一个专门用于编辑器上传图片的子账号，并获取AccessKey ID和AccessKey Secret。</p><p>4、新增授权策略：教授如何为子用户设置Bucket的读写权限，以便使用 PicGo 等工具上传图片。</p><p>5、图床设置：演示如何安装 PicGo 软件并配置阿里云 OSS 图床，使其成为默认上传工具。</p><p>6、编辑器设置：展示在 Obisian 和 Typor a编辑器中如何设置自动上传图片到阿里云 OSS，并生成链接，以简化写作流程。</p><p>整体上，文章提供了一个全面且实用的指南，帮助自媒体人通过阿里云 OSS 高效管理和上传图片，从而提升内容创作的效率。</p>',43),n=[o];function r(p,i,l,h,u,g){return s(),e("div",null,n)}const _=a(c,[["render",r]]);export{d as __pageData,_ as default};
