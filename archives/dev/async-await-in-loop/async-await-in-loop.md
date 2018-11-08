# 在循环中使用 async/await

*随着 Nodejs 7.6.0 的发布，开发者终于可以在不加 flag 的情况下使用 async/await 了！*

## 0x00 发现问题

尝试遍历数组，在 `foreach` 方法中传入一个 `async` 函数。

``` javascript
async function insert(db, categories) {
  categories.forEach(async (category) => {
      await db.insertOne(category);
      console.log(`Document created: ${category}.`);
    });
  });

  await db.close();
  console.log('close!');
}
```

结果自然是在遍历 `categories` 回调完成之前就会先关闭 db 连接，导致 insert 操作不能顺利进行。  
那么问题来了，在循环操作中使用 *async/await* 的正确姿势是什么？

## 0x01 并行的异步操作

我们来完成一个异步 log 的功能来模拟各种异步任务：

``` javascript
const sequence = [3e3, 2e3, 1e3];

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`waited ${ms} ms!`);
    }, ms);
  });
}

sequence.forEach(async (ms) => {
  const result = await wait(ms);
  console.log(result);
});

```
运行这段代码，输出为：
``` nohighlight
waited 1000 ms!
waited 2000 ms!
waited 3000 ms!
```
可以看到，我们通过 `Array.prototype.forEach` 方法对 `sequence` 中的每一个元素添加了一个 `async` 回调函数，并行执行并输出结果。  
这个时候我们修改一下需求，要求在所有异步任务完成之后提示用户，应该如何是好呢？


`async` 函数返回一个 `Promise` 对象，在 `forEach` 中我们并没有对其做任何状态改变的观察，而是仅依靠函数中的副作用完成了对结果的输出。  
如果想要对每一个 `Promise` 对象都进行处理，应该结合 Promise.all 并使用 `Array.prototype.map` 来遍历数组：
``` javascript
Promise.all(sequence.map(async (ms) => {
  const result = await wait(ms);
  console.log(result);
}))
  .then(() => { console.log('Complete!'); });
```
输出结果：
``` nohighlight
waited 1000 ms!
waited 2000 ms!
waited 3000 ms!
Complete!
```

## 0x02 串行的异步操作

我们再次更改需求，现在我们要求异步操作按照数组中元素顺序依次执行，在上一个操作完成后再执行下一步。  
为了达到这样的效果，应该使用ES6中的 `for...of` 来进行遍历操作：
``` javascript
async function loopInSequence() {
  for (const ms of sequence) {
    const result = await wait(ms);
    console.log(result);
  }
}
loopInSequence()
  .then(() => { console.log('Complete!'); });
```
在 `for...of` 循环中，`await` 操作能够按照预期执行，输出结果：
``` nohighlight
waited 3000 ms!
waited 2000 ms!
waited 1000 ms!
Complete!
```

