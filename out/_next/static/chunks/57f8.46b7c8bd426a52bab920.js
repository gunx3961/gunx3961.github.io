(window.webpackJsonp=window.webpackJsonp||[]).push([["57f8"],{t573:function(e,a,n){"use strict";n.r(a);var t=n("qNsG"),m=n("q1tI"),r=n.n(m),o=n("6qfE");a.default=function(e){var a=e.components;Object(t.a)(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h1"},"TypedArray")," 还是 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h1"},"DataView")," : 理解字节序"),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"本文翻译自 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"http://www.geekonaut.de/"}},"Martin Splitt")," 的文章",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://hacks.mozilla.org/2017/01/typedarray-or-dataview-understanding-byte-order/"}},"《TypedArray or DataView: Understanding byte order》"))),r.a.createElement(o.MDXTag,{name:"h2",components:a},"教练，三行告诉我怎么回事"),r.a.createElement(o.MDXTag,{name:"p",components:a},"即使在同一台设备上，",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 的字节序也会有所不同，这主要取决于你使用 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"TypedArray"))," 还是 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"DataView"))," 的 setter。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 旨在对二进制数据进行快速、高效的访问。二进制数据在 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL"}},"WebGL"),"、",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"}},"Canvas 2D"),"、",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"}},"Web Audio")," 等场景都有广泛的需求，我们自然想要一种在硬件上消耗最少且方便网络传输的方法对这些数据进行存储。"),r.a.createElement(o.MDXTag,{name:"h2",components:a},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"TypedArrays")," 和 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"ArrayBuffer")," 都是啥？"),r.a.createElement(o.MDXTag,{name:"p",components:a},"你们 ES6 有三个好：",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"1. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer"),"，一种被设计为存储二进制数据的数据结构。\n2. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TypedArray"),"，一种对 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 的查看方式（",r.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"view"),"），要求所有元素定长。\n3. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView"),"，另外一种对 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 的查看方式，但是允许元素有不同的字长和类型。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"当我们想对图片或者其他各种各样文件类型进行操作时，有一种能够存储二进制数据的结构是非常有用的。\n这里我们对二进制数据不再啰嗦，直接来看个例子：  "),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var buffer = new ArrayBuffer(2) // 长度为 2 个字节的 buffer\nvar bytes = new Uint8Array(buffer) // 将 buffer 当作一个 8 位字长的无符号整数数组进行访问\n\nbytes[0] = 65 // ASCII 字符 'A'\nbytes[1] = 66 // ASCII 字符 'B'\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},"现在我们可以将其转换为一个 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"Blob"))," 对象。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"再由它创建一个 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"Data URI")),"，作为一个文本文件打开。"),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var blob = new Blob([buffer], {type: 'text/plain'})\nvar dataUri = window.URL.createObjectURL(blob)\nwindow.open(dataUri)\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},'浏览器窗口中会显示文本 "AB"。'),r.a.createElement(o.MDXTag,{name:"h2",components:a},"先来说说字节序"),r.a.createElement(o.MDXTag,{name:"p",components:a},"我们接连写了两个字节（或者说 16 位）的数据，如果我们创建一个更大单位长度的 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TypedArray"),"，就能通过单次写入一个 16-bit 的数来达到同样的效果。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"引用 MDN 上 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays"}},"JavaScript typed arrays")," 里的一张图表。"),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://mdn.mozillademos.org/files/8629/typed_arrays.png",alt:"ArrayBuffer"}})),r.a.createElement(o.MDXTag,{name:"p",components:a},"可以看到在上面的例子中，我们先写了字符 'A'，再写了字符 'B'，我们也可以通过使用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint16Array"),"，将两个字节存储为一个 16-bit 值。"),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var buffer = new ArrayBuffer(2) // 长度为 2 个字节的 buffer\nvar word = new Uint16Array(buffer) // 将 buffer 当作一个 16 位字长的无符号整数数组进行访问\n\nvar value = (65 << 8) + 66 // 将 'A' 左移 8 位作为高位的值，在加上低位的 'B'\nword[0] = value // 写入 16 位数据\n\n// 作为文本文件打开:\nvar blob = new Blob([buffer], {type: 'text/plain'})\nvar dataUri = window.URL.createObjectURL(blob)\nwindow.open(dataUri)\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},'等等！如果执行这段代码就会发现，我们得到的结果不是预期中的 "AB" 而是 "BA"。到底怎么回事？\n我们来进一步分析向数组里写入的数据。'),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"65 十进制 = 01 00 00 01 二进制\n66 十进制 = 01 00 00 10 二进制\n\n// 我们向 Uint8Array 中写入的数:\n01 00 00 01 01 00 00 10\n<bytes[0]-> <bytes[1]->\n\n// 我们这样创建 16-bit 值:\nvar value = (01 00 00 01 00 00 00 00) + 01 00 00 10\n= 01 00 00 01 01 00 00 10\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},"我们向 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint8Array")," 和 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint16Array")," 里写入的两个 16-bit 值都是一样的，所以是什么造成了最终结果的不同呢？\n答案就是，存储需要多个字节的值时，字节的排列顺序是由系统的 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Endianness"}},"字节序")," 决定的。"),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var buffer = new ArrayBuffer(2)\n// 对同一个 ArrayBuffer 创建两个不同单位长度的 TypedArray 进行查看\nvar word = new Uint16Array(buffer) // 16 位值\nvar bytes = new Uint8Array(buffer) // 8 位值\n\nvar value = (65 << 8) + 66\nword[0] = (65 << 8) + 66\nconsole.log(bytes) // [66, 65]\nconsole.log(word[0] === value) // true\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},"当我们按字节进行查看时，会发现实际上 'B' 才是被写在 buffer 中第一个字节里的，但是如果直接将其作为 16-bit 的值来读取，结果也是正确的。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"这意味着什么？"),r.a.createElement(o.MDXTag,{name:"p",components:a},"我们不妨将字节像想为每个值的数位，这样值 123 会有三个字节 1 2 3。小端字节序（",r.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"Little endian"),"）规定，一个数值的低位会先被存储，所以 123 会被存储为 3 2 1。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"对应的大端字节序（",r.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"Big endian"),"）按照高位优先的顺序存值，123 会被存储为 1 2 3。\n只要计算机知道自己使用哪种字节序，就能按照正确的方式将值“取”出来。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"如果我们按照这样执行，问题不大："),r.a.createElement(o.MDXTag,{name:"blockquote",components:a},r.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"If isLittleEndian is not present, set isLittleEndian to either true or false.\nThe choice is implementation dependent. Choose the alternative that is most efficient for the implementation.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the GetValueFromBuffer abstract operation.")),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"（译注：出自 ES7 草案 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"http://tc39.github.io/ecmascript_sharedmem/shmem.html#StructuredData.ArrayBuffer.abstract.GetValueFromBuffer"}},"ECMAScript Shared Memory and Atomics"),"，现已修改为根据平台字节序设置对应值，统一按小端字节序存取。）")),r.a.createElement(o.MDXTag,{name:"p",components:a},"那好吧，我们不去管 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"isLittleEndian"),"，让浏览器自行决定它的值（大部分情况下它会是 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"true"),"，因为大部分设备是小端字节序），然后坚持执行。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"这是一种非常合理的处理，正如 Dave Herman 在他",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://calculist.org/blog/2012/04/24/the-little-endian-web/"}},"一篇文章"),"中指出的，在标准中选定一种字节序将“总归是快速或者正确的”。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"如今大部分系统都是小端字节序，所以选择小端字节序是一种合理假设。当数据的存储方式和当前系统的方式一致时，我们可以获得最佳的效率，因为数据不需要额外的转换过程（例如 GPU 经由 WebGL）。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"除非需要明确支持一小部分设备，钦定小端字节序是比较安全的，你还可以从中收获运行效率。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"然而，如果我们想将二进制数据在网络中传输，或向一个结构化的二进制文件里写入数据呢？",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"这种情况下我们倾向于大端字节序，字节能够被顺序写入。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"幸运的是我们也有对应的方法。"),r.a.createElement(o.MDXTag,{name:"h2",components:a},"向 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"ArrayBuffer")," 写入的另一种方式：",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"DataView")),r.a.createElement(o.MDXTag,{name:"p",components:a},"就像我一开始说的，有时候你需要向 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 写入不同类型的数据。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"想象这样的场景，你需要向一个二进制文件中写入这样的 header："),r.a.createElement(o.MDXTag,{name:"table",components:a},r.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Size in byte"),r.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"2"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},"Identifier “BM” for Bitmap image")),r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"4"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},"Size of the image in byte")),r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"2"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},"Reserved")),r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"2"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},"Reserved")),r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"4"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},"Offset (in bytes) between the end of the header and the pixel data")))),r.a.createElement(o.MDXTag,{name:"p",components:a},"BTW，这是 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/BMP_file_format#Bitmap_file_header"}},"BMP 文件的 header 结构"),"。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"除了用 typed arrays 来设置范围外，我们还可以用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView"),"："),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var buffer = new ArrayBuffer(14)\nvar view = new DataView(buffer)\n\nview.setUint8(0, 66)     // Write one byte: 'B'\nview.setUint8(1, 77)     // Write one byte: 'M'\nview.setUint32(2, 1234)  // Write four byte: 1234 (rest filled with zeroes)\nview.setUint16(6, 0)     // Write two bytes: reserved 1\nview.setUint16(8, 0)     // Write two bytes: reserved 2\nview.setUint32(10, 0)    // Write four bytes: offset\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," 现在包含这些数据："),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"Byte  |    0   |    1   |    2   |    3   |    4   |    5   | ... |\nType  |   I8   |   I8   |                I32                | ... |    \nData  |    B   |    M   |00000000|00000000|00000100|11010010| ... |\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},"在上面的例子中我们使用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 在头两个字节中写入两个 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint8"),"，随后一个 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint32")," 占据后面的四个字节……"),r.a.createElement(o.MDXTag,{name:"p",components:a},"让我们来回顾下那个简单的文本示例。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"我们也可以使用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 替代 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Unit16Array"),"，用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint16"),' 来表示 "AB"。'),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript",metaString:""}},"var buffer = new ArrayBuffer(2)\nvar view = new DataView(buffer)\n\nvar value = (65 << 8) + 66\nview.setUint16(0, value)\n\nvar blob = new Blob([buffer], {type: 'text/plain'})\nvar dataUri = window.URL.createObjectURL(blob)\nwindow.open(dataUri)\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},'这下我们终于如愿以偿，看到了正确顺序的 "AB"。这么说 ',r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"setUint16")," 方法是默认大端字节序的？"),r.a.createElement(o.MDXTag,{name:"blockquote",components:a},r.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"DataView.prototype.setUint16 ( byteOffset, value ","[ , littleEndian ]"," )",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"1","."," Let v be the this value.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"2","."," If littleEndian is not present, let littleEndian be false.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"3","."," Return SetViewValue(v, byteOffset, littleEndian, “Uint16”, value).")),r.a.createElement(o.MDXTag,{name:"p",components:a},"标准中明确指出：如果省略 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"littleEndian")," 参数，其默认值为 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"false")," ——尽管在 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Uint16Array")," 中却将它统一设置为 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"true"),"。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"这是一个乍看之下会引起很多错误的规定。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"在一个来自 Khronos Group 的 ES 提案中甚至明确提到过这一点:"),r.a.createElement(o.MDXTag,{name:"blockquote",components:a},r.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"The typed array view types operate with the endianness of the host computer.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"The DataView type operates upon data with a specified endianness (big-endian or little-endian).")),r.a.createElement(o.MDXTag,{name:"p",components:a},"（",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TypedArray")," 根据宿主系统的字节序进行操作，",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 应该指定字节序进行操作。）",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"这看起来已经足够详细，但是依然有一个缺口，如果没有指定字节序，他们的表现会是："),r.a.createElement(o.MDXTag,{name:"ul",components:a},r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TypedArray")," 会使用宿主系统的字节序。"),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"DataView")," 默认使用大端字节序。")),r.a.createElement(o.MDXTag,{name:"h2",components:a},"总结"),r.a.createElement(o.MDXTag,{name:"p",components:a},"浏览器之所以选择了小段字节序，是因为现阶段大多数设备在 CPU 和内存层面上都使用它，这会获得最佳的效率。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"那么为什么 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TypedArray")," 和 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 在 setter 上的操作又会如此发散呢？",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TypedArray")," 旨在为同样的系统（本地）提供二进制数据操作，所以选择一种自组织的字节序也是合情合理的。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 旨在对被传输的二进制数据进行序列化与反序列化，这也是为什么它要求手动选择字节序。默认的大端字节序是因为在网络传输中绝大部分使用大端字节序（网络字节序）。在处理二进制数据流时，我们就可以简单地将下一个数据放入内存中的下一个地址。"),r.a.createElement(o.MDXTag,{name:"p",components:a},"处理二进制数据最简单的方式是：只要我们创建的二进制数据会离开浏览器（无论是通过网络传输至其他系统还是作为文件下载），始终使用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DataView")," 的 setter。",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"这是一种被广为推崇的方式，比如在 ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/"}},"这篇在 2012 年发表于 HTML5Rocks 的文章")),r.a.createElement(o.MDXTag,{name:"blockquote",components:a},r.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Typically, when your application reads binary data from a server, you’ll need to scan through it once in order to convert it into the data structures your application uses internally.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"DataView should be used during this phase.",r.a.createElement(o.MDXTag,{name:"br",components:a,parentName:"p"}),"It’s not a good idea to use the multi-byte typed array views (Int16Array, Uint16Array, etc.) directly with data fetched via XMLHttpRequest, FileReader, or any other input/output API, because the typed array views use the CPU’s native endianness.")),r.a.createElement(o.MDXTag,{name:"p",components:a},"总而言之，如果用三行来说的话："),r.a.createElement(o.MDXTag,{name:"ul",components:a},r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"假定系统使用小端字节序是安全的。"),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TypedArray")," 用来创建二进制数据（例如用于 Canvas、WebGL）是极好的。"),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"对于来自其他系统的二进制数据，使用 ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"DataView")," 来操作是一种安全的方式。")))}}}]);