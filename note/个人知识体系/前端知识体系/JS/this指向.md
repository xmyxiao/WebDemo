# 简述this指向</br>

这里的例子是在浏览器中执行，所以window指代全局
this是执行上下文中的一个属性
this值的首要特点是它不是静态的绑定到一个函数

## 全局环境下的this</br>

先从一道面试题说起

``` javascript
var a = '1'
function fn() {
    console.log(this.a)
}
fn()
```

在浏览器中执行，fn执行后输出的结果是1，为什么呢？首先我们知道，函数在浏览器全局环境中被简单调用，非严格模式下this指向window
fn()调用可以看做是window.fn(),this指向调用它的对象也就是window在严格环境下this则是指向undefined

```javascript
var a = '1'
function fun() {
    'use strict'
    console.log(this.a)
}
fun()
```

js严格模式
严格模式消除了 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为

再看一道题目

```javascript
const foo = {
    bar: 10,
    fn: function() {
       console.log(this)
       console.log(this.bar)
    }
}
var fn1 = foo.fn
fn1()
```

这里的foo.fn在被赋值给fn1后再执行,实际上是window.fn1(),所以这里的this还是指向window

## bind/call/apply 改变 this 指向

```javascript
const foo = {
    name: 'a',
    logName: function() {
        console.log(this)
    }
}
const b = {
    name: 'b'
}
console.log(foo.logName.call(b))
```

作为 call/apply/bind 方法被调用的时候指向传入的值

## 构造函数和 this

```javascript
function Foo() {
    this.name = "b"
    return {}
}
const fo = new Foo()
console.log(fo.bar)


```

new 操作符调用构造函数具体执行了什么
创建一个新的对象
将构造函数的 this 指向这个新对象
为这个对象添加属性、方法等
最终返回新对象
如果构造函数中显式返回一个值，且返回的是一个对象，那么 this 就指向这个返回的对象；如果返回的不是一个对象，那么 this 仍然指向实例

## setTimeout、setInterval中的this

```javascript
let obj = {
    name: 'a',
    fn:function(){
        console.log(this)
    }
}
setTimeout(obj.fn, 100)
```

超时调用的代码都是在全局执行域中执行的,所以这里的this是指向window,但是在箭头函数下例外

## 箭头函数中的 this 指向

箭头函数里面 this 始终指向外部对象（函数或者全局）

```javascript
var person = {
    name: 'a',
    sayName: function() {
        var fn = () => {
            return () => {
                console.log(this)
            }
        }
        fn()()
    }
}

person.sayName();
```

```javascript
const foo = {
    fn: function () {
        setTimeout(() => {
            console.log(this)
        })
    }
}
console.log(foo.fn())
```

```javascript
var name = 'window'
var person = {
    name: 'a',
    sayName: ()=>{
        console.log(this.name)
    }
}

person.sayName();
```

## 指向为null的this</br>

```javascript
function foo() {
  console.log(this)
}
foo()
console.log(foo === foo.prototype.constructor)
foo.prototype.constructor()
```

this是由激活上下文代码的调用者来提供的，即调用函数的父上下文

```javascript
const a = {
 name: 'a',
 fn: function(){
  console.log(this)
 }
}
const b = {
 name: 'b',
 fn: function(){
  return a.fn()
 }
}
const c = {
 name: 'c',
 fn: function(){
  var fn1 = a.fn
  return fn1()
 }
}

console.log(a.fn())
console.log(b.fn())
console.log(c.fn())
```

在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用括号()的左边是引用类型的值，this将设为引用类型值的对象
其他情况下（与引用类型不同的任何其它属性），这个值为null
当this的值为null的时候，其值会被隐式转换为全局对象
注：第5版的ECMAScript中，已经不强迫转换成全局变量了，而是赋值为undefined

原始值的数据类型有：undefined 、boolean 、number 、string 、symbol、null，原始值类型的访问是按值访问的，就是说你可以操作保存在变量中的实际的值
除了上面的基本类型之外就是引用类型了也就是object

```javascript
var book = {
    type: 'book01'
}

Object.defineProperty(book, "name", {
    get: function(){
        return 'book'
    },
    set: function(newValue){
        name = newValue
    }
})

console.log(book.name)
```

```javascript
var foo = {
  bar: function () {
    console.log(this);
  }
}

foo.bar() // foo (foo.bar)()

(foo.bar = foo.bar)()
(false || foo.bar)()
// (foo.bar, foo.bar)()
```

1.第一个例子很明显是引用类型，结果是，this为foo。
2.第二个例子中，赋值运算符调用了GetValue方法。返回的结果是函数对象（但不是引用类型），这意味着this设为null，结果是global对象。
3.后面也是一样——逗号运算符和逻辑运算符（OR）调用了GetValue 方法，失去了引用而得到了函数。并再次设为global。
逗号操作符对两个操作数进行求值并返回最终操作数的值
(foo.bar)() 立即执行函数的window
