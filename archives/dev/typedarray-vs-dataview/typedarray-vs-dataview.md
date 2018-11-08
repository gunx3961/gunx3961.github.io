# `TypedArray` 还是 `DataView` : 理解字节序

*本文翻译自 [Martin Splitt](http://www.geekonaut.de/) 的文章[《TypedArray or DataView: Understanding byte order》](https://hacks.mozilla.org/2017/01/typedarray-or-dataview-understanding-byte-order/)*

## 教练，三行告诉我怎么回事
即使在同一台设备上，`ArrayBuffer` 的字节序也会有所不同，这主要取决于你使用 [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 还是 [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) 的 setter。  
`ArrayBuffer` 旨在对二进制数据进行快速、高效的访问。二进制数据在 [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)、[Canvas 2D](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)、[Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) 等场景都有广泛的需求，我们自然想要一种在硬件上消耗最少且方便网络传输的方法对这些数据进行存储。

## `TypedArrays` 和 `ArrayBuffer` 都是啥？
你们 ES6 有三个好：  
1. `ArrayBuffer`，一种被设计为存储二进制数据的数据结构。
2. `TypedArray`，一种对 `ArrayBuffer` 的查看方式（*view*），要求所有元素定长。
3. `DataView`，另外一种对 `ArrayBuffer` 的查看方式，但是允许元素有不同的字长和类型。

当我们想对图片或者其他各种各样文件类型进行操作时，有一种能够存储二进制数据的结构是非常有用的。
这里我们对二进制数据不再啰嗦，直接来看个例子：  
``` javascript
var buffer = new ArrayBuffer(2) // 长度为 2 个字节的 buffer
var bytes = new Uint8Array(buffer) // 将 buffer 当作一个 8 位字长的无符号整数数组进行访问

bytes[0] = 65 // ASCII 字符 'A'
bytes[1] = 66 // ASCII 字符 'B'
```
现在我们可以将其转换为一个 [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) 对象。  
再由它创建一个 [`Data URI`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)，作为一个文本文件打开。

``` javascript
var blob = new Blob([buffer], {type: 'text/plain'})
var dataUri = window.URL.createObjectURL(blob)
window.open(dataUri)
```
浏览器窗口中会显示文本 "AB"。

## 先来说说字节序
我们接连写了两个字节（或者说 16 位）的数据，如果我们创建一个更大单位长度的 `TypedArray`，就能通过单次写入一个 16-bit 的数来达到同样的效果。  
引用 MDN 上 [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 里的一张图表。

![ArrayBuffer](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

可以看到在上面的例子中，我们先写了字符 'A'，再写了字符 'B'，我们也可以通过使用 `Uint16Array`，将两个字节存储为一个 16-bit 值。

``` javascript
var buffer = new ArrayBuffer(2) // 长度为 2 个字节的 buffer
var word = new Uint16Array(buffer) // 将 buffer 当作一个 16 位字长的无符号整数数组进行访问

var value = (65 << 8) + 66 // 将 'A' 左移 8 位作为高位的值，在加上低位的 'B'
word[0] = value // 写入 16 位数据

// 作为文本文件打开:
var blob = new Blob([buffer], {type: 'text/plain'})
var dataUri = window.URL.createObjectURL(blob)
window.open(dataUri)
```
等等！如果执行这段代码就会发现，我们得到的结果不是预期中的 "AB" 而是 "BA"。到底怎么回事？
我们来进一步分析向数组里写入的数据。

``` javascript
65 十进制 = 01 00 00 01 二进制
66 十进制 = 01 00 00 10 二进制

// 我们向 Uint8Array 中写入的数:
01 00 00 01 01 00 00 10
<bytes[0]-> <bytes[1]->

// 我们这样创建 16-bit 值:
var value = (01 00 00 01 00 00 00 00) + 01 00 00 10
= 01 00 00 01 01 00 00 10
```
我们向 `Uint8Array` 和 `Uint16Array` 里写入的两个 16-bit 值都是一样的，所以是什么造成了最终结果的不同呢？
答案就是，存储需要多个字节的值时，字节的排列顺序是由系统的 [字节序](https://en.wikipedia.org/wiki/Endianness) 决定的。

``` javascript
var buffer = new ArrayBuffer(2)
// 对同一个 ArrayBuffer 创建两个不同单位长度的 TypedArray 进行查看
var word = new Uint16Array(buffer) // 16 位值
var bytes = new Uint8Array(buffer) // 8 位值

var value = (65 << 8) + 66
word[0] = (65 << 8) + 66
console.log(bytes) // [66, 65]
console.log(word[0] === value) // true
```
当我们按字节进行查看时，会发现实际上 'B' 才是被写在 buffer 中第一个字节里的，但是如果直接将其作为 16-bit 的值来读取，结果也是正确的。

这意味着什么？

我们不妨将字节像想为每个值的数位，这样值 123 会有三个字节 1 2 3。小端字节序（*Little endian*）规定，一个数值的低位会先被存储，所以 123 会被存储为 3 2 1。  
对应的大端字节序（*Big endian*）按照高位优先的顺序存值，123 会被存储为 1 2 3。
只要计算机知道自己使用哪种字节序，就能按照正确的方式将值“取”出来。

如果我们按照这样执行，问题不大：

> If isLittleEndian is not present, set isLittleEndian to either true or false.
The choice is implementation dependent. Choose the alternative that is most efficient for the implementation.  
An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the GetValueFromBuffer abstract operation.

*（译注：出自 ES7 草案 [ECMAScript Shared Memory and Atomics](http://tc39.github.io/ecmascript_sharedmem/shmem.html#StructuredData.ArrayBuffer.abstract.GetValueFromBuffer)，现已修改为根据平台字节序设置对应值，统一按小端字节序存取。）*

那好吧，我们不去管 `isLittleEndian`，让浏览器自行决定它的值（大部分情况下它会是 `true`，因为大部分设备是小端字节序），然后坚持执行。

这是一种非常合理的处理，正如 Dave Herman 在他[一篇文章](http://calculist.org/blog/2012/04/24/the-little-endian-web/)中指出的，在标准中选定一种字节序将“总归是快速或者正确的”。

如今大部分系统都是小端字节序，所以选择小端字节序是一种合理假设。当数据的存储方式和当前系统的方式一致时，我们可以获得最佳的效率，因为数据不需要额外的转换过程（例如 GPU 经由 WebGL）。  
除非需要明确支持一小部分设备，钦定小端字节序是比较安全的，你还可以从中收获运行效率。

然而，如果我们想将二进制数据在网络中传输，或向一个结构化的二进制文件里写入数据呢？  
这种情况下我们倾向于大端字节序，字节能够被顺序写入。  
幸运的是我们也有对应的方法。

## 向 `ArrayBuffer` 写入的另一种方式：`DataView`

就像我一开始说的，有时候你需要向 `ArrayBuffer` 写入不同类型的数据。  
想象这样的场景，你需要向一个二进制文件中写入这样的 header：

| Size in byte | Description |
|:-:|:-|
| 2 | Identifier “BM” for Bitmap image |
| 4 | Size of the image in byte |
| 2 | Reserved |
| 2 | Reserved |
| 4 | Offset (in bytes) between the end of the header and the pixel data |

BTW，这是 [BMP 文件的 header 结构](https://en.wikipedia.org/wiki/BMP_file_format#Bitmap_file_header)。

除了用 typed arrays 来设置范围外，我们还可以用 `DataView`：
``` javascript
var buffer = new ArrayBuffer(14)
var view = new DataView(buffer)

view.setUint8(0, 66)     // Write one byte: 'B'
view.setUint8(1, 77)     // Write one byte: 'M'
view.setUint32(2, 1234)  // Write four byte: 1234 (rest filled with zeroes)
view.setUint16(6, 0)     // Write two bytes: reserved 1
view.setUint16(8, 0)     // Write two bytes: reserved 2
view.setUint32(10, 0)    // Write four bytes: offset
```
`ArrayBuffer` 现在包含这些数据：

``` javascript
Byte  |    0   |    1   |    2   |    3   |    4   |    5   | ... |
Type  |   I8   |   I8   |                I32                | ... |    
Data  |    B   |    M   |00000000|00000000|00000100|11010010| ... |
```

在上面的例子中我们使用 `DataView` 在头两个字节中写入两个 `Uint8`，随后一个 `Uint32` 占据后面的四个字节……

让我们来回顾下那个简单的文本示例。  
我们也可以使用 `DataView` 替代 `Unit16Array`，用 `Uint16` 来表示 "AB"。

``` javascript
var buffer = new ArrayBuffer(2)
var view = new DataView(buffer)

var value = (65 << 8) + 66
view.setUint16(0, value)

var blob = new Blob([buffer], {type: 'text/plain'})
var dataUri = window.URL.createObjectURL(blob)
window.open(dataUri)
```
这下我们终于如愿以偿，看到了正确顺序的 "AB"。这么说 `setUint16` 方法是默认大端字节序的？

> DataView.prototype.setUint16 ( byteOffset, value [ , littleEndian ] )  
1\. Let v be the this value.  
2\. If littleEndian is not present, let littleEndian be false.  
3\. Return SetViewValue(v, byteOffset, littleEndian, “Uint16”, value).

标准中明确指出：如果省略 `littleEndian` 参数，其默认值为 `false` ——尽管在 `Uint16Array` 中却将它统一设置为 `true`。  
这是一个乍看之下会引起很多错误的规定。

在一个来自 Khronos Group 的 ES 提案中甚至明确提到过这一点:
> The typed array view types operate with the endianness of the host computer.  
The DataView type operates upon data with a specified endianness (big-endian or little-endian).

（`TypedArray` 根据宿主系统的字节序进行操作，`DataView` 应该指定字节序进行操作。）  
这看起来已经足够详细，但是依然有一个缺口，如果没有指定字节序，他们的表现会是：
* `TypedArray` 会使用宿主系统的字节序。
* `DataView` 默认使用大端字节序。

## 总结
浏览器之所以选择了小段字节序，是因为现阶段大多数设备在 CPU 和内存层面上都使用它，这会获得最佳的效率。

那么为什么 `TypedArray` 和 `DataView` 在 setter 上的操作又会如此发散呢？  
`TypedArray` 旨在为同样的系统（本地）提供二进制数据操作，所以选择一种自组织的字节序也是合情合理的。  
`DataView` 旨在对被传输的二进制数据进行序列化与反序列化，这也是为什么它要求手动选择字节序。默认的大端字节序是因为在网络传输中绝大部分使用大端字节序（网络字节序）。在处理二进制数据流时，我们就可以简单地将下一个数据放入内存中的下一个地址。

处理二进制数据最简单的方式是：只要我们创建的二进制数据会离开浏览器（无论是通过网络传输至其他系统还是作为文件下载），始终使用 `DataView` 的 setter。  
这是一种被广为推崇的方式，比如在 [这篇在 2012 年发表于 HTML5Rocks 的文章](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/)
> Typically, when your application reads binary data from a server, you’ll need to scan through it once in order to convert it into the data structures your application uses internally.  
DataView should be used during this phase.  
It’s not a good idea to use the multi-byte typed array views (Int16Array, Uint16Array, etc.) directly with data fetched via XMLHttpRequest, FileReader, or any other input/output API, because the typed array views use the CPU’s native endianness.

总而言之，如果用三行来说的话：
* 假定系统使用小端字节序是安全的。
* `TypedArray` 用来创建二进制数据（例如用于 Canvas、WebGL）是极好的。
* 对于来自其他系统的二进制数据，使用 `DataView` 来操作是一种安全的方式。
