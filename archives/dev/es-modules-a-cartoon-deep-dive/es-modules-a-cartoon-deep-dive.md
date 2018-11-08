# 图解 ES modules

*本文翻译自 [Lin Clark](http://code-cartoons.com/) 的文章[《ES modules: A cartoon deep-dive》](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)*

ES modules （以下简称 ESM） 为 JavaScript 带来了标准化的模块系统，我们也曾为此付出了不小的努力——将近 10 年的标准化工作。  
随着 Firefox 60 将在 5 月发布，所有的主流浏览器都将支持 ESM；Node.js 正在着手支持 ESM；[ESM 的 WebAssembly 整合](https://www.youtube.com/watch?v=qR_b5gajwug) 也正在进行中。

许多 JS 开发者都知道 ESM 是一个老生常谈的话题了，但是实际上深入了解过它的人只是少数。  
现在就让我们一起来看看 ESM 到底解决了什么问题，以及它和其他模块系统有何异同。

## 模块化要解决什么问题？

JS 编程即是在管理变量。我们对变量进行赋值，或者对两个变量进行组合，将其放进另一个变量。

![01_variables](https://hacks.mozilla.org/files/2018/03/01_variables.png)

我们实在有太多的代码都在对变量进行处理，组织变量的方式将会对编写代码、维护代码产生巨大的影响。  
一次仅考虑少量变量会让事情变得更简单。JS 的作用域会帮助你这样做，作用域使函数无法访问定义在其他函数中的变量。

![02_module_scope_01](https://hacks.mozilla.org/files/2018/03/02_module_scope_01.png)

作用域很棒，它让我们专注于当前的函数，不必担心其他函数会对你的变量动手动脚。不过它的另一面就是，在不同函数中共用变量变得更难了。  
如果想在两个作用域中共用一个变量你会怎么做？通常的手段是将变量放在更上级的作用域中……比如全局作用域。  
可能这会让你想到使用 jQuery 的那些日子。在加载 jQuery 插件之前，首先要保证 jQuery 在你的全局作用域中。

![02_module_scope_02](https://hacks.mozilla.org/files/2018/03/02_module_scope_02.png)

这样做无可厚非，但是这种方式会导致一些恼人的问题。  
你不仅需要保证 `<script>` 标签必须按照正确的顺序摆放，还要确保它们不会打乱。如果有人不小心这么做了，你的应用可能会在运行时给你抛个错误出来。当函数尝试寻找在全局作用域的 jQuery 却没找到时，它会报错停止运行。

![02_module_scope_03](https://hacks.mozilla.org/files/2018/03/02_module_scope_03.png)

这会让代码难以维护，删除老的代码或者标签会变得惊险又刺激，你不知道什么时候会踩到地雷。代码之间的依赖关系是隐式的，任何函数都可能依赖全局作用域中的变量，你也不知道哪个函数会依赖哪块 `<script>` 了。

另一个问题是因为变量在全局作用域中，任何代码都有可能修改变量。恶意代码可以趁机达到某些目的，非恶意代码也可能不小心对它们进行修改。

## 模块化如何解决这些问题？

模块化提供了一种更好的方式来组织这些变量和函数，你可以用它将一段有意义的变量和函数组合起来。  
函数和变量被放进模块作用域中，模块作用域负责将变量提供给模块中的函数使用。  
和函数作用域不同的是，模块作用域同样提供了将变量提供给其他模块使用的方法，模块中的变量、类或函数能被显式地声明它们可以被其他模块用到。  
这样的声明叫做导出（export）。其他模块可以显式地声明依赖任何一个被导出的变量、类或函数。

![02_module_scope_04](https://hacks.mozilla.org/files/2018/03/02_module_scope_04.png)

由于依赖关系是显式声明的，我们很容易看出缺少了某个模块后带来的后果。  
得益于这种从模块中导出和导入变量的能力，我们能很容易地将所有代码切分成独立工作的代码块，我们可以合并和重组这些代码块——就像乐高积木一样——用模块来构建各种不同类型的应用。  
为了将模块功能引入 JS，人们已经做了多种尝试。如今我们主要使用两种模块系统：CommonJS 因为历史原因被用在 Node.js 的模块系统中，ESM 是 ES 标准中新加入的模块化方案，浏览器现在已经支持 ESM，Node.js 也正在向支持 ESM 迈进。

现在让我们来进一步了解 ESM 的内部机制。

## ESM 的运行机制

当在开发中使用模块时，我们建立了一个依赖关系的图，不同依赖之间的联系来自我们的导入声明（import statements）。这些导入声明能让浏览器或者 Node 清楚地知道它们应该加载哪些代码，我们给出一个文件作为入口，然后根据它的导入声明来找到所有剩下的代码。

![04_import_graph](https://hacks.mozilla.org/files/2018/03/04_import_graph.png)

但是，浏览器并不能直接使用文件本身，它们需要被解析为一种被称为模块记录（Module Records）的数据结构。

![05_module_record](https://hacks.mozilla.org/files/2018/03/05_module_record.png)

模块记录之后会被转化为模块实例，一个模块实例包含了两样东西：代码和状态。  
代码是指令的集合，但是只有代码本身不能做任何事，你需要一些原料来供指令使用。  
状态是什么？状态即是这些原料。状态是变量在任何时间点的实际的值。当然，这些变量只是内存中一些数据的昵称罢了。

模块实例将这两者组合起来：代码（一串指令的列表）和状态（所有变量的值）。

![06_module_instance](https://hacks.mozilla.org/files/2018/03/06_module_instance.png)


我们所需要的正是每一个模块的模块实例。模块读取的过程就是从入口文件拿到整个依赖关系图的模块实例的过程。

对于 ESM，这个过程可以分为三个步骤：
1. 构造（Construction）——加载脚本并解析为模块记录。
2. 实例化（Instantiation）——给所有导出变量分配内存空间（但是先不进行初始化），然后让对应的导入变量、导出变量指向这个地址，这被称为链接（linking）。
3. 赋值（Evaluation）——运行代码求值，对分配的内存空间进行赋值。

![07_3_phases](https://hacks.mozilla.org/files/2018/03/07_3_phases.png)

CommonJS 中加载文件、实例化和赋值是一起执行的，而 ESM 将上述三个步骤在不同的阶段执行，所以人们经常把 ESM 描述为异步的。  
ESM 的标准中确实定义了这种异步特性，我们会在下文中详细阐述。

模块本身是没有异步的必要性的，但是模块的加载不仅涉及了上述的三个阶段，还跟如何加载文件有关。ESM 标准不会告诉你如何去加载文件，这部分内容定义在其他标准里。  
[ESM 标准](https://tc39.github.io/ecma262/#sec-modules) 告诉你该如何将文件解析为模块记录、如何实例化并赋值，但是它并不会告诉你一开始我们如何拿到这些文件。  
我们通过 loader 拉取到文件，不同的平台对 loader 会有不同的定义。对于浏览器来说，这部分内容定义在 [HTML 规范](https://html.spec.whatwg.org/#fetch-a-module-script-tree) 中。

![07_loader_vs_es](https://hacks.mozilla.org/files/2018/03/07_loader_vs_es.png)

loader 实际控制着如何加载模块，它会调用 ESM 方法—— `ParseModule`、`Module.Instantiate` 和 `Module.Evaluate`，就像提线木偶一样操纵着 JS 引擎。

![08_loader_as_puppeteer](https://hacks.mozilla.org/files/2018/03/08_loader_as_puppeteer.png)

现在让我们来进一步阐述各个步骤。

## 构造

对于每个模块、构造阶段会发生三件事：
1. 定位模块所在的文件——即模块解析（module resolution）。
2. 拉取文件（从一个 URL 下载或者在文件系统中加载）。
3. 将文件解析为模块记录。

## 定位并加载文件

loader 会负责找到并下载文件。首先需要找到入口文件，在 HTML 中，我们可以通过 `<script>` 标签来告诉 loader 入口文件的位置。

![08_script_entry](https://hacks.mozilla.org/files/2018/03/08_script_entry.png)

但是 loader 如何找到 `main.js` 所依赖的模块呢？在 import 语句中我们会使用模块定位符（module specifier）来指定下一个模块的位置。

![09_module_specifier](https://hacks.mozilla.org/files/2018/03/09_module_specifier.png)

值得一提的是：不同平台对定位符字符串有不同的解析机制，当下有一些能在 Node 解析的定位符无法在浏览器被解析，但是人们在 [致力解决这些问题](https://github.com/domenic/package-name-maps)。  
在这些问题解决之前，浏览器只接受 URL 作为定位符并从加载文件。而文件在被解析之前并不会告诉我们下一步依赖的模块，我们并不能一次性地拿到整个应用的依赖关系。  
这意味着我们只能一层一层地前进，先解析一个文件，找到它的依赖，再对它的依赖们执行同样的步骤。

![10_construction](https://hacks.mozilla.org/files/2018/03/10_construction.png)

可想而知，如果主线程一直等待下载这些文件，会有大量任务被阻塞，在浏览器中加载文件会占用大量的时间。

![11_latency](https://hacks.mozilla.org/files/2018/03/11_latency.png)

为了不让模块加载导致你的应用慢到不能用，ESM 标准只对构建算法进行约束，让浏览器自己来拉取文件并完成依赖关系的整理，好进行接下来的同步的实例化工作。  
这些分阶段完成的工作是 ESM 和 CommonJS 模块最关键的区别。  
CommonJS 直接从文件系统加载文件，比从网络中下载文件要快得多。Node 可以阻塞主线程来等待文件加载完成，然后直接对它进行实例化和赋值的工作。这意味着你的代码会在返回模块实例之前同步地顺着依赖树一直加载、实例化并执行。

![12_cjs_require](https://hacks.mozilla.org/files/2018/03/12_cjs_require.png)

在后面我们还会继续阐述 CommonJS 的这种机制带来的不同表现，这里先举一个例子：在 Node 的 CommonJS 模块中，你可以在定位符中使用变量，所有 `requier()` 之前的代码都会被执行，所以在进行模块解析时定位符中的变量是有值的。  
但是在 ESM 里需要先梳理依赖关系再执行，所以你无法在定位符中使用还没有值的变量。

![13_static_import](https://hacks.mozilla.org/files/2018/03/13_static_import.png)

但是在定位符中使用变量确实是很有用的一种特性，比如有时候你的模块位置可能会依赖于运行环境。为了能让 ESM 也支持这种特性，[动态导入（dynamic import）](https://github.com/tc39/proposal-dynamic-import) 提案让我们能使用形如 ``import(`${path}/foo.js`)`` 的方式使用导入声明。  
每一个使用 `import()` 的文件都会被视为依赖关系图中的入口文件，并分别处理依赖关系。

![14dynamic_import_graph](https://hacks.mozilla.org/files/2018/03/14dynamic_import_graph.png)

值得一提的是，即使是在不同依赖树下的同一模块，也会共享同一份模块实例。loader 会将模块实例缓存下来，在同一个全局作用域下每个模块只会存在一份实例。  
这样使引擎的工作量变得更少，模块文件只会被拉取一次。（而这只是模块缓存的其中一个原因，我们将在赋值阶段看到另一个原因。）  
loader 使用 [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) 来管理模块缓存。每个全局作用域都有其独立的 module map 来管理它们的模块。  
当 loader 将要拉取一个模块时，会将其 URL 放入 module map 中，并标记其 fetching 状态，发送对应的请求，再开始拉取下一个模块。

![15_module_map](https://hacks.mozilla.org/files/2018/03/15_module_map.png)

如果有另一个模块依赖相同的文件，loader 会现在 module map 中查找，如果结果是 fetching 状态，loader 会跳过当前文件开始下一个 URL 的加载。  
module map 不仅会追踪文件的拉取状态，同时还用来缓存模块实例，让我们继续讲解。

## 解析模块

当文件加载完成，我们需要将其解析为模块记录。浏览器通过模块记录来理解模块的内部构造。

![25_file_to_module_record](https://hacks.mozilla.org/files/2018/03/25_file_to_module_record.png)

模块记录被解析后会被放在 module map 中，可供之后的所有对该模块的请求使用。

![25_module_map](https://hacks.mozilla.org/files/2018/03/25_module_map.png)

这里有一些细节需要注意，被解析的模块和普通的脚本有所不同，所有的模块都会被视为严格模式，还有一些区别例如 `await` 是顶层代码的保留字，以及 `this` 的值是 `undefined`。  
这些解析上的区别对待被称为 “parse goal”，在对同一个文件的解析上应用不同的 parse goal 会得到不同的结果。所以我们必须事先知道我们要解析的文件到底是什么角色——它是否是一个模块文件。  
在浏览器中要做到这点很容易，只需在 script 标签加入 `type="module"`，就可以明确声明该文件应该当作模块解析。同样的，只有模块能够被导入，所以每一个被 `import` 的文件也是模块。

![26_parse_goal](https://hacks.mozilla.org/files/2018/03/26_parse_goal.png)

但是在 Node 中没有 HTML 标签，没有一个可用来标识模块的选项。社区曾尝试过使用 `.mjs` 拓展名来标识模块，我们之后还会看到关于 parse goal 的讨论，这是一个正在进行的议题，现在我们还不清楚 Node 社区最后选择哪种方式来作为模块标识。  
总之，loader 需要知道被解析的文件是否是一个模块，如果被导入的模块里有其他的导入，loader 将一直工作直到所有文件都被加载并解析。  
至此模块的构造阶段的工作就完成了，我们从一个入口文件拿到了整个应用的模块记录。

![27_construction](https://hacks.mozilla.org/files/2018/03/27_construction.png)

接下来该进行实例化并将所有实例链接起来了。

## 实例化

正如上文提到的，一个模块实例包含了代码和状态。状态由内存描述，实例化阶段实际上是在进行分配内存的工作。  
首先，JS 引擎会创建一个模块环境记录（module environment record）用来管理模块记录中的变量，然后给所有 `export` 分配内存空间，模块环境记录用来记录所有 `export` 对应的内存地址。  
变量此时仅做初始化，在赋值阶段才会被赋值。为了更方便地进行赋值阶段的工作，所有被 `export` 的函数声明也会在这个阶段被初始化。  
JS 引擎会对整个依赖树进行一次后序遍历，从叶子节点（也就是没有其他依赖的文件）开始对 `export` 分配内存地址。

![30_live_bindings_01](https://hacks.mozilla.org/files/2018/03/30_live_bindings_01.png)

引擎自底向上完成对所有 `export` 的地址分配后，又从根节点自顶向下地对 `import` 进行内存地址的绑定。  
对应的 `export` 和 `import` 指向的是相同的地址，先对 `export` 分配内存保证了每个 `import` 都指向正确的内存地址。

![30_live_bindings_02](https://hacks.mozilla.org/files/2018/03/30_live_bindings_02.png)

在 CommonJS 中，整个导出对象是被赋值拷贝的。

![31_cjs_variable](https://hacks.mozilla.org/files/2018/03/31_cjs_variable.png)

而在 ESM 中，导入和导出模块指向同一片内存空间，当导出模块的值被改变，导入模块会反映其变化。  
导出模块可以任意地改编模块值，但是被导入的模块的值不能被改写。当然，如果被导入的值是一个对象，我们可以改写对象的属性。

![30_live_bindings_04](https://hacks.mozilla.org/files/2018/03/30_live_bindings_04.png)

ESM 使用这种 live bindings 的原因在于，引擎不运行代码即可完成模块之间的绑定。我们会在下文中阐述，这一点为赋值阶段的循环引用带来的帮助。  
至此实例化阶段也结束了，我们得到了所有模块的实例，导入、导出模块也在内存中被联系起来。  
现在我们可以执行代码，对模块进行赋值了。

## 赋值

最后一步我们将给已分配好的内存空间赋值。JS 引擎将执行顶层代码——函数外的代码。  
除了赋值之外，执行代码时可能会有其他的副作用，比如模块可能会发送请求。

![40_top_level_code](https://hacks.mozilla.org/files/2018/03/40_top_level_code.png)

正是因为有潜在的副作用存在，我们希望所有模块的代码被精确地只执行一次，赋值阶段执行代码的次数可能会影响执行结果。  
这也是为什么我们需要 module map 来缓存 URL，module map 保证了模块记录的唯一性，也保证了所有模块只被执行一次。和实例化中一样，模块代码的执行顺序也是通过后序遍历决定的。

接下来我们讲讲循环引用。  
循环引用来源于你依赖关系中的回路。通常来说这会是一条比较长的回路，但是为了图方便我们使用一个短回路作为例子来解释这个问题。

![41_cjs_cycle](https://hacks.mozilla.org/files/2018/03/41_cjs_cycle.png)

我们来看 CommonJS 在这里如何工作。main 模块会执行到 `require` 语句之前，然后读取 counter 模块。

![41_cyclic_graph](https://hacks.mozilla.org/files/2018/03/41_cyclic_graph.png)

counter 模块尝试访问 main 模块的 `message`，但是此时的 main 模块尚未执行至此，拿到一个 `undefined` 。JS 引擎将为 `message` 这个本地变量分配内存空间然后赋值为 `undefined`。

![42_cjs_variable_2](https://hacks.mozilla.org/files/2018/03/42_cjs_variable_2.png)

代码继续执行至 counter 模块的顶层代码结束，我们设置一个 `setTimeout` 来确认最终（main.js 执行结束后）我们是否会拿到 messsage 的值。

![43_cjs_cycle](https://hacks.mozilla.org/files/2018/03/43_cjs_cycle.png)

main.js 中的 `message` 会被初始化放入内存，但是 counter 模块引入的 `message` 对此并无感知，依旧为 `undefined`。

![44_cjs_variable_2](https://hacks.mozilla.org/files/2018/03/44_cjs_variable_2.png)

如果模块是通过 live bindings 维系的， main.js 执行结束后会将模块正确地赋值，`setTimeout` 的回调也就能拿到正确的值了。  
对于循环引用的支持时 ESM 设计背后的一种理性考量，三段式的执行步骤使之成为可能。

## ESM 的现状？

随着 5 月初正式发布的 Firefox 60，所有主流浏览器均已默认支持 ESM。Node 的 [模块小组](https://github.com/nodejs/modules) 也正致力于解决 ESM 和 CommonJS 之间的兼容性问题。  

这意味着我们已经可以在脚本标签中使用 `type=module` 并且导入导出模块。不过现阶段还有很多模块相关的功能还在议案中，[dynamic import proposal](https://github.com/tc39/proposal-dynamic-import) 目前在 Stage 3 阶段，[import.meta](https://github.com/tc39/proposal-import-meta) 和 [module resolution proposal](https://github.com/domenic/package-name-maps) 也在致力抹平 Node 和浏览器端模块使用上的差距，希望我们能看到 ESM 更好的未来。

（译者：多说一句，在不解决浏览器端的依赖关系层级打平的问题前，打包方案可能才是银弹。）
