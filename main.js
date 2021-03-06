core => {
    // callback from promise is being added to the microtask que and has higher priority,
        // even if it took more time before it was added to the que
    // callback from setTimeout is being added to the task que and has lower priority,
        // even if it took less time before it was added to the que
    // task que is being executed one tast at a time plus then return to main thread
    // animation request frame will execute all qued tasks at a time, not including new tasks
    // microtasks is being executed all at once including new tasks,
        // main thread will resume execution only after microtask que is empty 

    // js paradigm
    memory/variable environment; global/local execution context; call stack; callback queue; event looop
    (1 + 1, 2 + 2)          // => 4    
        
    // initialization order
    let name = 0, last      // will be split into two parts
    // two undefined declarations will be hoisted
    let name = undefined; let last = undefined; name = 0
    }

primitiveVal => {
    // primitive vals are stored directly in the variable object
    var a = "a"         // var contains primitive val, val is copied into that var
    var b = a           // each var gets its own copy of data, changes in "a" will not affect "b"

    (undefined, null, boolean, string, number, symbol) => "are primitive values" 

    // number => double-precision 64-bit binary
    NaN === "failed in number coercion or math operation"
    }
referenceVal => {
    // reference vals are stored as pointers in the variable object
    var obj = new Object()          // assign a pointer to the obj
    var a = obj                     // get a copy of the pointer to the same obj in memory
    obj = null                      // dereference for garbage collection

    function name(x) { x = null }
    let y = new Array()
    name(y)                         // ref to arr will be passed, not address of arr
    console.log(y)                  // => array
    }
string => {
    // string => immutable type, represents a single 16-bit unit of UTF-16 text
    var foo = new String("foo"); typeof foo    // "object"; keys = [0,1,2]; vals = ['f','o','o']
    str.length                                  // str length
    
    // string interpolation
    formatCurrency`Hello ${firstName} ${lastName}!`
    function formatCurrency(stringsArray, ...values) {...}

    // iterate over str
    for (let char of "abc") console.log(char)

    // spread
    let chars = [..."abc"]      // create an array of chars
    }
symbol => {
    // nonenumerable properties that can’t be accessed without referencing the symbol
    // unique and immutable non-String obj prop key
    Symbol.hasInstance // if constructor obj recognize an obj as one of the constructor instances (instanceof)
    Symbol.iterator    // returns the default iterator for an object (for-of)
    
    var firstName = Symbol("description")       // symbol hold val [[Description]] that "undefined" or string
    var person = { [firstName]: "Sergey" }      // computed object literal prop

    // global symbol registry, method search global symbol registry for key "uid"
    // if finds, returns the existing. If not, new symbol is created and registered
    var uid = Symbol.for("uid")
    var object = {}; object[uid] = "12345"

    var person = {}; var name = Symbol("first name")
    Object.defineProperties(person, {
        [name]: { value: "Sergey", writable: false }
    })

    // get symbols
    let symbols = Object.getOwnPropertySymbols(person)  // array for-of symbols
    Symbol.keyFor(uid)
    }

coercion => {
    // from string to number
    function intToNum(str) {
        var val = parseInt(str, 10) // "10px" = 10, stops when not valud val reached
        return isNaN(value) ? 0 : value
    }
    val = Number(str)
    val = +str
    val = str - 0
    val = str - "0"
    val = str / 1

    // from number to string
    str = num.toString()
    str = String(num)
    str = num + ""

    // to boolean
    var bool = Boolean(str)
    bool = !!str
    bool = str ? true : false

    var date = Date.parse("Sun, 22 Dec 2017 08:00:00 GMT")

    // from array to string
    [].toString() = ""
    [1,2,3].toString() = "1,2,3"
    [null,undefined].toString() = ","

    // from object to string
    {}.toString() = "[object Object]"
    {a:1}.toString() = "[object Object]"
    }
compareAndCheck => {
    // identify type
    typeof null        // "object", empty obj pointer
    typeof undefined   // "undefined", always use it instead of "null"
    typeof true        // "boolean"
    typeof 123         // "number"
    typeof "foo"       // "string"
    typeof symbol      // "symbol"

    typeof ["a"]       // "object"
    typeof {a:1}       // "object"
    typeof funcName     // "function", callable object type

    // false vals
    false; null; undefined; ""; 0; NaN;
    // regular comparison
    x < y      // return "true", "false" or "undefined" if any operand is NaN
    x == y     // numeric coercion, only for compare numbers with numbers, never with bools
    x === y    // values must be the same type

    undefined === "variable has been declared but has no value for now"
    "undeclared" === "variable has not been declared for now"

    // number
    Number.isInteger(val)          // "true"

    // string
    Number.isNaN(msg.charAt(0))    // check if char at given index is not a number

    // NaN or -0
    Object.is(NaN, NaN)            // true, vals are equivalent if same type and same val
    Object.is("foo", NaN)          // false

    // object
    var href = (window && window.location && window.location.href) || null
    obj instanceof Object           // "true"
    Object.is(value1, value2)       // determines whether two vals are the same type and same value
    var bool = ("key" in obj)       // check if property is exist, including [[Prototype]] link
    obj.hasOwnProperty("key")       // check if property is exist only in that object
    obj instanceof Foo              // in prototype chain does "obj" arbitrarily pointed to by Foo.prototype appear
    objOne.isPrototypeOf(objTwo)    // in the entire prototype chain of "obj", does Foo.prototype ever appear
    Object.getPrototypeOf(obj) === Foo.prototype

    // check if obj is iterable
    function isIterable(object) {
        return typeof object[Symbol.iterator] === "function"
    }   // isIterable([1, 2, 3]) isIterable("Hello") isIterable(new Map()) isIterable(new Set())

    // array
    arr instanceof Array   // true
    Array.isArray(["a"])   // true

    // function
    Function.isCallable(funcName)  // true
    funcName instanceof Function   // true
    }

regExp => {
    var nums = /\d+/g
    var nums = new RegExp("\\d+", "g")
    }

scope => {
    // only lexical scope is present in js

    // jit compiler at first pass will look for any formal var/func declaration

    // global environment outer reference is null, also includes global obj that is a value of 
        // global environment "this" binding

    // module environment contains bindings for the top level declarations of a module, also
        // contain bindings that explicitly imported by module
        // the outer environment of module is a global environment

    // func environment corresponds to invocation of func obj, may establish new "this" binding
    // captures state necessary to support super method invocations

    // variable declaration
    var a      // new binding is created in global scope and NEW prop is added to the global obj
    let b      // new binding is created in global scope but NO prop is added to the global obj
    const c = 0    // constant value will stick to any block scope, like "let"

    var foo = "bar"        // will expands to...
    var foo                // var hoisted and declared at the top of the module
    foo = undefined        // initialization point
    foo = "bar"            // data assigned

    // function declaration
    function name() {}                  // will expands to...
    var name = function name() {}
    var name; name = undefined
    name = function name() {}

    // engine will remove block-scoping after executing
    var projectEntryData
    { 
        let projectId
        projectId = Math.round(Math.random()*1E4)
        projectEntryData = { id: projectId, description: "description" }
    }
    }
thisPointer => {
    // pointer "this" is a pointer to the object, that is a current context
    // function form of invocation
    functionName(args)
    // "this" pointer will be set to global obj, will bind to "underfined" in strict mode

    // method form of invocation
    obj.methodName(args);
    // "this" pointer will be set to "obj", the obj containing the "methodName"

    // constructor form of invocation
    new FunctionName(args)
    // "this" pointer will be set to new obj that will be returned

    // "this" pointer the same as "context" object
    var obj = { name: "Sergey" }
    function foo() { return this.name.toUpperCase() }
    foo.call(obj)
    // the same as passing a contex object
    function foo(context) { return context.name.toUpperCase() }
    foo(obj)

    // change "this" context with .call() method WITH func invocation
    // call [[Call]] internal method, "this" pointer will be explicitly set to "obj"
    functionName.call(obj, argOne, argTwo)  
    
    // change "this" context with .apply() method WITH func invocation, explicit binding
    functionName.apply(obj, [arrOfArgs]) 

    // change "this" context with .bind() method WITHOUT func invocation, explicit binding
    // will return new func with hard binded context
    var newFn = functionName.bind(obj, argOne, argTwo); newFn()
    functionName.bind(obj, argOne, argTwo); newFn() // the same as above

    // context optional parameter .forEach() method
    function foo(el) { console.log( el, this.id ) }
    let obj = { id: "awesome" }
    [1, 2, 3].forEach(foo, obj)

    // new binding, function constructor call
    // new empty obj is created
    // this new obj is [[Prototype]] linked to another obj
    // pass that obj in as a "this" context
    // return that "this"
    function Foo(a) { this.a = a }
    var baz = new Foo(2)
    }

func => {
    // first class obj, inherit from Function.prototype
    // member of Object type, may be invoked as a subroutine
    // internal prop [[Call]], distinguishes func from obj, used if func is called without "new"
    // internal prop [[Construct]], used if func is called with "new", empty obj created (named instance),
        // func body is executed with "this" set to the instance
    // internal prop [[Scope]] reference local Variable Environment in which it has been defined (lexical scope)
    
    function a() {}         // func declaration, hoisted
    var a = function() {}   // func expression, not hoisted, return an instance of func obj that can be invoked
    var a = new Function() {"arg", "return arg"}   // function constuctor call
    (function a() {})()    // func expression, not hoisted

    // after func applied to args (invoked), new environment created
    // it is a dict that maps vars to vals by name
    functionName(args)                      // function form of invocation
    objectName.methodName(args)             // method form of invocation
    objectName["methodName"](args)          // method form of invocation
    new FunctionName(args)                  // constructor form of invocation
    functionName.apply(objectName, [args])  // apply form of invocation

    // "arguments" obj, can be rebind with new value withing func body
    sum(1,2,3,4)
    sum.length()   // return number of parameters func is expecting
    function sum() {
        var i, n = arguments.length, total = 0 // "arguments" is an arr like obj, contains all params
        for (i = 0 i < n i += 1) total += arguments[i]
        return total
    }

    // pure func = contain NO free vars, only binded vars (passed in as an args)
    ((z) => z)(1)              // environment { z: 1, '..': global }
    ((x) => (y) => x)(1)(2)
    ((x) => (y) => x)(1)       // environment {x: 1, ...}, called "I combinator" or "Identity function"
    ((y) => x)(2)              // environment is {y: 2, '..': {x: 1, ...}}, called "K combinator" or "Kestrel"

    // rest param, array contains all params passed after "obj", must be only one rest param and it must be last
    function pick(obj, ...keys) {
        let result = Object.create(null)
        for (let i = 0, len = keys.length i < len i++) 
            result[keys[i]] = obj[keys[i]]
        return result
    }
    
    // default arguments ES5
    function makeRequest(url, timeout, callback) {
        timeout = (typeof timeout !== "undefined") ? timeout : 2000
        callback = (typeof callback !== "undefined") ? callback : function() {}
    }
    // default arguments ES6
    var defaultPerson = { name: "" }
    function logActivity(p=defaultPerson) { console.log(`${p.name}`) }
    function makeRequest(url, timeout = 2000, callback = funcName() {}) {}

    // function constructor call
    var add = new Function("first", "second = first", "return first + second")
    add(1, 1) add(1)      // 2
    var pickFirst = new Function("...args", "return args[0]")
    pickFirst(1, 2)        // 1

    // function internal-only methods
    function Person(name) { this.name = name }
    var x = Person("Sergey")       // [[Call]] method executes the body of func as it is
    var y = new Person("Sergey")   // [[Construct]] methods executes, new object is created,
        // then executing the func body with "this" set to the new target
    }
arrowFunc => {
    // fat arrow (arrow func)
    // no internal [[Construct]] method, cannot be called with "new" keyword
    // no "this" binding, "this" is just a var name, lexical scope rules are applied
    // "this" inhereted from enclosing scope by looking up scope chain
    // don’t have args obj, args remain accessible due to scope chain resolution of args identifier
    // call(), apply(), bind() will NOT affect "this" binding
    // () => ({ foo: 'bar' }) wrap obj in parenthesis in order to return it

    var name = (x) => ++                // function name(x) { return ++x }
    var name = (x) => { return ++x }    // for multi line body use braces and explicit return
    var getTempItem = id => ({ id: id, name: "Temp" })  // returned obj literal must be wrapped inside parentheses
    
    let row = function () { return mapWith( column => column * arguments[0], [1, 2, 3] ) }
    row(3)     // [3,6,9] fat arrow will bind arguments[0] to passed value "3"

    let row = function () { return mapWith( function (column) { return column * arguments[0] }, [1, 2, 3] ) }
    row(3)     // [1,4,9] reg func will bind arguments[0] to val from iterable array
    }
closure => {
    // characteristic of func that allows access its lexical scope while executing outside of it
    // closures contain free vars that is not bound within the func
    // after func applied to args its vars is not saved on the stack as usual, but in HEAP
        // that is why can be accessed by inner func after its execution
    let letters = (function(){
        const arr = ["a","b","c","d"]
        return function(i) { return arr[i] }
    }())
    letters(0)
    }
recursion => {
    // recursive func with tail call optimization, current stack frame is cleared and reused
    // no access to vars in the current stack frame (func is not a closure)
    // func making the tail call has no further work to do after the tail call returns
    // result of the tail call is returned as the func value
    
    countdown(10, value => console.log(value))
    const countdown = (value, fn) => {
        fn(value)
        return (value > 0) ? countdown(value-1, fn) : value
    }

    // iterate deeply into an object to retrieve a nested value
    var dan = {
        type: "person",
        data: {
          gender: "male",
          info: {
            id: 22,
            fullname: {
              first: "Dan",
              last: "Deacon"
            }
          }
        }
      }
    const deepPick = (fields, object={}) => { 
       const [first, ...remaining] = fields.split(".")
       return (remaining.length) ?
           deepPick(remaining.join("."), object[first]) : object[first]
    }
    deepPick("type", dan)                       // "person"
    deepPick("data.info.fullname.first", dan)   // "Dan"
    }

object => {
    // object props must be strings or symbols
    // obj can have own props (directly contained) or inherited (props of obj prototype)
    let obj = {
        key: value,     // key (string/symbol) and value
        name: method    // method, when called the "obj" is passed to the func as its "this" val
    }

    // object creation
    var obj = {}                   // literal syntax
    var obj = new Object()         // constructed syntax
    var obj = Object.create(null)  // obj with a null prototype, no inherited props
    var obj = Object.create(Foo)   // the same as: var obj = new Foo()

    // data props
    Object.defineProperty(obj, "key", {
        value: "",                  // default "undefined"
        writable: true,             // default false, read only
        enumerable: true,           // default false, show up in inumeration
        configurable: true          // default false, delete it or change to accessor prop
    })
    Object.defineProperties(obj, {
        "keyOne": { value: "", writable: true, enumerable: true, configurable: true },
        "keyTwo": { value: "", writable: true, enumerable: true, configurable: true }
    })

    // accessor props
    Object.defineProperty(obj, "name", {
        get: function() {
            return this.name.toUpperCase()
        },
        set: function(value) {
            this.name = value
        },
        configurable: false
    })

    // computed props
    var suffix  = " name"
    var person = {
        ["first" + suffix]: "Sergey"
    }

    // add getter/setter to object
    function convert(obj) {
        Object.keys(obj).forEach(key => {
            let internalVal = obj[key]
            Object.defineProperty(obj, key, {
                get() {
                    console.log(`getting key "${key}": ${internalValue}`)
                    return internalVal
                },
                set(newValue) {
                    console.log(`setting key "${key}" to: ${newValue}`)
                    internalValue = newValue
                }
            })
        })
    }

    // remove "val" by targeting its "key"
    delete obj.key
    delete obj.method

    // internal methods for objs
    Object.getPrototypeOf(target) // determine obj that provides inherited props for this obj
    Object.setPrototypeOf(target,proto) // associate obj with another obj that provides inherited props
    Object.getOwnPropertyNames(target) // get array of all properties
    Object.preventExtensions(obj)  // prevent new props from assigne to the obj, throw exeption
    Object.seal(obj)  // prevent extention, make props non-configurable, vals of present props can be changed
    Object.freeze(obj) // prevent extention, make every prop read only and non-configurable
    
    // internal methods for func objs
    Object.call()   // execute code associated with this obj, args are "this" and list of args passed to func
    Object.construct()  // creates an obj, invoked via "new" or "super" operators
        // first arg is a list of args, second arg is an obj to which "new" operator was initially applied
        // obj that implement this method are called constructors

    // duplicating objs
    var newObj = JSON.parse(JSON.stringify( someObj ))   // deep copy
    var newObj = Object.assign({}, ids) // shallow copy, (target, source_1, source_2...), inherited props ignored 

    // mixing objs props and methods, shallow copy, receiver - supplier - supplier - ...
    function EventTarget() { }
    EventTarget.prototype = {
        constructor: EventTarget,
        emit: function() { },
        on: function() { }
    }
    var myObject = {}
    Object.assign(myObject, EventTarget.prototype, thirdObjIfNeeded)
    myObject.emit()

    // property enumeration, numeric keys in ascending, string keys in the order in which they were added
    var obj = { b: 1, a: 1, 1: 1, 0: 1 }
    Object.getOwnPropertyNames(obj).join("")   // 01ba

    // iterate over object, unspecified enumeration order, also in prototype chain
    for (let key in obj)
        if (obj.hasOwnProperty(key)) // "key" will show all keys, "obj[key]" all values, including proto chain
    Object.entries(obj)     // => arr of enumerable prop [key, value] pairs, not including proto chain
    Object.keys(obj)        // => arr of keys, unspecified enumeration order, not including proto chain
    Object.values(obj)      // => arr of vals, unspecified enumeration order, not including proto chain
    }
constructorCall => {
    // func with constructor call use "new" in order to construct an obj
    // arbitrary labeled obj will be created, "Person.prototype" will point to that obj
    // "obj.constructor" will point back to "Person"
    function Person(name, last) {
        this.name = name
        Object.defineProperty(this, "last", {
            get: function() { return last },
            set: function(newLast) { last = newLast },
            enumerable: true,
            configurable: true
        })
        this.method = function() { retutn this.name }  // will be present in each instanse
    }
    // js engine does the following
    function Person() { }
    Person.prototype = Object.create(Object.prototype, {
        constructor: {
            configurable: true,
            enumerable: true,
            value: Person,
            writable: true
        }
    })

    var me = new Person("Sergey", "Melentyev")   // create an object instance
    me instanceof Person    // true
    me.constructor === Person   // points back to constructor func, can be overwritten

    // check whether a func was called with "new" keyword
    function Person(name) {
        if (this instanceof Person) this.name = name                // will not work with .call() or .apply()
        if (typeof new.target !== "undefined") this.name = name     // ES6
        if (typeof new.target === Person) this.name = name          // check specific constructor
        else throw new Error("You must use new with Person.")
    }
    }
prototype => {    
    // func has .prototype prop that is shared among all obj instances
    // func .prototype prop is created with .constructor prop equal to the func itself
    // Object.prototype == top-end of every normal [[Prototype]] chain
    function Person(name) { this.name = name }
    Person.prototype.methodName = function() { this.name }  // method will be shared among instances
    Person.prototype.favs = []                              // ref val, all instances will point to the same array
    Person = {
        prototype: {
            methodName: function() { this.name },
            favs: [],
        }
    }
    var nextPerson = new Person('Sergey');
    nextPerson = {                                          // this pointer inside
        name: "Sergey",
        __proto__: {
            methodName: function() { this.name },
            favs: [],
        }
    }

    // if data accessor prop named "foo" is found higher on the [[Prototype]] chain,
        // and it's NOT writable:false, new prop "foo" is added directly to "obj", resulting in a shadowed prop
    // "foo" is found on the [[Prototype]] chain, but it IS writable:false, error will be thrown,
        // both setting that existing prop as well as creation of shadowed prop on "obj" are disallowed
    // "foo" is found on the [[Prototype]] chain and it's a setter, then the setter will always be called
        // no "foo" will be added to "obj"
    Person.prototype.isPrototypeOf(nextPerson)          // true
    Object.setPrototypeOf(target, supplier)             // change the prototype of any obj

    // "super" is a pointer to the current obj prototype
    var person = { getGreeting() { return "Hello" } }
    var man = { getGreeting() { return super.getGreeting() + ", hi!" } }                                    // ES6
    var man = { getGreeting() { return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!" } }     // ES5
    Object.setPrototypeOf(man, person)

    var obj = {}
    obj.toString()                  // > "[object Object]" method comes from the proto chain
    obj.toString = function() { return "[object Custom]" }  // > "[object Custom]" prop shadowing

    // add build-in object prototypes
    Array.prototype.sum = function() { return this.reduce(function(prev,cur) { return prev + current }) }
    [1,2,3].sum()
    String.prototype.firstUpper = function() { return this.charAt(0).toUpperCase() }
    "ser".firstUpper()

    // enumerate via prototype chain
    for (let i in obj)     // any prop of "obj" that can be reached via chain will be enumerated
    let i = ("key" in obj) // check the entire chain of the obj
    }
inheritance => {
    // prototype chaining or prototypal inheritance
    var obj = {}    // its [[Prototype]] set to Object.prototype

    // inherited methods from Object.prototype
    obj.hasOwnProperty()    // determines if own prop with given name exists
    obj.propertyIsEnumerable()
    obj.isPrototypeOf() // if "obj" is the prototype of another
    obj.valueOf()   // re-define this method if "obj" is intended to be used with operators
    obj.toString()  // string representation of the "obj"

    // object inheritance
    var book = { title: "title" }
    var message = "Book = " + book      // "Book = [object Object]"
    var book = { title: "title", toString: function() { return this.title } }
    var message = "Book = " + book      // "Book = title"
    // "me" inherits from "person" all props and methods, also define own props
    var person = { name: "S", say: function() { return this.name } }
    var me = Object.create(person)     // explicitly specify [[Prototype]]
    var me = Object.create(person, {   // ... and optionally add object property descriptor
        age: { value: 35, configurable: true, enumerable: true, writable: true }
    })

    // constructor inheritance
    function SuperClass(length,width) { this.length = length; this.width = width }
    SuperClass.prototype.getArea = function() { return this.length * this.width }
    function SubClass(size) { this.length = size; this.width = size }
    // this way "SuperClass" constructor is never called
    SubClass.prototype = Object.create(SuperClass.prototype, {
        constructor: {
            configurable: true, enumerable: true, value: SubClass, writable: true
        }
    })
    // this way "SuperClass" constructor is called
    function SuperClass(length,width) { this.length = length; this.width = width }
    SuperClass.prototype.getArea = function() { return this.length * this.width }
    SuperClass.prototype.toString = function() { return " " }
    function SubClass(size) { SuperClass.call(this, size, size) }
    SubClass.prototype = Object.create(SuperClass.prototype, {
        constructor: {
            configurable: true, enumerable: true, value: SubClass, writable: true
        }
    })
    // this way "SuperClass" method is called
    SubClass.prototype.toString = function() {
        var text = SuperClass.prototype.toString.call(this)
        return "add overloading logic here if nessesery"
    }
    }

arrayObject => {
    // inherits from Object, indexes are converted to strs and used as names for retrieving vals
    let items = new Array(2)                        // items.length = 2 items[0] === undefined
    let items = new Array(1, 2)                     // items.length = 2 items[0] === 1
    let items = Array.of(1, 2)                      // combine several vals into array
    let items = Array.from(new Array(5), (x,i) => i*2)      // [ 0, 2, 4, 6, 8 ]
    let items = Array.from({length: 2, 0: 'a', 1: 'b'})     // ["a","b"]
    var makeArray = Array.apply(null, { length: 5 }).map(() => "logic here")
    function makeArray() { return Array.prototype.slice.call(arguments) }
    function makeArray() { let args = Array.from(arguments); return args }

    // mutator methods
    var newLengthNumber = arr.push("")              // add to the end
    var newLengthNumber = arr.unshift("")           // add to the front
    var lastElementValue = arr.pop()                // delete last elem
    var firstElementValue = arr.shift()             // delete first elem
    var removedItem = arr.splice(index, 1)          // remove by index pos, slow operation
    arr.reverse()                                   // reverse an arr in place
    arr.fill(value[, startIndex[, endIndex]])       // fill with static values or with copied refs of passed obj
    arr.sort(function (a, b) { if (a < b) return -1; if (a > b) return 1; return 0 })

    // accessor nonmutator methods
    var arr = oldArr.concat(val1[, val2[, arrN]])   // merge two or more arrs or vals
    arr.includes(searchElem[, fromIndex])           // ES7, return bool
    arr.indexOf(searchElem[, fromIndex])            // returns first index at which elem can be found
    arr.lastIndexOf(searchElem[, fromIndex])
    arr.join([, separator])                         // join all elems of an arr, specify str to separate each pair
    var arr = oldArr.slice([, begin], [, end])      // return shallow copy of a portion of an arr into new array
    var arr = oldArr.flat([depth])                  // flattening nested arrays, 'Infinity' as value can be passed

    // iteration nonmutator methods
    var a = arr.filter((val, i, arr) => {return 'elems that passed the test with predicate'}, this)
    var a = arr.find((val, i, arr) => {return 'first elem that passed the test with predicate or undefined'}, this)
    var i = arr.findIndex((val, i, arr) => {return 'index of first elem that passed the test with predicate or -1'}, this)
    arr.forEach((val, i, arr) => {return 'not chainable, cannot be broke (only exception)'}, this)
    var a = arr.map((val, i, arr) => {return 'result of callback func'}, this)
    var r = arr.reduce((acc, value) => { return value !== null ? acc.push(value) : acc}, [])
    var r = arr.reduceRight((acc, val, i, arr) => { return 'no init value could be provided' }, [])
    var b = arr.some((val, i, arr) => {return 'true if callback returns truthy val for any element, or false'}, this)
    
    // remove all negative vals and split odds into an even number and 1
    let a = [5, 4, -3, 20, 17, -33, -4, 18]     // => [4, 1, 4, 20, 16, 1, 18]
    a.flatMap(n =>
      (n < 0) ? [] :
      (n % 2 == 0) ? [n] : [n-1, 1]
    )

    // copy and passing as argument
    var shallowCopy = arrName.slice()
    var shallowCopy = Array.from(Object.create(arrName))
    var deepCopy = JSON.parse(JSON.stringify(arrName))
    func(array)                                         // passing array by reference
    func(array.slice())                                 // passing array by value
    var colors = ["red","green"]; var [...clonedColors] = colors;  // copy vals

    // iteration over array
    for (let i in arr) {}     // iterate over array index, not values
    for (let i of arr) {}     // calls next() on an iterable each time the loop executes
    var iterator = arr[Symbol.iterator]()   // iterator.next() => "{ value: 1, done: false }"
    }
arrayBuffer => {
    // typed array, allow storage and manipulation of eight different numeric types
    Signed 8-bit integer (int8), Unsigned 8-bit integer (uint8)
    Signed 16-bit integer (int16), Unsigned 16-bit integer (uint16)
    Signed 32-bit integer (int32), Unsigned 32-bit integer (uint32)
    32-bit float (float32), 64-bit float (float64)

    // array buffer represent memory location
    let buffer = new ArrayBuffer(10)       // allocate 10 bytes (8 bits X 10)
    let size = buffer.byteLength           // return 10 bytes
    let buffer2 = buffer.slice(4, 6)       // return 2 bytes
    let view = new DataView(buffer)        // 'view' obj has access to all 10 bytes
    let view2 = new DataView(buffer, 5, 2) // access to bytes 5 and 6
    view.byteLength view.byteOffset       // 10 0

    let buffer = new ArrayBuffer(2)
    let view = new DataView(buffer)
    view.getInt8(byteOffset, littleEndian)      // read an int8 starting at byteOffset
    view.setInt8(byteOffset, value, littleEndian)   // write an int8 starting at byteOffset
    view.getUint8(byteOffset, littleEndian)     // read an uint8 starting at byteOffset
    view.setUint8(byteOffset, value, littleEndian)  // write an uint8 starting at byteOffset

    // constructors
    name            Size (bytes)
    Int8Array           1
    Uint8Array          1
    Uint8ClampedArray   1
    Int16Array          2
    Uint16Array         2
    Int32Array          4
    Uint32Array         4
    Float32Array        4
    Float64Array        8
    let init = new Int8Array(5)    //  pass number to constructor = number of elems, not bytes
    let buffer = new ArrayBuffer(5) let init = new Int8Array(buffer)
    init.BYTES_PER_ELEMENT     // 1 byte each element
    }
sharedArrayBuffer => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
    Atomics.add()
    }
map => {
    // holds key-value pairs, keys can be any val (checks with Object.is()), func, obj, or primitive
    new Map([iterable])
    var map = new Map([["name", "Sergey"], ["age", 35]])   // map initialization

    myMap.size              // => number of key/val pairs in map obj
    myMap.set(key, val)     // => add or update
    myMap.get(key)          // => specified element or undefined if not present
    myMap.has(key)          // => boolean, whether elem with specified key exist or not

    myMap.clear()           // remove all key/val pairs
    myMap.delete(key)       // remove specified elem, return boolean if element is exist or not
    
    myMap.keys()            // => new Iterator obj that contain keys for each elem in insertion order
    myMap.values()          // => new Iterator obj that contain vals for each elem in insertion order
    myMap.entries()         // => new Iterator obj that contain key/val for each elem in insertion order

    // iterate
    for (var [key, val] of myMap) {}
    for (var [key, val] of myMap.entries()) {}
    for (var key of myMap.keys()) {}
    for (var key of myMap.values()) {}
    myMap.forEach(function(val,key,map){}[, this])  // execute callback once per each key/val, => undefined

    // weakmap does`t put strong reference on obj, does`t prevent garbage collection
    // every key must be a reference type
    var Person = (function() {
        let privateData = new WeakMap()
        function Person(name) {
            privateData.set(this, { name: name })
        }
        Person.prototype.getName = function() {
            return privateData.get(this).name
        };
        return Person
    }())
    }
set => {
    // set is an ordered collection of unique items (checks with Object.is()), cannot be directly accessed by index
    new Set([iterable])
    var set = new Set([1, 2, 3, 4, 5, 5, 5, 5])     // from arr to set
    var array = [...set]                            // from set to arr with spread operator
    function eliminateDuplicates(items) { return [...new Set(items)] }

    mySet.size              // => number of elems
    mySet.add(val)          // appends to the end
    mySet.has(val)          // => boolean, whether elem with specified val exist or not
    
    mySet.clear()           // removes all, => undefined
    mySet.delete(value)     // removes specified elem, => boolen if element is exist or not

    mySet.values()          // => new Iterator obj that contain vals for each elem in insertion order
    mySet.entries()         // => new Iterator obj that contain an array of [val, val] for each element in insertion order

    // iterate
    for (let item of mySet) {}
    for (let item of mySet.keys()) {}
    for (let [key, value] of mySet.entries()) {}

    mySet.forEach(function(val,key,set){}[, this])  // execute callback once per each val, => undefined

    // weak set, only store weak obj ref and CANNOT store primitive vals
    // weak ref does`t prevent garbage collection
    let set = new WeakSet()    // not iterable, cannot be used in for-of loop and forEach()
    }

loops => {
    // for-of loop over iterable data, can be used with break and continue
    const iterable = ['a', 'b']
    for (const x of iterable) console.log(x)
    // with destructuring
    const map = new Map().set(false, "no").set(true, "yes")
    for (const [k,v] of map) console.log(`key = ${k}, value = ${v}`)

    // using iterators’ contents in arrs
    for (const [index, element] of ['a', 'b'].entries()) console.log(index, element)
    }
destructuring => {
    // function parameters
    var regularPerson = { firstname: "Bill" }
    var lordify = ({firstname}) => { console.log(`${firstname} of Canterbury`) }
    lordify(regularPerson)

    // object
    // there is a pattern on the left handside, describes what values we are expecting to get from func call
    const [
        {
            name: firstName,
            email: firstEmail = 'name@name.com',
        },
        {
            name: secondName,
            email: secondEmail = 'name@name.com',
            ...moreData,                        // separate object with all the rest props copied
        },
    ] = getSomeData();

    var person = { admin: { name: "name" } }    // nested object
    var { admin: { name }} = person
    const obj = {a: [{ foo: 123, bar: "abc" }, {}], b: true }
    const { a: [{foo: f}] } = obj       // f = 123

    // array
    var colors = ["red", "green", "blue"]
    var [firstColor, secondColor ] = colors
    var [,,thirdColor] = colors
    var [firstColor, secondColor = "white"] = colors
    var [x,...y] = "abc"    // rest operator x='a'; y=['b', 'c']
    const items = [ ["foo", 3], ["bar", 9] ]
    items.forEach(([word, count]) => console.log(word+' '+count))
    const items = [{ word:'foo', count:3 }, { word:'bar', count:9 }]
    items.forEach(({word, count}) => console.log(word+' '+count))
    }
restOperator => {
    // use instead of arguments inside function declaration
    function foo (...arrContainerForAllPassedArgs) { ... }
    }
spreadOperator => {
    // array
    var nums = [1,2]; var chars = ["a", "b"]
    console.log(...nums)       // the same as console.log(arr[0] + " " + arr[1])
    function nameless() { return [1,2] }
    var num = [0, ...nameless()]       // array concatenation
    var concat = [...nums, ...chars]

    // object
    var obj1 = { foo: 'bar', x: 42 }; var obj2 = { foo: 'baz', y: 13 }
    var clonedObj = { ...obj1 }    // Object { foo: "bar", x: 42 }
    var mergedObj = { ...obj1, ...obj2 }   // Object { foo: "baz", x: 42, y: 13 }
    }
json => {
    JSON.parse(text[, reviver])                 // parse JSON string, construct JS value
    JSON.stringify(value[, replacer[, space]])  // convert JS value to JSON string
    }

iterator => {
    // Symbol.iterator symbol specifies a func that returns an iterator for arrs, sets, and maps
    let values = [1, 2, 3]
    let iterator = values[Symbol.iterator]()   // iterator.next() => "{ value: 1, done: false }"
    // manual realization
    const createFlow = array => {
        let i = 0;
        return () => {
            const nextValue = array[i];
            i += 1;
            return {
                value: nextValue,
                done: array.length <= i ? true : false,
            };
        };
    }

    // for-of loop
    let values = [1, 2, 3]     // calls next() on an iterable each time the loop executes
    for (let num of values)

    // default collection iterators
    let anyCollection = [1, 2, 3]
    for (let entry of anyCollection.entries()) // returns an iterator whose values are a key-value pair
    for (let entry of anyCollection.values()) // returns an iterator whose vals are vals of the collection
    for (let entry of anyCollection.keys()) // returns an iterator whose vals are keys contained in the collection

    // nodeList iterator calls next() on an iterable
    var divs = document.getElementsByTagName("div")
    for (let div of divs) console.log(div.id)
    }
generator => {
    // core synchronous consept 
    function *createFlow() {
        const num = 10;
        const newNum = yield num;
        yield 5 + newNum;
    }
    const returnNextElement = createFlow();
    const elemOne = returnNextElement.next();   // 10
    const elemTwo = returnNextElement.next(2);  // 7

    // core async consept
    function *createFlow() {
        const data = yield fetch('url');
        console.log(data);
    }
    const returnNextElement = createFlow();
    const futureData = returnNextElement.next();
    futureData.then(data => returnNextElement.next(data), err => console.log(err));

    // suspend execution while retaining context
    function ajax(endPoint) {
        fetch(endPoint)
            .then(res => res.json())
            .then(data => apiGen.next(data))
    }
    function *userRepo(user, repoNumber) {
        let userData = yield ajax(`https://api.github.com/users/${user}`)
        let repos = yield ajax(userData.repos_url)
        console.log(repos[repoNumber].name)
    }
    let apiGen = userRepo("sergeyMelentyev", 1)
    apiGen.next()

    // input and output
    function *foo(x,y) { return x * y }
    var iterator = foo(2,3) // generator func call produces iterator, no code execution
    var result = iterator.next()    // { value: 6, done: true }
    
    // message in
    function *foo(x) { var y = x * (yield); return y }
    var iterator = foo(2)   // produce iterator, no code execution
    iterator.next() // pause at y = 2 * (yield) and request value for yield expression
    var result = iterator.next(3)   // { value: 6, done: true }
    
    // message out
    function *foo(x) { var y = x * (yield "data"); return y }
    var iterator = foo(2)   // produce iterator, no code execution
    var result = iterator.next()    // { value: "data", done: false }
    result = iterator.next(3)   // { value: 6, done: true }

    // generator function
    function *createIterator(items) {
        for (let i = 0; i < items.length; i++) yield items[i]
    }
    let iterator = createIterator([1, 2, 3])   // iterator.next() => "{ value: 1, done: false }"

    // generator function expression
    let createIterator = function *(items) {
        for (let i = 0 i < items.length i++) yield items[i]
    }
    let iterator = createIterator([1, 2, 3])   // iterator.next() => "{ value: 1, done: false }"

    // generator object method
    var o = {
        *createIterator(items) {
            for (let i = 0 i < items.length i++) yield items[i]
        }
    }
    let iterator = o.createIterator([1, 2, 3]) // iterator.next() => "{ value: 1, done: false }"

    // iterable object
    let collection = {
        items: [],
        *[Symbol.iterator]() { for (let item of this.items) yield item }
    }
    collection.items.push(1); for (let x of collection)  // 1, 2, 3   

    // combined genarators
    function *firstIterator() { yield 1; yield 2 }
    function *secondIterator() { yield "red"; yield "green" }
    function *combinedIterator() { yield *firstIterator(); yield *secondIterator(); yield true }
    var iterator = combinedIterator()
    iterator.next()     // { value: 1, done: false }
    iterator.next()     // { value: 2, done: false }
    iterator.next()     // { value: "red", done: false }
    iterator.next()     // { value: "green", done: false }
    iterator.next()     // { value: true, done: false }
    }
promise => {
    // will return object immediately
        // property "value" will be used for storing respose data
        // hidden property "onFulfillment" array that all will be triggered as soon as "value" gets updated
        // returnedPromiseObj.then will push functions onto "onFulfillment" array
    // states: pending, fulfilled, rejected, immutable once resolved
    const getFakeMembers = count => new Promise((resolve, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`
        const request = new XMLHttpRequest()
        request.open("GET", api)
        request.onload = () => (request.status === 200) ?
            resolve(JSON.parse(request.response).results) :
            reject(Error(request.statusText))
        request.onerror = (err) => reject(err)
        request.send()
    })
    getFakeMembers(5).then(
        members => console.log(members),
        err => console.error(new Error("cannot load members from randomuser.me"))
    )

    // error handling, always use "throw Error(val)" error obj
    Promise.reject(Error('bad news'))
        .then(function step2() { console.log('This is never run') })
        .then(function step3() { console.log('This is also never run') })
        .catch(function (error) { console.log('Something failed along the way')
    })

    var p = new Promise(function(resolve, reject) {
        foo.bar()                           // not defined, error is thrown
        resolve(42)                         // never gets here
    }).then(
        function fulfilled() { console.log('This is never run')},
        function rejected(err) { console.log('This will work')})

    // method .resolve()
    let promise = Promise.resolve(35)       // accept arg and return promise in the fulfilled state
    promise.then(val => console.log(val))   // async operation

    // returning promise in chain
    let p1 = new Promise(function(resolve, reject) { resolve(35) })
    let p2 = new Promise(function(resolve, reject) { resolve(36) })
    p1.then(function(value) {
        console.log(value)                  // 35
        return p2
    }).then(function(value) {
        console.log(value)                  // 36
    })

    // method .all() resolves only when every promise in the iterable is resolved
    let p1 = new Promise (function (resolve, reject) { resolve(34) })
    let p2 = new Promise (function (resolve, reject) { resolve(35) })
    let p3 = new Promise (function (resolve, reject) { resolve(36) })
    let p4 = Promise.all([p1, p2, p3])                  // iterable argument of promises to monitor
    p4.then(arrOfVals => console.log(arrOfVals[0]))     // vals are stored in order promises were passed


    // methods .race(), resolves as soon as any first promise is resolved, not longer the 3000ms
    let p1 = Promise.resolve(42)
    let p2 = new Promise (function(resolve, reject) { resolve(43) })
    let p3 = new Promise (function(resolve, reject) { resolve(44) })
    let p0 = new Promise (function(_,reject) {
        setTimeout(function() {
            reject("Timeout, reject all")
        }, 3000)
    })
    let p4 = Promise.race([p1, p2, p3, p0])             // result ignores the other promises
        .then(
            successFuncName,
            errorFunctionName
        )

    // execute arr of promises sequentially
    function executeSequentially(promiseFactories) {
      var result = Promise.resolve();
      promiseFactories.forEach(function (promiseFactory) {
        result = result.then(promiseFactory);
      });
      return result;
    }

    // parallel execution
    var accounts = ['Checking Account', 'Travel Rewards Card', 'Big Box Retail Card']
    accounts
        .forEach(account => fetch(account)
            .then(balance => console.log(account + ' Balance: ' + balance)))

    var requests = accounts.map(account => fetch(account))    
    Promise.all(requests)
        .then(balances => console.log('All ' + balances.length + ' balances are up to date'))
        .catch(error => console.log(error))
    }
asyncAwait => {
    // subset of Generators, works only with Promises

    // core consept
    async function createFlow() {
        console.log('Me first');
        const data = await fetch('url');
        console.log(`Me third with data: ${data}`);
    }
    createFlow();
    console.log('Me second');

    async function getRepo(name) {
        let response = await fetch(`https://api.github.com/users/${user}`);
        let data = await response.json();
        return data;
    }
    var promise = getRepo().then(...);

    // parallel fetch
    const fetchAll = async (payload) => {
      const [schedules, weekSchedules, holidays] = await Promise.all([
      fetchSchedules(payload.scheduleService),
      fetchWeekSchedules(payload.scheduleService),
      fetchHolidays(payload.scheduleService),
    ]);
    return { holidays, schedules, weekSchedules };
    }

    // iterate over async data
    for await (let data of fetchURL(['url1', 'url2'])) {
        console.log(data)
    }
    }

class => {
    class Human {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        dataFormatter() {
            return this.name + this.age
        }
        get data(){
            return this.dataFormatter()
        }
        set data(name){
            this.name = name
        }
        static createRandom() {     // attached directly to class, don`t require instance, cannot be called via instance
            return new Human(`${Math.random()}`)
        }
    }
    class Men extends Human {
        constructor(name, age, id){
            super(name, age)
            this.id = id
        }
        anotherDataFormatter() {
            reurn super.dataFormatter() + "something"
        }
    }
    var person = new Men("S", 35, 123)
    }
proxy => {
    // determine behavior whenever the properties of a target object are accessed
    var target = {}; var handler = {}
    var proxy = new Proxy(target, handler)
    proxy.a = 'b'; console.log(target.a)        // <- 'b'

    // get trap
    var target = {}
    var handler = {
      get (target, key) {
        console.info(`Get on property "${key}"`)
        return target[key]
      }
    }
    var proxy = new Proxy(target, handler)
    proxy.a = 'b'
    proxy.a                                     // <- 'Get on property "a"'

    // set trap
    var target = {}
    var handler = {
      get (target, key) {
        invariant(key, 'get')
        return target[key]
      },
      set (target, key, value) {
        invariant(key, 'set')
        return true
      }
    }
    function invariant (key, action) {
      if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
      }
    }
    var proxy = new Proxy(target, handler)
    proxy.a = 'b'; console.log(proxy.a)     // <- 'b'
    proxy._prop                 // <- Error: Invalid attempt to get private "_prop" property
    }

exeption => {
    throw new Error(reason)
    
    throw {
        name: exeptionName,
        message: reason
    }

    try {
        if (!ids) throw new Error("No products ids provided.")
    } catch (err) {
        console.log(err.stack)
    }
    }
module => {
    // multiple named exports
    export const sqrt = Math.sqrt
    export function square(x) { return x * x }
    export function diag(x, y) { return sqrt(square(x) + square(y)) }

    import { square, diag } from "lib"      // import required methods
    import * as lib from "lib"              // import complete module

    // single default export
    export default function () { ··· }      // no semicolon
    import myFunc from "myFunc"
    }
observables => {
    // ES2017
    {   // 
        // 
    }
    }

composition => {
    // apply several function calls in a chain
    const nextCharFromNumberStr = (str) =>
        [str]
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(s => s + 1)
        .map(s => String.fromCharCode(s))
    const result = nextCharFromNumberStr("  64 ")   // => 'A'
    }
webSockets => {
    // client socket.io
    <script src="/socket.io/socket.io.js" />    // get static content from server inside html
    var socket = io.connect("http://localhost", {"forceNew": true})
    socket.io("messages", function(data) { console.log(data) })     // listen to events from server
    socket.emit("anyType", {"payload": "here"})                     // emit events to the server

    // server socket.io
    var express = require("express"); var app = express()
    var server = require("http").Server(app)
    var io = require("socket.io")(server)

    app.use(express.static("app"))                  // serve static content for the client

    var box = new Array("One", "Two")
    io.on("connection", function(socket) {
        socket.emit("messages", box)                // send data to client ones it first connected
        socket.on("anyType", function(data) {       // listen to events from client
            box.push(data)
            io.sockets.emit("messages", box)        // send data to all connected sockets to the server
        })
    })

    server.listen(80)
    }
