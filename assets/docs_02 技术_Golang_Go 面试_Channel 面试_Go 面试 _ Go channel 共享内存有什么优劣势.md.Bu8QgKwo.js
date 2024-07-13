import{_ as n,c as a,o,a4 as e}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"一、优势","description":"","frontmatter":{},"headers":[],"relativePath":"docs/02 技术/Golang/Go 面试/Channel 面试/Go 面试 | Go channel 共享内存有什么优劣势.md","filePath":"docs/02 技术/Golang/Go 面试/Channel 面试/Go 面试 | Go channel 共享内存有什么优劣势.md"}'),t={name:"docs/02 技术/Golang/Go 面试/Channel 面试/Go 面试 | Go channel 共享内存有什么优劣势.md"},p=e('<p><strong>“不要通过共享内存来通信，我们应该使用通信来共享内存”</strong> 这句话想必大家已经非常熟悉了，在官方的博客，初学时的教程，甚至是在 Go 的源码中都能看到</p><p>无论是通过共享内存来通信还是通过通信来共享内存，最终我们应用程序都是读取的内存当中的数据，只是前者是直接读取内存的数据，而后者是通过发送消息的方式来进行同步。而通过发送消息来同步的这种方式常见的就是 Go 采用的 CSP(Communication Sequential Process) 模型以及 Erlang 采用的 Actor 模型，这两种方式都是通过通信来共享内存。</p><p><img src="https://cdn.nlark.com/yuque/0/2023/png/12455685/1681568571462-b6ff14e9-7da3-4aac-99b6-144ce14fc32e.png#averageHue=%23fbf9f6&amp;clientId=u28ad7c49-e2e1-4&amp;from=paste&amp;id=ua03c8529&amp;originHeight=753&amp;originWidth=4443&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u18635c01-b48d-4270-b97e-49202c617f3&amp;title=" alt=""></p><p>大部分的语言采用的都是第一种方式直接去操作内存，然后通过互斥锁，CAS 等操作来保证并发安全。Go 引入了 Channel 和 Goroutine 实现 CSP 模型将生产者和消费者进行了解耦，Channel 其实和消息队列很相似。</p><p>而 Actor 模型和 CSP 模型都是通过发送消息来共享内存，但是它们之间最大的区别就是 Actor 模型当中并没有一个独立的 Channel 组件，而是 Actor 与 Actor 之间直接进行消息的发送与接收，每个 Actor 都有一个本地的“信箱”消息都会先发送到这个“信箱当中”。</p><p>在 Go 语言中，使用 Channel 进行 goroutines 间的通信是一种遵循“不通过共享内存来通信；而通过通信来共享内存”的理念。这种方法与传统的基于共享内存的并发模型相比，具有其独特的优势和劣势</p><h1 id="一、优势" tabindex="-1">一、优势 <a class="header-anchor" href="#一、优势" aria-label="Permalink to &quot;一、优势&quot;">​</a></h1><p>1、<strong>解耦</strong></p><p>使用 channel 可以帮助我们解耦生产者和消费者，可以降低并发当中的耦合</p><p>2、<strong>清晰的并发结构</strong>：</p><p>Channel 使得并发逻辑更加明确和直观，因为数据交换和同步都通过明确的通信进行，有助于编写可读性高和易于理解的并发代码。</p><p>3、<strong>灵活的通信机制</strong>：</p><p>Channel 可用于同步、消息传递、信号通知等多种场景，它们提供了阻塞和非阻塞操作，以及配合<code>select</code>语句进行多路复用。</p><h1 id="二、劣势" tabindex="-1">二、劣势 <a class="header-anchor" href="#二、劣势" aria-label="Permalink to &quot;二、劣势&quot;">​</a></h1><p>1、<strong>性能开销</strong></p><p>相比直接访问共享内存，通过 Channel 通信可能引入额外的性能开销，Channel 的操作涉及锁和 goroutine 之间的调度，这可能比直接访问共享变量更耗时。</p><p>2、<strong>死锁</strong></p><p>在一些场景中，使用 Channel 可能导致设计更为复杂，特别是在需要处理多个通道和复杂的同步逻辑时。不当的使用还可能导致死锁。</p><p>3、<strong>学习曲线</strong></p><p>对于习惯了传统共享内存并发的开发者来说，理解和掌握基于 Channel 的并发模型可能需要一定时间。</p><p>总体来说，Channel 在 Go 中提供了一种强大且高级的方式来处理并发和 goroutine 间的通信，它带来了代码的清晰性和安全性，但也可能引入性能开销和设计复杂性。</p>',21),r=[p];function s(c,l,_,i,h,d){return o(),a("div",null,r)}const u=n(t,[["render",s]]);export{m as __pageData,u as default};
