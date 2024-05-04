import{_ as a,c as t,o as r,a4 as e}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"算法框架","description":"","frontmatter":{},"headers":[],"relativePath":"docs/03 博客/算法/刷题框架.md","filePath":"docs/03 博客/算法/刷题框架.md"}'),h={name:"docs/03 博客/算法/刷题框架.md"},d=e('<h1 id="算法框架" tabindex="-1">算法框架 <a class="header-anchor" href="#算法框架" aria-label="Permalink to &quot;算法框架&quot;">​</a></h1><h2 id="一、数据结构" tabindex="-1">一、数据结构 <a class="header-anchor" href="#一、数据结构" aria-label="Permalink to &quot;一、数据结构&quot;">​</a></h2><h3 id="_1-字符串" tabindex="-1">1. 字符串 <a class="header-anchor" href="#_1-字符串" aria-label="Permalink to &quot;1. 字符串&quot;">​</a></h3><h3 id="_2-数组" tabindex="-1">2. 数组 <a class="header-anchor" href="#_2-数组" aria-label="Permalink to &quot;2. 数组&quot;">​</a></h3><p>最底层的数据结构，内存连续，读写 O(1)，一般出现在双指针、滑动窗口等题目中</p><table><thead><tr><th>常见技巧</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>二分查找</td><td>x，f(x)，target 三件套</td><td><a href="./数组/704.二分查找.html">704.二分查找</a><br><a href="./数组/34.在排序数组中查找元素的第一个和最后一个位置.html">34.在排序数组中查找元素的第一个和最后一个位置</a></td></tr><tr><td>双指针</td><td>快慢指针，两端向中心指针，中心向两端指针</td><td><a href="./数组/27.移除元素.html">27.移除元素</a><br><a href="./数组/977.有序数组的平方.html">977.有序数组的平方</a><br><a href="./数组/26.删除有序数组中的重复项.html">26.删除有序数组中的重复项</a></td></tr><tr><td>滑动窗口</td><td>双指针变种，解决子数组问题，有明确的扩大或缩小窗口的条件</td><td><a href="./数组/209.长度最小的子数组.html">209.长度最小的子数组</a></td></tr><tr><td>模拟行为</td><td>循环不变量原则</td><td><a href="./数组/59.螺旋矩阵II.html">59.螺旋矩阵II</a></td></tr><tr><td>前缀和</td><td>时间复杂度 O(1)，空间换时间，频繁查询某个区间的累积和</td><td><a href="./数组/303.区域和检索.html">303.区域和检索</a><br><a href="./数组/560.和为K的子数组.html">560.和为K的子数组</a></td></tr><tr><td>差分数组</td><td>前缀和的“逆运算”，频繁对原始数组的某个区间的元素进行增减</td><td><a href="./数组/1109.航班预订统计.html">1109.航班预订统计</a></td></tr><tr><td>并查集</td><td>由子结点找到父亲结点，处理一些集合的合并与查询</td><td><a href="./数组/130.被围绕的区域.html">130.被围绕的区域</a></td></tr></tbody></table><h3 id="_3-链表" tabindex="-1">3. 链表 <a class="header-anchor" href="#_3-链表" aria-label="Permalink to &quot;3. 链表&quot;">​</a></h3><p>最底层的数据结构，插入删除 O(1)，一般从链表的头部/尾部开始访问</p><table><thead><tr><th>常见技巧</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>链表操作</td><td>增删改查</td><td><a href="./链表/707.设计链表.html">707.设计链表</a><br><a href="./链表/83.删除排序链表中的重复元素.html">83.删除排序链表中的重复元素</a></td></tr><tr><td>递归</td><td>递归三要素</td><td><a href="./链表/203.移除链表元素.html">203.移除链表元素</a><br><a href="./链表/206.反转链表.html">206.反转链表</a><br><a href="./链表/24.两两交换链表中的节点.html">24.两两交换链表中的节点</a><br><a href="./链表/19.删除链表的倒数第N个结点.html">19.删除链表的倒数第N个结点</a></td></tr><tr><td>双指针</td><td>快慢指针，两端向中心指针，中心向两端指针</td><td><a href="./链表/203.移除链表元素.html">203.移除链表元素</a><br><a href="./链表/206.反转链表.html">206.反转链表</a><br><a href="./链表/24.两两交换链表中的节点.html">24.两两交换链表中的节点</a><br><a href="./链表/19.删除链表的倒数第N个结点.html">19.删除链表的倒数第N个结点</a></td></tr><tr><td>哈希表</td><td>空间换时间</td><td><a href="./链表/160.相交链表.html">160.相交链表</a><br><a href="./链表/142.环形链表.html">142.环形链表</a></td></tr></tbody></table><h3 id="_4-哈希表" tabindex="-1">4. 哈希表 <a class="header-anchor" href="#_4-哈希表" aria-label="Permalink to &quot;4. 哈希表&quot;">​</a></h3><p>KV，底层通过数组/链表实现，一般<strong>用来快速判断一个元素是否出现集合里</strong> 或 <strong>统计频次</strong></p><table><thead><tr><th>常见技巧</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>哈希表</td><td>统计频次</td><td><a href="./哈希表/242.有效的字母异位词.html">242.有效的字母异位词</a><br><a href="./哈希表/1002.查找共用字符.html">1002.查找共用字符</a><br><a href="./哈希表/202.快乐数.html">202.快乐数</a></td></tr></tbody></table><h3 id="_5-栈和队列" tabindex="-1">5. 栈和队列 <a class="header-anchor" href="#_5-栈和队列" aria-label="Permalink to &quot;5. 栈和队列&quot;">​</a></h3><p>栈：先入后出，可用来进行深度优先搜索</p><p>队列：先入先出，可用来进行广度优先搜索</p><h3 id="_6-二叉树" tabindex="-1">6. 二叉树 <a class="header-anchor" href="#_6-二叉树" aria-label="Permalink to &quot;6. 二叉树&quot;">​</a></h3><p>二叉树可以链式存储，也可以顺序存储。链式存储方式就用链表实现， 顺序存储的方式就是用数组实现。</p><h3 id="_7-图论" tabindex="-1">7. 图论 <a class="header-anchor" href="#_7-图论" aria-label="Permalink to &quot;7. 图论&quot;">​</a></h3><h2 id="二、算法思维" tabindex="-1">二、算法思维 <a class="header-anchor" href="#二、算法思维" aria-label="Permalink to &quot;二、算法思维&quot;">​</a></h2><h3 id="_1-双指针" tabindex="-1">1. 双指针 <a class="header-anchor" href="#_1-双指针" aria-label="Permalink to &quot;1. 双指针&quot;">​</a></h3><p>分为快慢指针、左右指针</p><h3 id="_2-前缀和" tabindex="-1">2. 前缀和 <a class="header-anchor" href="#_2-前缀和" aria-label="Permalink to &quot;2. 前缀和&quot;">​</a></h3><h3 id="_3-差分数组" tabindex="-1">3. 差分数组 <a class="header-anchor" href="#_3-差分数组" aria-label="Permalink to &quot;3. 差分数组&quot;">​</a></h3><h3 id="_4-二分查找" tabindex="-1">4. 二分查找 <a class="header-anchor" href="#_4-二分查找" aria-label="Permalink to &quot;4. 二分查找&quot;">​</a></h3><h3 id="_5-排序算法" tabindex="-1">5. 排序算法 <a class="header-anchor" href="#_5-排序算法" aria-label="Permalink to &quot;5. 排序算法&quot;">​</a></h3><h3 id="_6-滑动窗口" tabindex="-1">6. 滑动窗口 <a class="header-anchor" href="#_6-滑动窗口" aria-label="Permalink to &quot;6. 滑动窗口&quot;">​</a></h3><h3 id="_7-单调栈" tabindex="-1">7. 单调栈 <a class="header-anchor" href="#_7-单调栈" aria-label="Permalink to &quot;7. 单调栈&quot;">​</a></h3><h3 id="_8-并查集" tabindex="-1">8. 并查集 <a class="header-anchor" href="#_8-并查集" aria-label="Permalink to &quot;8. 并查集&quot;">​</a></h3><h3 id="_9-bfs-和-dfs" tabindex="-1">9. BFS 和 DFS <a class="header-anchor" href="#_9-bfs-和-dfs" aria-label="Permalink to &quot;9. BFS 和 DFS&quot;">​</a></h3><p>BFS：深度优先遍历，可分为前序/中序/后序</p><p>DFS：广度优先遍历，可分为层次/层序</p><h3 id="_10-lru-和-lfu" tabindex="-1">10. LRU 和 LFU <a class="header-anchor" href="#_10-lru-和-lfu" aria-label="Permalink to &quot;10. LRU 和 LFU&quot;">​</a></h3><p>LRU：最近最少使用的缓存淘汰算法，哈希链表、双链表</p><p>LFU：最久未使用的缓存淘汰算法，哈希链表、双链表</p><h3 id="_11-递归" tabindex="-1">11. 递归 <a class="header-anchor" href="#_11-递归" aria-label="Permalink to &quot;11. 递归&quot;">​</a></h3><p>容易联想到栈，深度优先遍历，自顶向下，通过 f(n)递归 f(n-1)</p><h3 id="_12-回溯算法" tabindex="-1">12. 回溯算法 <a class="header-anchor" href="#_12-回溯算法" aria-label="Permalink to &quot;12. 回溯算法&quot;">​</a></h3><p>N 叉树的深度优先遍历</p><h3 id="_13-动态规划" tabindex="-1">13. 动态规划 <a class="header-anchor" href="#_13-动态规划" aria-label="Permalink to &quot;13. 动态规划&quot;">​</a></h3><p>求最值，数学归纳法，自底向上，通过 n-1 顺序求 n</p>',40),l=[d];function o(i,n,s,b,_,c){return r(),t("div",null,l)}const u=a(h,[["render",o]]);export{m as __pageData,u as default};
