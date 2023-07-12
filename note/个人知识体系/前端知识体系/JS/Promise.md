# Promise</br>

## 什么是Promise</br>

Promise是一种异步编程的解决方案，可以避免回调地狱，使得异步操作更加简单、清晰、灵活。

## 为什么使用Promise</br>

```javascript
function request(cb) {
  // 模拟网络请求
  let flag = Math.random() <= 0.5 ? true : false
  setTimeout(() => {
    cb(flag, flag ? '成功的数据' : '失败的信息')
  }, 1000)
}
request((status, msg) => {
  console.log(status, msg)
})
```

在这里如果需要在返回的方法里面再继续调用其他接口就会变成

```javascript
request((s1, m1) => {
    request((s2, m2) => {
        request((s3, m3) => {
            // 出现了回调地狱
        }
    })
})
```

而 Promise 可以很好的解决异步操作的问题

``` javascript
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('123')
  },1000)
}).then(res=>{
  return new Promise(resolve=>resolve(res+'a'))
}).then(res=>{
  return new Promise(resolve=>resolve(res+'b'))
})
p.then(res=>{console.log(res)})
```

Promise 嵌套使用时，内层的 Promise 可以省略不写

``` javascript
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('123')
  },1000)
}).then(res=>{
  return res + 'a'
}).then(res=>{
  return res + 'b'
})
p.then(res=>{console.log(res)})
```

## Promise的状态</br>

Promise是一个状态机，分为 3 种状态：</br>
当通过new创建Promise实例时，需要传入一个回调函数，我们称之为executor

  1.pending：待定状态，执行了 executor 后，处于该状态</br>
  2.fulfilled：兑现状态，调用resolve()后，Promise 的状态更改为 fullfilled，且无法再次更改</br>
  3.rejected：拒绝状态，调用reject()后，Promise 的状态更改为 rejected，且无法再次更改</br>

```javascript
let p = new Promise((resolve, reject) => {
  // 这个时候是pending状态  待定状态
  if () { // 判断条件
    resolve()
    // 变为fulfilled状态  已执行状态
  } else {
    reject()
    // 变为rejected状态  已拒绝状态
  }
})
```

### 测试题

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
})
console.log('1', promise1);
```

<details>
<summary>展开</summary>
从上至下，先遇到new Promise，执行该构造函数中的代码promise1</br>
然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending
</details>

在看这道题之前插入一下扩展的微任务和宏任务

```javascript
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')  // 题目变形  如果这里去掉会是什么输出
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
```

<details>
<summary>展开</summary>
从上至下，先遇到new Promise，执行其中的同步代码1</br>
再遇到resolve('success')， 将promise的状态改为了resolved并且将值保存下来</br>
继续执行同步代码2</br>
跳出promise，往下执行，碰到promise.then这个微任务，将其加入微任务队列</br>
执行同步代码4</br>
本轮宏任务全部执行完毕，检查微任务队列，发现promise.then这个微任务且状态为resolved，执行它。
</details>

## Promise API</br>

  1个构造函数： new Promise</br>
  3个实例方法：.then 和 .catch .finally</br>
  6个静态方法：Promise.all、Promise.race、Promise.resolve、Promise.reject、Promise.allSettled、Promise.any

### .then</br>

```javascript
const promise = new Promise(resolve => {
  resolve('1')
})
promise.then(res => console.log(res))
promise.then(res => console.log(res))

//如果返回的是普通值，那么这个普通值将作为一个新的 Promise 的resolve的值
promise.then(() => 'then').then(res => console.log(res))
// promise.then(() => 'then') 相当于
promise.then(() => {
  return new Promise(resolve => {
    resolve('then')
  })
})
// 如果返回的是 Promise，那么就可以再次调用then方法
promise
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('success')
      }, 2000)
    })
  })
  .then(msg => {
    // 2 秒后打印 success
    console.log(msg)
  })
```

#### 测试题

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);
```

<details>
<summary>展开</summary>
从上至下，先遇到new Promise，执行该构造函数中的代码promise1</br>
碰到resolve函数, 将promise1的状态改变为resolved, 并将结果保存下来</br>
碰到promise1.then这个微任务，将它放入微任务队列</br>
promise2是一个新的状态为pending的Promise</br>
执行同步代码1， 同时打印出promise1的状态是resolved</br>
执行同步代码2，同时打印出promise2的状态是pending</br>
宏任务执行完毕，查找微任务队列，发现promise1.then这个微任务且状态为resolved，执行它。
</details>

### .catch

catch可以用来捕获reject错误

```javascript
const promise = new Promise((resolve, reject) => {
  reject('error')
})

promise.then(undefined, err => {
  // 打印 error
  console.log(err)
})

promise
  .then(() => {})
  .catch(err => {
    console.log(err)
  })

// 虽然也可以使用promise.catch来处理  但是promise中的规范规定promise必须有.then
```

#### 测试题

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then: ", res);
  }).catch(err => {
    console.log("catch: ", err);
  })
```

<details>
<summary>展开</summary>
构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用
</details>

```javascript
Promise.resolve().then(() => {
  return new Error('error')
  //throw new Error('error')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})
```

<details>
<summary>展开</summary>
返回任意一个非 promise 的值都会被包裹成 promise 对象</br>
因此这里的return new Error('error')也被包裹成了return Promise.resolve(new Error('error'))
</details>

### finally

finally 是 ES9(ES2018) 新增的一个特性,finally 不接收参数</br>
无论一个Promise实例是fulfilled或rejected，finally都会执行</br>
finally可以用于处理无论是成功还是失败都要处理的事，比如说隐藏loading

```javascript
const promise = new Promise((resolve, reject) => {
  reject('error')
})
promise
  .then(res => {
    console.log('res:', res)
  })
  .catch(err => {
    console.log(('err', err))
  })
  .finally(() => {
    console.log('finally')
  })
```

### Promise.resolve</br>

使用Promise.resolve()相当于new Promise(resolve => { resolve() })</br>
resolve 参数形态：</br>
  参数本身是 Promise</br>
  参数是原始值/对象</br>
  参数是一个 thenable  //  thenable 是一个具有 then()功能 。 所有的 Promise 都是 thenable，但并不是所有的 thenable 都是 Promise

```javascript
// 将一个现成的数据转换为一个 Promise 实例
const foo = {
  name: 'a',
}
function bar(obj) {
  return Promise.resolve(obj)
}
bar(foo).then(res => {
  console.log(res)
})
```

### Promise.reject</br>

与Promise.resolve()方法逻辑基本相同，只不过Promise.reject()相当于创建一个 Promise 实例，并且 rejected 了</br>
与Promise.resolve()不同的是，Promise.reject()无论传递什么参数都会原样输出

### Promise.all</br>

只有全部为resolve才会调用 通常会用来处理 多个并行异步操作

```javascript
  let p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve('123')
    },1000)
  })
  let p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve('456')
    },1000)
  })
  let p3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
      reject('789')
    },1000)
  })

  let p = Promise.all([p1, p2, p3])

  p.then((res)=>{
    // 三个都成功则成功
    console.log(res,'都成功')
  }, (rej)=>{
    // 只要有失败，则失败
    console.log(rej,'至少有一个失败')
  })
```

### allSettled

all方法是有缺陷的，如果在Promise队列中有一个状态是rejected，那么我们就无法获取到其他fullfilled以及pending的Promise实例了</br>
allSettled是ES11(ES2020) 中新增的一个 API

```javascript
  let p1 = new Promise(function(resolve, reject){
    resolve('success1')
  })
  let p2 = new Promise(function(resolve, reject){
    reject('error')
  })
  let p3 = new Promise(function(resolve, reject){
    resolve('success2')
  })

  let p = Promise.allSettled([p1, p2, p3])

  p.then((res)=>{
    console.log('res', res)
  })
```

### Promise.race</br>

有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现

```javascript
let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P1');
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
  console.log(result); // 'P1'
});
```

### Promise.any

any 方法会等待一个fulfilled状态，才会决定返回 Promise 实例的状态</br>
如果队列中所有的实例都是rejected状态，那也需要等到所有执行完毕后才会决定返回的 Promise 实例的状态

```javascript
  let p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve('success1')
    }, 1000)
  })
  let p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
      reject('err')
    }, 1100)
  })
  let p3 = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve('success2')
    }, 1200)
  })
  Promise.any([p1,p2,p3]).then(res => {
    console.log('res', res)
  })
  .catch(err => { // 都没有fulfilled则进入这边
    console.log('err', err)
  })
```

### 实现一个简单的new Promise</br>

首先Promise是一个类，所以我们先实现一个简单的类

```javascript
class _Promise {
  constructor(executor) { // constructor 是一种用于创建和初始化class创建的对象的特殊方法。
    executor() // 立刻执行构造函数传入的代码
  }
}
```

其次Promise有三种状态

```javascript
// Promise的三种状态
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) {
    // 立即执行构造函数，并且状态变为 pending
    this.status = STATUS_PENDING
    const resolve = () => {
      // 执行 resolve 后，状态变为 fulfilled
      this.status = STATUS_FULFILLED
    }
    const reject = () => {
      // 执行 reject 后，状态变为 rejected
      this.status = STATUS_REJECTED
    }
    // 传入的回调会有两个参数 resolve/reject
    executor(resolve, reject)
  }
}
```

在执行 resolve、reject 后状态固化

```javascript
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    const resolve = () => {
      // 如果状态是 PENDING 时才会执行代码
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
      }
    }
    const reject = () => {
      // 如果状态是 PENDING 时才会执行代码
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
      }
    }
    executor(resolve, reject)
  }
}
```

then 方法可以接收两个参数，可以处理 resolve 和 reject

```javascript
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    // resolve 需要接收一个参数
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        // 将接收的参数保存在 Promise 中
        this.value = value
      }
    }
    // reject 也可以接收一个参数
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
      }
    }
    executor(resolve, reject)
  }
  // 实例方法 then
  then(onFulfilled, onRejected) {
    if (onFulfilled) onFulfilled(this.value)
    if (onRejected) onRejected(this.reason)
  }
}
```

executor 可以是一个异步函数

```javascript
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    // 因为可以执行多次 then，因此需要将所有的任务放在一个队列中
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        // 在 resolve 时执行 resolveQueue 所有的任务
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        // 在 reject 时执行 rejectQueue 所有的任务
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    // try...catch 捕获一下错误
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    // 由于 executor 可能是一个异步函数，所以就不能直接来执行传入的参数了，需要做一下状态判断
    // 如果执行 then 时 Promise 实例的状态已经变化，那么就可以直接执行传入的参数
    if (this.status === STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    // 如果在执行 then 的时候当前的状态还是 PENDING
    // 那么就加入队列中，等待执行 resolve、reject 的时候统一执行所有的队列
    if (this.status === STATUS_PENDING) {
      // 将任务放到相应队列中
      if (onFulfilled) this.resolveQueue.push(onFulfilled)
      if (onRejected) this.resolveQueue.push(onRejected)
    }
  }
}
```

实现链式调用

```javascript
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) { // constructor部分无改动
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    // 要想做到链式调用，就需要返回新的 Promise
    return new _Promise((resolve, reject) => {
      if (this.status === STATUS_FULFILLED && onFulfilled) {
        // 将 onFulfilled 返回的值作为下一个 Promise resolve() 的值
        const value = onFulfilled(this.value)
        resolve(value)
      }
      if (this.status === STATUS_REJECTED && onRejected) {
        // 这个也是同理
        const reason = onRejected(this.reason)
        resolve(reason)
      }
      if (this.status === STATUS_PENDING) {
        // 这里需要做一下处理了，因为这里队列是在构造函数中处理的
        // 所以需要转化一下
        if (onFulfilled)
          this.resolveQueue.push(param => {
            const value = onFulfilled(param)
            resolve(value)
          })
        if (onRejected)
          this.resolveQueue.push(param => {
            const reason = onRejected(param)
            resolve(reason)
          })
      }
    })
  }
}
```

catch捕获Promise实例的reject

```javascript
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

function executeFnWithCatchError(fn, param, resolve, reject) { // 用于try...catch...捕获错误
  try {
    const result = fn(param)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

class _Promise {
  constructor(executor = () => {}) { // constructor部分无改动
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled
      ? onFulfilled
      : value => {
          return value
        }
    onRejected = onRejected
      ? onRejected
      : reason => {
          throw new Error(reason)
        }
    return new _Promise((resolve, reject) => {
      if (this.status === STATUS_FULFILLED) {
        // 捕获错误
        executeFnWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === STATUS_REJECTED) {
        // 捕获错误
        executeFnWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === STATUS_PENDING) {
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onFulfilled, param, resolve, reject)
        })
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onRejected, param, resolve, reject)
        })
      }
    })
  }
  catch(onRejected) {
    // 将传入的数据作为 then 的第二个参数
    this.then(undefined, onRejected)
  }
  all(promiseQueue) {
    return new _Promise((resolve, reject) => {
      const result = []
      // 对队列进行遍历
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            result.push(res)
          })
          .catch(err => {
            // 任何一个 reject 那么就直接 reject
            reject(err)
          })
      })
      // 所有的 resolve，才 resolve
      resolve(result)
    })
  }
}
```

## 拓展 async/await

async是一个加在函数前的修饰符，被async定义的函数会默认返回一个Promise对象resolve的值。因此对async函数可以直接then，返回值就是then方法传入的函数

```javascript
async function testAsync() {
 return "async";
}

const result = testAsync();
console.log(result);

// 输出的是一个 Promise 对象
```

await 也是一个修饰符，只能放在async定义的函数内。可以理解为等待</br>
await 修饰的如果是Promise对象 可以获取Promise中返回的内容（resolve或reject的参数），且取到值后语句才会往下执行</br>
如果不是Promise对象：把这个非promise的东西当做await表达式的结果

```javascript
async function fun(){
  let a = await 1;
  let b = await new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('setTimeout')
    },3000)
  })
  let c = await function(){
      return 'function'
  }()
  console.log(a,b,c)
}
fun();
```

## 拓展 微任务与宏任务

  一开始整个脚本作为一个宏任务执行</br>
  执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列</br>
  当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完</br>
  执行浏览器UI线程的渲染工作</br>
  检查是否有Web Worker任务，有则执行</br>
  执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空</br>

  微任务包括：MutationObserver、Promise.then()或catch()、Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程、Node独有的process.nextTick。</br>
  宏任务包括：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering。</br>

## 拓展 js的generator函数

Generator函数是ES6提供的一种异步编程解决方案</br>
要创建一个 generator，我们需要一个特殊的语法结构：function*，即所谓的 “generator function”</br>

```javascript
function* generator() {
  yield '1'         // yield 表达式是暂停执行的标记
  return '2'
}
let iterator = generator()   // 调用 Generator函数，函数并没有执行，返回的是一个Iterator对象
iterator.next()            // {value: "1", done: false}，value 表示返回值，done 表示遍历还没有结束
iterator.next()
```

上面的代码中可以看到传统函数和Generator函数的运行是完全不同的，传统函数调用后立即执行并输出了返回值；</br>
Generator函数则没有执行而是返回一个Iterator对象，并通过调用Iterator对象的next方法来遍历</br>
每次调用Iterator对象的next方法时，内部的指针就会从函数的头部或上一次停下来的地方开始执行</br>
直到遇到下一个 yield 表达式或return语句暂停</br>

## promise async generator的差异

Promise，async/await和generator都是JavaScript中用来处理异步编程的方法。</br>

Promise是一种用于处理异步操作的对象，它可以用于处理一次操作，当操作完成时会返回一个值。其优点是代码简单明了，易于理解和维护。</br>

Async/await是Promise的一种语法糖，它可以让异步代码的写法更加清晰易懂。使用async/await，我们可以将异步操作的顺序代码化，就像使用同步方法一样。</br>

Generator函数可以被理解为在函数执行的过程中可以挂起执行并在需要的时候恢复执行的一种语法。其特点是它返回一个迭代器对象，通过yield关键字可以在函数执行过程中暂停函数执行，同时保留函数执行时的上下文信息。这使得编写异步代码更加优雅。</br>

总的来说，Promise更适用于一次性异步操作；async/await更适用于序列化异步操作并等待它们完成；Generator则更适用于需要控制异步操作的执行顺序。

## 参考地址

<https://juejin.cn/post/7063377198014529572></br>
<https://juejin.cn/post/6844904063570542599></br>
<https://juejin.cn/post/6844903625769091079></br>
<https://juejin.cn/post/7011755708496478215></br>
<https://segmentfault.com/a/1190000007535316></br>
<https://juejin.cn/post/7062155174436929550></br>
<https://juejin.cn/post/6844904077537574919>
