import{_ as a,c as t,o as i,a4 as n}from"./chunks/framework.4aTu-Nia.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03 博客/创作中/RPA 实战大模型日报推送微信.md","filePath":"docs/03 博客/创作中/RPA 实战大模型日报推送微信.md"}'),e={name:"docs/03 博客/创作中/RPA 实战大模型日报推送微信.md"},p=n('<p>想象一下，每天早上醒来，你的微信里已经躺着一份最新的大模型日报，而且这份日报是自动推送的，完全不需要你手动去搜索和发送。这听起来是不是很酷？这就是RPA（机器人流程自动化）的魔力所在。</p><p>在这篇文章中，我将使用 RPA 工具影刀来教大家制作 RPA 程序，来制作一个能够自动搜索大模型日报并将其发送到指定微信群的程序。通过这个实战教程，你将学会如何让 RPA 成为你的得力助手，节省时间，提高效率。</p><h2 id="一、业务流程" tabindex="-1">一、业务流程 <a class="header-anchor" href="#一、业务流程" aria-label="Permalink to &quot;一、业务流程&quot;">​</a></h2><p>模拟人工搜索获取大模型日报，并将日报复制粘贴发送给指定微信群，实现这个机器人主要有 2 个卡点：</p><p>1）从哪里获取大模型新闻</p><p>2）怎么将大模型的新闻发送到微信</p><p>对于第 1 个卡点，字节 coze Bot 商店发布了一个”大模型日报“机器人，可以和它自然语言对话，获取大模型日报。可以使用 RPA 工具影刀录制对话过程，复制粘贴获取到机器人回复的大模型日报</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524133836.png" alt=""></p><p>对于第 2 个卡点，使用 RPA 工具影刀录制人工操作流程，模拟发送消息到微信</p><h2 id="二、实操步骤" tabindex="-1">二、实操步骤 <a class="header-anchor" href="#二、实操步骤" aria-label="Permalink to &quot;二、实操步骤&quot;">​</a></h2><p>打开影刀软件，点击新建按钮，新建一个 PC 自动化应用</p><p>如果你不了解影刀怎么安装和使用，可以先看看上一篇文章</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523221229.png" alt=""></p><h3 id="_1、获取打开网页对象" tabindex="-1">1、获取打开网页对象 <a class="header-anchor" href="#_1、获取打开网页对象" aria-label="Permalink to &quot;1、获取打开网页对象&quot;">​</a></h3><p>1）影刀浏览器打开网页</p><p>影刀软件点击影刀浏览器，打开下面的网址</p><p><a href="https://www.coze.cn/store/bot/7345772123970895872" target="_blank" rel="noreferrer">https://www.coze.cn/store/bot/7345772123970895872</a></p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523222252.png" alt=""></p><p>2）影刀主流程添加“网页自动化-打开网页对象”的指令，并设置指令属性</p><p>浏览器类型：第一步用内置的影刀浏览器打开就选择影刀浏览器，用谷歌浏览器打开，就选择谷歌浏览器</p><p>匹配方式：根据网址匹配</p><p>网址：第一步打开的网址</p><p>指令输出：保存网页对象，设置个变量名就行</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523222000.png" alt=""></p><h3 id="_2、填写输入框" tabindex="-1">2、填写输入框 <a class="header-anchor" href="#_2、填写输入框" aria-label="Permalink to &quot;2、填写输入框&quot;">​</a></h3><p>选择“网页自动化-&gt;填写输入框”指令，在上一步打开的网页中，模拟输入“来份最新的大模型日报”</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523224231.png" alt=""></p><h3 id="_3、键盘输入" tabindex="-1">3、键盘输入 <a class="header-anchor" href="#_3、键盘输入" aria-label="Permalink to &quot;3、键盘输入&quot;">​</a></h3><p>选择“鼠标键盘-&gt;键盘输入”指令，模拟按下回车键，触发检索今日大模型日报</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524001325.png" alt=""></p><h3 id="_4、等待" tabindex="-1">4、等待 <a class="header-anchor" href="#_4、等待" aria-label="Permalink to &quot;4、等待&quot;">​</a></h3><p>选择“等待”指令，等待 5s ，确保 coze 机器人给出响应结果</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524001414.png" alt=""></p><h3 id="_5、点击元素" tabindex="-1">5、点击元素 <a class="header-anchor" href="#_5、点击元素" aria-label="Permalink to &quot;5、点击元素&quot;">​</a></h3><p>选择“网页自动化-点击元素”指令，模拟点击复制内容按钮，内容会被复制到剪切板</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524001455.png" alt=""></p><h3 id="_6、获取剪切板文本" tabindex="-1">6、获取剪切板文本 <a class="header-anchor" href="#_6、获取剪切板文本" aria-label="Permalink to &quot;6、获取剪切板文本&quot;">​</a></h3><p>选择“操作系统-获取剪切板”指令，模拟从剪切板获取上一步复制的内容</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524001537.png" alt=""></p><h3 id="_7、打印日志" tabindex="-1">7、打印日志 <a class="header-anchor" href="#_7、打印日志" aria-label="Permalink to &quot;7、打印日志&quot;">​</a></h3><p>选择“打印日志”指令，打印出剪切板的内容</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002231.png" alt=""></p><h3 id="_8、获取窗口对象" tabindex="-1">8、获取窗口对象 <a class="header-anchor" href="#_8、获取窗口对象" aria-label="Permalink to &quot;8、获取窗口对象&quot;">​</a></h3><p>选择“获取窗口对象”指令，根据窗口标题获取微信窗口对象</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002319.png" alt=""></p><h3 id="_9、填写输入框" tabindex="-1">9、填写输入框 <a class="header-anchor" href="#_9、填写输入框" aria-label="Permalink to &quot;9、填写输入框&quot;">​</a></h3><p>选择”桌面软件自动化-填写输入框“指令，定位微信搜索框并输入”木川AI编程“</p><p>注意这里选择”桌面软件“ 而不是”网页“下的”填写输入框“，因为微信是桌面软件，不是网页</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002414.png" alt=""></p><h3 id="_10、键盘输入" tabindex="-1">10、键盘输入 <a class="header-anchor" href="#_10、键盘输入" aria-label="Permalink to &quot;10、键盘输入&quot;">​</a></h3><p>选择”鼠标键盘-键盘输入“指令，拟按下回车键，相当于搜索微信群</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002606.png" alt=""></p><h3 id="_11、填写输入框" tabindex="-1">11、填写输入框 <a class="header-anchor" href="#_11、填写输入框" aria-label="Permalink to &quot;11、填写输入框&quot;">​</a></h3><p>选择”桌面软件自动化-填写输入框“指令，定位上面搜索到的微信群对应的微信对话框并输入上面从剪切板获得的内容（经过 Python 处理删除掉后三行）</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002653.png" alt=""></p><h3 id="_12、键盘输入" tabindex="-1">12、键盘输入 <a class="header-anchor" href="#_12、键盘输入" aria-label="Permalink to &quot;12、键盘输入&quot;">​</a></h3><p>选择”鼠标键盘-键盘输入“指令，拟按下回车键，就相当于把消息发送到微信群了</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240524002736.png" alt=""></p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>这篇文章的核心内容是知道如何使用影刀（一种RPA工具）制作一个自动化程序，实现自动搜索并获取大模型日报，然后将日报内容发送到指定的微信群。文章分为三个部分：</p><p>1、<strong>业务流程</strong>：首先明确实现大模型日报推送微信的两个主要步骤：一是获取大模型新闻，二是将新闻发送到微信。对于第一个步骤，使用 RPA 工具影刀模拟与字节 coze Bot 商店发布的“大模型日报”机器人进行自然语言对话来获取日报。对于第二个步骤，则使用 RPA 工具影刀来模拟人工操作，将消息发送到微信。</p><p>2、<strong>实操步骤</strong>：这部分详细介绍了使用影刀软件进行自动化操作的步骤，包括打开网页对象、填写输入框、键盘输入、等待、点击元素、获取剪切板文本、获取窗口对象、填写输入框、键盘输入等。</p><p>本文提到的 RPA 主流程汇总如下：</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523221629.png" alt=""></p><p>通过上述 RPA 程序的主流程，你也可以制作自己的第一个 RPA 器人，帮助读者通过RPA工具实现自动化的信息获取和分享，提高了工作效率。更多 RPA 相关实战教程，可以看看下面这个专栏</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240523000822.png" alt=""></p>',66),s=[p];function c(o,r,h,l,g,m){return i(),t("div",null,s)}const d=a(e,[["render",c]]);export{_ as __pageData,d as default};
