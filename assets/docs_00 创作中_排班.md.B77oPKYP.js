import{_ as o,c as a,o as r,a4 as e}from"./chunks/framework.4aTu-Nia.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/00 创作中/排班.md","filePath":"docs/00 创作中/排班.md"}'),t={name:"docs/00 创作中/排班.md"},l=e('<h2 id="_1、输入参数" tabindex="-1">1、输入参数 <a class="header-anchor" href="#_1、输入参数" aria-label="Permalink to &quot;1、输入参数&quot;">​</a></h2><p>调度参数 排班信息列表</p><h2 id="_2、数据预处理" tabindex="-1">2、数据预处理 <a class="header-anchor" href="#_2、数据预处理" aria-label="Permalink to &quot;2、数据预处理&quot;">​</a></h2><p>计算各时间段的工作人员人数需求 (<code>partStaffNumInput</code>) 基于排班信息的起止时间及人数，逐小时累加任务需求，分解为小时级别的数组形式。</p><h2 id="_3、构建模型" tabindex="-1">3、构建模型 <a class="header-anchor" href="#_3、构建模型" aria-label="Permalink to &quot;3、构建模型&quot;">​</a></h2><p><strong>模型数据准备</strong>: - 获取初始订单分布 (<code>partOrder</code>) 和人员需求枚举列表 (<code>dingOrderHhEnumerateList</code>, <code>staffLackEnumerateList</code>)。 - 根据排班请求查询具体班次信息并注入到模型中。</p><p><strong>数学优化模型</strong>:</p><ul><li>使用 Google OR-Tools 提供的 <code>MPSolver</code>，设置求解器为 <code>SCIP</code> 并定义相关参数（如时间限制及精度）</li></ul><h2 id="_4、变量定义" tabindex="-1">4、变量定义 <a class="header-anchor" href="#_4、变量定义" aria-label="Permalink to &quot;4、变量定义&quot;">​</a></h2><ul><li><strong>出勤人数</strong> (<code>mpPartVar</code>): 每小时出勤人数。</li><li>总/全天班/半天班出勤人数（mpDVar、fullVar、halfVar）：</li><li><strong>班次人数</strong> (<code>partScheduleVar</code>): 每个班次的人员安排。</li><li><strong>产能缺口</strong> (<code>orderLackVar</code>): 每小时的产能缺口。</li><li><strong>人员枚举值</strong> (<code>mpPartZVar</code>): 描述人员安排的布尔变量。</li><li><strong>订单分单量</strong> (<code>orderPartVar</code>) 和 <strong>分单量差异</strong> (<code>orderPartHhGapVar</code>): 每小时的实际分单量和与目标分单量的差距。</li><li><strong>履约分</strong> (<code>performScoreVar</code>): 综合履约评分。</li></ul><p>各个班次排几个人 =&gt; 各个小时有多少人</p><p>s: 班次； h: 小时； Cover(s, h): 某个班次是否覆盖某个小时 Sch(s)：决策变量 - 各个班次排几个人</p><p>=&gt; MP(h) 各个小时有多少人 = ∑ Sch(s) x Cover(s, h)</p><h2 id="_5、-目标函数" tabindex="-1">5、 目标函数 <a class="header-anchor" href="#_5、-目标函数" aria-label="Permalink to &quot;5、 目标函数&quot;">​</a></h2><h3 id="_1、履约分" tabindex="-1">1、履约分 <a class="header-anchor" href="#_1、履约分" aria-label="Permalink to &quot;1、履约分&quot;">​</a></h3><p>各个小时产能越满足预测单量，分数越好，时段产能缺口最少，履约分越高</p><p>各个小时的小时产能 = ETA小时人效 x 小时排班人数</p><p>问题转化：</p><p>小时预测单量 / 小时排班人数 = 如果这个小时所有单量都需满足，排班骑手需要达到多少跑单能力 做分段函数：</p><p>x(h)：需要达到的跑单能力 y(h)：履约分</p><p>如果需求跑单能力 &lt; ETA人效，履约分得满分 = 1 如果需求跑单能力 &gt; 2H人效，履约分得极大值</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241122202121.png" alt=""></p><p>实现方式：通过约束的方式，实现确保时段的产能缺口越少，履约分越高</p><ol><li><strong>创建一个约束</strong>，要求某个计算值（由 履约分<code>performScoreVar</code> 和 时段产能缺口<code>orderLackVar</code> 决定）等于 <code>0</code>。</li><li><strong>将履约分的系数设置为负值</strong>，这表明履约分越高，越容易满足约束。</li><li><strong>遍历每个部分（如订单）</strong>，如果该部分的原始订单数量不为零，则增加订单缺失的影响，促进模型在优化时考虑如何降低订单缺失。</li></ol><h3 id="_2、人效分" tabindex="-1">2、人效分 <a class="header-anchor" href="#_2、人效分" aria-label="Permalink to &quot;2、人效分&quot;">​</a></h3><p>越接近全职目标人日数，分数越好</p><p>实际出勤人日：</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241122201042.png" alt=""></p><p>已知预测单量和目标人效，计算目标出勤人日：Order_d / E_d</p><p>人效分：| 实际出勤人日 - 目标出勤人日|</p><p><img src="https://muchuang-img.oss-cn-beijing.aliyuncs.com/20241122201527.png" alt=""></p><p>第二优先级：出勤分（保障做六休一） SchGap = |Schd - 全职出勤占比 x 可出勤人数|</p><p>半天班使用分（使用半天班的站点尽量推荐半天班有人出勤） half_in_use (d) &gt;= 0.01 x ∑half Sch(d, s)</p><p>第三优先级：均衡分 如果人多了，各个小时的人尽量均匀的多，不要集中在某些小时</p><h2 id="_6、约束定义" tabindex="-1">6、约束定义 <a class="header-anchor" href="#_6、约束定义" aria-label="Permalink to &quot;6、约束定义&quot;">​</a></h2><p>通过多个约束条件建立了模型的逻辑规则：</p><ul><li><strong>人员安排与班次关联</strong>: <ul><li>限制每小时出勤人数与班次安排的关系。</li><li>确保人员安排符合时段需求和班次能力。</li></ul></li><li><strong>人员枚举互斥</strong>: <ul><li>约束人员的枚举值使得变量之间互斥。</li></ul></li><li><strong>产能缺口约束</strong>: <ul><li>确保产能缺口变量反映实际未满足的订单需求。</li></ul></li><li><strong>履约评分计算</strong>: <ul><li>定义履约分为各时段产能缺口的综合。</li></ul></li><li><strong>分单量差异约束</strong>: <ul><li>限制分单量差异以保证分配的均匀性。</li></ul></li></ul>',37),i=[l];function s(c,n,d,p,h,g){return r(),a("div",null,i)}const m=o(t,[["render",s]]);export{_ as __pageData,m as default};
