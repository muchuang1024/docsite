import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.4aTu-Nia.js";const E=JSON.parse('{"title":"83.删除排序链表中的重复元素","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03 博客/算法/链表/83.删除排序链表中的重复元素.md","filePath":"docs/03 博客/算法/链表/83.删除排序链表中的重复元素.md"}'),t={name:"docs/03 博客/算法/链表/83.删除排序链表中的重复元素.md"},l=n(`<h1 id="_83-删除排序链表中的重复元素" tabindex="-1">83.删除排序链表中的重复元素 <a class="header-anchor" href="#_83-删除排序链表中的重复元素" aria-label="Permalink to &quot;83.删除排序链表中的重复元素&quot;">​</a></h1><h2 id="一、问题描述" tabindex="-1">一、问题描述 <a class="header-anchor" href="#一、问题描述" aria-label="Permalink to &quot;一、问题描述&quot;">​</a></h2><p>给定一个已排序的链表的头 <code>head</code> ，删除所有重复的元素，使每个元素只出现一次。返回已排序的链表。</p><p><strong>示例 1</strong>：</p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/list1.jpg" alt="Image"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：head = [1,1,2]</span></span>
<span class="line"><span>输出：[1,2]</span></span></code></pre></div><p><strong>示例 2</strong>：</p><p><img src="https://assets.leetcode.com/uploads/2021/01/04/list2.jpg" alt="Image"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：head = [1,1,2,3,3]</span></span>
<span class="line"><span>输出：[1,2,3]</span></span></code></pre></div><p><strong>提示</strong>：</p><ul><li>链表中节点数目在范围 <code>[0, 300]</code> 内</li><li><code>-100 &lt;= Node.Val &lt;= 100</code></li><li>链表已按升序排列</li></ul><h2 id="二、方案一-迭代法" tabindex="-1">二、方案一：迭代法 <a class="header-anchor" href="#二、方案一-迭代法" aria-label="Permalink to &quot;二、方案一：迭代法&quot;">​</a></h2><h3 id="_1、思路" tabindex="-1">1、思路 <a class="header-anchor" href="#_1、思路" aria-label="Permalink to &quot;1、思路&quot;">​</a></h3><p>由于链表已排序，因此可以通过迭代的方式删除重复元素。用一个指针遍历链表，当发现当前节点的值与下一个节点的值相同时，就删除下一个节点。</p><h3 id="_2、代码实现" tabindex="-1">2、代码实现 <a class="header-anchor" href="#_2、代码实现" aria-label="Permalink to &quot;2、代码实现&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * type ListNode struct {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *     Val int</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *     Next *ListNode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deleteDuplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 初始化当前指针为链表头部</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 遍历链表，直到当前指针为nil或当前指针的下一个指针为nil</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current.Next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 检查当前节点的值是否与下一个节点的值相同</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current.Val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current.Next.Val {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 如果相同，删除下一个节点（即跳过下一个节点）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            current.Next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current.Next.Next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 如果不同，移动当前指针到下一个节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current.Next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 返回处理后的链表头部</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3、复杂度分析" tabindex="-1">3、复杂度分析 <a class="header-anchor" href="#_3、复杂度分析" aria-label="Permalink to &quot;3、复杂度分析&quot;">​</a></h3><ul><li>时间复杂度：O(n)，其中 n 是链表的长度。</li><li>空间复杂度：O(1)，只需要常数级别的额外空间。</li></ul><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><table><thead><tr><th>方案</th><th>时间复杂度</th><th>空间复杂度</th><th>备注</th></tr></thead><tbody><tr><td>迭代法</td><td>O(n)</td><td>O(1)</td><td>直接在链表上进行操作</td></tr></tbody></table><p>迭代法是解决这个问题的有效方法，因为它直接在链表上进行操作，不需要额外的空间。在实际应用中，这是解决此类问题的首选方法。</p>`,21),e=[l];function h(p,k,r,d,c,o){return i(),a("div",null,e)}const y=s(t,[["render",h]]);export{E as __pageData,y as default};
