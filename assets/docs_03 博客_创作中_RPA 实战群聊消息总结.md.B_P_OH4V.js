import{_ as a,c as t,o as p,a4 as e}from"./chunks/framework.4aTu-Nia.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03 博客/创作中/RPA 实战群聊消息总结.md","filePath":"docs/03 博客/创作中/RPA 实战群聊消息总结.md"}'),i={name:"docs/03 博客/创作中/RPA 实战群聊消息总结.md"},s=e('<p>周末我坐在书房的电脑前，眼前是 30 个微信群的聊天窗口，每天 3000+未读信息让我感到压力山大。过去，我常常需要花费一两个小时来刷这些群信息，但有时大部分内容都毫无价值，让我深感时间被浪费了。</p><p>然而，今天我决定尝试一种新的方法。我运用 RPA（Robotic Process Automation）+ AI 技术，读取微信聊天记录，然后让大模型自动总结群聊记录并发送给我。不到</p><p>20 分钟，我就收到了一份详细的群聊摘要，包含了所有核心信息。</p><p>我惊喜地发现，这份摘要不仅节省了我的时间，还让我能够直接掌握群聊的重点。我不再需要浪费时间在无意义的闲聊上，而是可以更加专注于工作和生活。</p><p>这个经历让我深刻体会到通过合理运用 RPA 和 AI 技术，我们能够更好地管理信息，提高工作效率，从而拥有更多时间去做自己喜欢的事情。我感到非常开心，决定将这种方法推荐给身边的朋友和同事，让更多的人受益。</p><p>在这篇文章中，我将使用 RPA 工具影刀来制作总结微信聊天记录的程序</p><h2 id="一、业务流程" tabindex="-1">一、业务流程 <a class="header-anchor" href="#一、业务流程" aria-label="Permalink to &quot;一、业务流程&quot;">​</a></h2><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240526224155.png" alt=""></p><p>主要分成了 3 个部分：</p><p>1、获取微信聊天记录</p><p>2、调用 Kimi 总结微信聊天记录</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240526222816.png" alt=""></p><p>3、发送群聊总结摘要到个人微信</p><h2 id="二、实操步骤" tabindex="-1">二、实操步骤 <a class="header-anchor" href="#二、实操步骤" aria-label="Permalink to &quot;二、实操步骤&quot;">​</a></h2><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>获取相似元素列表：校验验证有多个元素</p><p>移动鼠标到群聊底部：</p><p>移动鼠标到到鼠标底部位置（鼠标放到群聊底部，查看对应的坐标）</p><p>勾选使用 index ，而不是 title，避免换了群名，无法找到元素</p><p>通过第1个位置匹配，而不是名称</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240525212501.png" alt=""></p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20240525225022.png" alt=""></p><p>聊天记录很长，需要支持 长 token 的大模型，比如 Kimi</p><p>子流程返回值，使用 result.xxx</p>',24),o=[s];function c(n,r,_,l,m,h){return p(),t("div",null,o)}const g=a(i,[["render",c]]);export{u as __pageData,g as default};
