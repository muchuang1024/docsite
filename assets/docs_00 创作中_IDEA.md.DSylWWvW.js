import{_ as t,c as e,o as a,a4 as p}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/00 创作中/IDEA.md","filePath":"docs/00 创作中/IDEA.md"}'),n={name:"docs/00 创作中/IDEA.md"},r=p('<p>配置命令后，在项目根路径下，可以使用命令：idea . 快速打开项目</p><p>步骤1: 先打开idea</p><p>步骤2：选择 Tools &gt; Create Commandline Launcher</p><p>步骤3：配置路径：/usr/local/bin/idea</p><table><thead><tr><th style="text-align:left;">指令</th><th>标题</th><th>源</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl + Shift + ]</td><td>转到定义 Go To Declaration</td><td>默认</td></tr><tr><td style="text-align:left;">Ctrl + ]</td><td>转到实现 Go To Implementation</td><td></td></tr><tr><td style="text-align:left;">Ctrl + [</td><td>返回上一级 Go Back</td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td></tr></tbody></table><p>注释格式：将注释符号放置在当前行的第一个字符而不是行首</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20250101202123.png" alt=""></p><h2 id="单步调试" tabindex="-1">单步调试 <a class="header-anchor" href="#单步调试" aria-label="Permalink to &quot;单步调试&quot;">​</a></h2><p>找到 Test 文件中要执行的函数，鼠标 Hover 上去选择 Debug</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241209154556.png" alt=""></p><p>常见调试：</p><p>1、Step Into：快捷键 fn + F7。</p><p>一步步按照代码的执行顺序自上而下执行，遇到子函数则跳转到子函数内部执行。最基础的单步调试。</p><p>2、Step Over：快捷键 fn + F8。</p><p>Step Over与Step Into最大不同是，如果当前代码是一个子函数，Step Inot则跳转进入子函数，而Step Over则不进入子函数，相当于把跳转子函数的那段代码当做普通代码单步执行。换言之，加上没有子函数跳转，代码均是在当前函数体内一行一行的调试，那么Step Into和Step Over功效相同，只有在当前一行代码是子函数跳转入口函数时候，Step Into和Step Over表现不同。</p><p>3、Step Out：快捷键 fn + Shift + F8。</p><p>断点调试时候，当运行进入一个函数内以后，如果不想继续在这个子函数内兜兜转、转圈圈（尤其是子函数存在循环耗时代码逻辑时候），可以用Step Out跳出当前子函数，比较类似于在编程时候，一条return语句，返回（跳出）当前函数。</p><p>4、Run to Cursor：快捷键 fn + Alt + F9。</p><p>断点单步调试，顾名思义就是一步一步的调试代码，但有时候基本已经确定问题代码在那里，需要快速调试到问题代码或问题附近的代码，不想在正常代码处一步一步耽搁时间，Run to Cursor 就满足了这个功能。先把光标移动到定位的代码地方，然后执行 Run to Cursor。</p><p>5、<strong>带条件的断点</strong></p><p>打一个断点，鼠标右键断点，编写调试条件</p><p>6、**断点回退</p><p>只能用在方法里面使用</p><p>打一个断点，Step Into进入方法后，点击Step Over,我们可以看到，左下角框有Reset Frame(断点回退)，点一下它，就回到之前执行断点之前的位置，再次重复该操作，查看控制台输出内容。</p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><h3 id="plantuml" tabindex="-1">plantuml <a class="header-anchor" href="#plantuml" aria-label="Permalink to &quot;plantuml&quot;">​</a></h3><p>通过编写文本的方式绘制时序图</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241209152438.png" alt=""></p><p>设置主题：</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241209152318.png" alt=""></p><h2 id="diagram" tabindex="-1">Diagram <a class="header-anchor" href="#diagram" aria-label="Permalink to &quot;Diagram&quot;">​</a></h2><p>根据代码自动生成类图</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241209171344.png" alt=""></p><h3 id="sequencediagram" tabindex="-1">SequenceDiagram <a class="header-anchor" href="#sequencediagram" aria-label="Permalink to &quot;SequenceDiagram&quot;">​</a></h3><p>根据代码自动生成时序图</p><p>点击图上的元素可以跳转到代码里面</p>',36),o=[r];function i(l,s,d,c,h,m){return a(),e("div",null,o)}const _=t(n,[["render",i]]);export{g as __pageData,_ as default};
