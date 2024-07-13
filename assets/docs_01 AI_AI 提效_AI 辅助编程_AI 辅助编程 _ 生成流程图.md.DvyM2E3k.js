import{_ as a,c as t,o as n,a4 as i}from"./chunks/framework.4aTu-Nia.js";const _=JSON.parse('{"title":"一、AI 生成代码注释","description":"","frontmatter":{},"headers":[],"relativePath":"docs/01 AI/AI 提效/AI 辅助编程/AI 辅助编程 | 生成流程图.md","filePath":"docs/01 AI/AI 提效/AI 辅助编程/AI 辅助编程 | 生成流程图.md"}'),r={name:"docs/01 AI/AI 提效/AI 辅助编程/AI 辅助编程 | 生成流程图.md"},e=i('<p>上周同事被裁了，接手了别人的代码，我懵逼了</p><p>一般同事离职时，就会其它人补上，第一件要做的事情就是接手他写的代码</p><p>但阅读别人的代码，难不了心态爆炸，一看代码太长又繁琐，看不下去了</p><p>传统的方法不仅耗时长，而且效率低下，这时我想到了使用 AI 来辅助这一过程，简直太高效了</p><h1 id="一、ai-生成代码注释" tabindex="-1">一、AI 生成代码注释 <a class="header-anchor" href="#一、ai-生成代码注释" aria-label="Permalink to &quot;一、AI 生成代码注释&quot;">​</a></h1><p>同事的这段代码有 200 行，核心就是订单打包，比如 10 个订单聚类后生成 8 个包裹</p><p>聚类的细节太多，想着用 AI 提取并绘制流程图，更加直观</p><p>首先使用 AI 编程工具 Baidu Comate，解读这段代码</p><p>在函数代码上方，找到代码解释菜单</p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220125209064.png" alt=""></p><p>点击代码注释，将会打开百度 AI 助手聊天框，显示代码的解读</p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220125241086.png" alt=""></p><h1 id="二、ai-生成流程图代码" tabindex="-1">二、AI 生成流程图代码 <a class="header-anchor" href="#二、ai-生成流程图代码" aria-label="Permalink to &quot;二、AI 生成流程图代码&quot;">​</a></h1><p>代码可视化一般需要创建 UML 图，这样的工具有很多，从使用文本描述来生成UML图的角度，我选择的是 PlantUML</p><p>PlantUML 是一个强大的工具，用于快速创建多种类型的图表。这些图表广泛用于软件开发和文档编写中，以下是PlantUML支持的一些主要图表类型：</p><ol><li><strong>序列图（Sequence Diagram）</strong>：用于展示对象之间交互的时间序列，常用于展示系统内部组件或对象之间的消息传递。</li><li><strong>用例图（Use Case Diagram）</strong>：描述系统的功能和外部用户（参与者）之间的交互。</li><li><strong>类图（Class Diagram）</strong>：展示系统中类的结构和类之间的关系，如继承、接口实现、依赖关系等。</li><li><strong>活动图（Activity Diagram）</strong>：类似于流程图，用于展示从一个活动到另一个活动的控制流。</li><li><strong>组件图（Component Diagram）</strong>：展示系统的组件如何组合在一起工作。</li><li><strong>状态图（State Diagram）</strong>：展示一个对象在其生命周期内经历的状态以及状态间的转移。</li><li><strong>对象图（Object Diagram）</strong>：类图的一个实例，显示了系统中对象之间的关系。</li><li><strong>部署图（Deployment Diagram）</strong>：展示系统的物理部署，包括硬件和软件的配置。</li><li><strong>时序图（Timing Diagram）</strong>：展示对象状态随时间的变化。</li><li><strong>包图（Package Diagram）</strong>：展示代码的包结构，有助于理解代码的模块化组织。</li><li><strong>组织结构图（Wireframe Graphic Interface）</strong>：用于描述图形用户界面的布局和元素。</li><li><strong>甘特图（Gantt Diagram）</strong>：用于项目管理中，展示项目的时间线和进度。</li></ol><p>PlantUML 中的活动图就是流程图，左边是代码语法，右边是可视化图形</p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220125849418.png" alt=""></p><p>将步骤一种拿到的代码注释，询问 ChatGPT：<strong>请基于下面这段代码注释，生成PlantUML活动图代码</strong></p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220125558839.png" alt=""></p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220130433705.png" alt=""></p><h1 id="三、流程图可视化" tabindex="-1">三、流程图可视化 <a class="header-anchor" href="#三、流程图可视化" aria-label="Permalink to &quot;三、流程图可视化&quot;">​</a></h1><p>将步骤二中生成的流程图代码，复制到 plantuml 可视化网站</p><p>网址： <a href="http://www.plantuml.com/plantuml" target="_blank" rel="noreferrer">http://www.plantuml.com/plantuml</a></p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220130904592.png" alt=""></p><p>点击 Submit 按钮，就可以获取到图片了</p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/flowchart.png" alt=""></p><p>看流程图就大概知道这段代码的含义了，AI 解读代码绘制流程图，真的很方便</p><h1 id="四、总结" tabindex="-1">四、总结 <a class="header-anchor" href="#四、总结" aria-label="Permalink to &quot;四、总结&quot;">​</a></h1><p>以上通过代码 -&gt; 注释 -&gt; 绘制流程图的方法是经过了三个步骤，实际上也可以直接让 AI 解读代码，获取到流程图，只需要两步就可以完成，但是效果可能不如先生成注释，再绘制流程图</p><p>毕竟代码生成注释，是通过专有代码大模型生成，相比 通用大模型 GPT 理解代码可能更加顺畅一些</p><p>最后分享一个小技巧：代码的可视化呈现方式有很多种，为什么必须是流程图，而不是其它类型的图，可以问 AI 这段代码生成什么图比较好，选择最优呈现方式可视化</p><p>比如基于上面的代码，我也可以生成类图</p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/classchart.png" alt=""></p><p><img src="https://fastly.jsdelivr.net/gh/muchuang1024/imgcdn/image-20231220135053664.png" alt=""></p>',35),s=[e];function l(p,g,o,m,c,h){return n(),t("div",null,s)}const u=a(r,[["render",l]]);export{_ as __pageData,u as default};
