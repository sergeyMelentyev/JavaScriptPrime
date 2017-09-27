function basic() {
    (1 + 1, 2 + 2)     // => 4
    void 0     // always evaluates to undefined        
    return  // always use braces on the right or compiler will add ";" after "return" statement
    {
        key: "value"
    }
    x += 1 // instead of x++
        
    // initialization order
    let name = 0, last // will be split into two parts
    // two undefined declarations will be hoisted
    let name = undefined, last = undefined name = 0
    }
function coercion() {
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
function primitiveVal() {
    // primitive vals are stored directly in the variable object
    var a = "a"    // var contains primitive val, val is copied into that var
    var b = a  // each var gets its own copy of data, changes in "a" will not affect "b"

    // identify type
    typeof null        // "object", empty obj pointer
    typeof undefined   // "undefined", always use it instead of "null"
    typeof true        // "boolean"
    typeof 123         // "number"
    typeof "foo"       // "string"
    typeof symbol      // "symbol"

    // false vals
    false null undefined "" 0 NaN
    // any other values are truthy, including all objects

    // number => double-precision 64-bit binary
    // set of all nums, NaN value, positive/negative infinity, positive/negative zero
    NaN === "if failed in number coercion or math operation"
    }
function referenceVal() {
    // reference vals are store as pointer in the variable object
    var obj = new Object()    // assign a pointer to the var
    var a = obj  // get a copy of the pointer to the same obj in mem
    obj = null     // dereference for garbage collection

    function name(x) { x = null }
    let y = []
    name(y)            // ref to arr will be passed, not address of let, that contain ref to arr
    console.log(y)     // => empty array

    // identify type
    typeof ["a"]       // "object"
    typeof {a:1}       // "object"
    typeof funcName     // "function", callable object type
    }
function primitiveWrapper() {
    // new String, new Number, new Boolean are reference type
    var foo = new String("foo")
    typeof foo     // "object" keys = [0,1,2] vals = ['f','o','o']

    var a = "Ser" var c = a.charAt(0) console.log(c) // 'S'
    // behind the scenes
    var a = "Ser" var t = new String(a) var c = t.charAt(0) t = null console.log(c)    // 'S'

    // string => immutable type, represents a single 16-bit unit of UTF-16 text
    String.prototype.yourMethodName = function() { return /* logic here */ }    // add custom methods
    msg.charAt(0)              // get char at given index
    msg.indexOf("a")           // .lastIndexOf("a") find the actual position, return index
    msg.startsWith("a")        // .endsWith("a") .includes("a") search the whole 'msg', return boolean
    msg.split(",")             // split string by commas, return an array
    msg.substr(x,y)            // start index, length
    msg.slice(x,y)             // start index, end index
    msg.trim()                 // delete trailing and ending spaces

    // template literal
    let message = `Multiline
        string`                // indentation is counting in 'message.length'
    let count = 10,             // template literal substitution === string concatenation
        price = 0.25,
        message = `${count} items cost ${(count * price).toFixed(2)}.`
    }
function regExp() {
    var nums = /\d+/g
    var nums = new RegExp("\\d+", "g")
    }
function symbol() {
    // unique and immutable non-String Object property key
    // each symbol val holds an associated val called [[Description]] that is "undefined" or string val
    Symbol.hasInstance // if constructor obj recogniz an obj as one of the constructor instances (instanceof)
    Symbol.iterator    // returns the default iterator for an object (for-of)
    let firstName = Symbol("first name")
    let person = {
        [firstName]: "Sergey"       // computed object literal property
    }

    // global symbol registry, method search global symbol registry for key "uid"
    // if finds, returns the existing. If not, new symbol is created and registered
    let uid = Symbol.for("uid")
    let object = {} object[uid] = "12345"

    // get symbols
    let symbols = Object.getOwnPropertySymbols(person) // array for-of symbols
    Symbol.keyFor(uid)
    }
function compareAndCheck() {
    // regular comparison
    x < y      // return "true", "false" or "undefined" if any operand is NaN
    x == y     // numeric coercion, only for compare numbers with numbers, never with bools
    x === y    // values must be the same type

    undefined === "variable has been declared but has no value for now"
    "undeclared" === "variable has not been declared for now"

    // number
    Number.isInteger(val)      // "true"

    // string
    Number.isNaN(msg.charAt(0))       // check if char at given index is not a number

    // NaN or -0
    Object.is(NaN, NaN)            // true, vals are equivalent if same type and same val
    Object.is("foo", NaN)          // false

    // object
    var href = (window && window.location && window.location.href) || null
    obj instanceof Object  // "true"
    var bool = ("key" in obj)      // check if property is exist, including [[Prototype]] link
    obj.hasOwnProperty("key")      // check if property is exist only in that object
    obj instanceof Foo // in prototype chain of "obj" does "obj" arbitrarily pointed to by Foo.prototype appear
    Foo.prototype.isPrototypeOf(obj) // in the entire prototype chain of "obj", does Foo.prototype ever appear
    objOne.isPrototypeOf(objTwo)
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

function scope() {
    // only lexical scope is present in js 

    // jit compiler at first pass will look for any formal var/func declaration,
        // will go both global and func scope

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

    let foo = "bar"        // will expands to...
    let foo                // var hoisted and declared at the top of the module
    ...                     // no initialization point
    foo = "bar"            // initialization and assignment

    // function declaration
    function name() {}                  // will expands to...
    var name = function name() {}
    var name
    name = undefined
    name = function name() {}

    // engine will remove block-scoping after executing
    var projectEntryData
    { let projectId
        projectId = Math.round(Math.random()*1E4)
        projectEntryData = { id: projectId, description: "description" }
    }
    }
function this() {
    // function form of invocation
    functionName(args)
    // "this" pointer will be set to global obj, will bind to "underfined" in strict mode

    // method form of invocation
    obj.methodName(args) obj["methodName"](args)
    // "this" pointer will be set to "obj", the obj containing the "methodName"

    // constructor form of invocation
    new FunctionName(args)
    // "this" pointer will be set to new obj that will be returned

    // apply form of invocation
    functionName.apply(obj, [arrOfArgs])
    functionName.call(obj, argOne, argTwo)  // call the [[Call]] internal method of a func obj
        // "this" pointer will be explicitly set to "obj"

    // "this" pointer the same as "context" object
    var obj = { name: "Sergey" }
    function foo() { return this.name.toUpperCase() }
    foo.call(obj)
    // the same as passing a contex object
    function foo(context) { return context.name.toUpperCase() }
    foo(obj)

    {   // implicit binding
        function foo() { console.log(this.a) }
        var bar = { a: "bar object", b: foo }
        bar.b()    // "bar object"
    }
    {   // change "this" context with .call() method with func invocation, explicit binding
        // first param = val to which "this" should be equal
        // subsequent params = params that should be passed into the func
        function hello(arg) { console.log(arg + " " + this.name) }
        var person = { name: "Sergey" }
        hello.call(person, "arg");
    }
    {   // change "this" context with .apply() method with func invocation, explicit binding
        // except only two params, "this" and an array- like obj of params to pass to the func
        function hello(args) { console.log(args + " " + this.name) }
        var person = { name: "Sergey" }
        hello.apply(person, ["args"]);
    }
    {   // change "this" context with .bind() method without func invocation, explicit binding
        // first param = val to which "this" should be equal
        // subsequent params = params that should be permanently set in the new func
        function hello(arg) { console.log(arg + " " + this.name) }
        var person = { name: "Sergey" }
        hello.bind(person)
        hello("arg")
        // the same as above but in one line
        hello.bind(person, "arg")
    }
    {   // context optional parameter .forEach() method
        function foo(el) { console.log( el, this.id ) }
        let obj = { id: "awesome" }
        [1, 2, 3].forEach(foo, obj)
    }
    {   // new binding, function constructor call
        // new empty obj is created
        // this new obj is [[Prototype]] linked to another obj
        // pass that obj in as a "this" context
        // return that "this"
        function Foo(a) { this.a = a }
        var baz = new Foo(2)
    }
    }
function func() {
    // first class obj, inherit from Function.prototype
    // member of Object type, may be invoked as a subroutine
    // have internal prop [[Call]], that distinguishes func from obj
    
    function a() {}         // func declaration, hoisted
    var a = function() {}   // func expression, not hoisted, return an instance of func obj that can be invoked
    var a = new Function() {"arg", "return arg"}   // function constuctor call
    (function a() {})()    // func expression, not hoisted

    // after func applied to args (invoked), new environment created
    // it is a dict that maps vars to vals by name
    functionName(args)                     // function form of invocation
    objectName.methodName(args)            // method form of invocation
    objectName["methodName"](args)         // method form of invocation
    new FunctionName(args)                 // constructor form of invocation
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

    // rest param, contains all params passed after "obj", must be only one rest param and it must be last
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

    // destructuring
    var regularPerson = { firstname: "Bill" }
    var lordify = ({firstname}) => { console.log(`${firstname} of Canterbury`) }
    lordify(regularPerson) }
function arrowFunc() {
        // fat arrow (arrow func)
        // no "this" binding, "this" is just a var name, lexical scope rules are applied
        // "this" inhereted from enclosing scope by looking up scope chain
        // don’t have args obj, args remain accessible due to scope chain resolution of args identifier
        // call(), apply(), bind() will not affect "this" binding
        var name = (x) => ++x              // function name(x) { return ++x }
        var name = (x) => { return ++x }  // for multi line body use braces and explicit return
        
        row(3)     // [3,6,9,12,15] fat arrow will bind arguments[0] to passed value "3"
        let row = function () { return mapWith( column => column * arguments[0], [1, 2, 3, 4, 5] ) }
        row(3)     // [1,4,9,16,25] reg func will bind arguments[0] to val from iterable array
        let row = function () { return mapWith(
        function (column) { return column * arguments[0] }, [1, 2, 3, 4, 5] ) } }
function closure() {
        // closure is characteristic of func that allows to access its lexical scope while executing outside of it
        // closures contain free vars that is not bound within the func
        // after "outerOne" func applied to args its vars is not saved on the stack as usual, but in HEAP
            // that is why can be accessed by inner func after its execution
        let letters = (function(){
            const arr = ["a","b","c","d"]
            return function(i) { return arr[i] }
        }())
        letters(0) }
function recursion() {
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
               deepPick(remaining.join("."), object[first]) :
               object[first]
        }
        deepPick("type", dan)                      // "person"
        deepPick("data.info.fullname.first", dan) }

function object() {
    // value may be represented as data (primitive, obj, func obj) or by pair of accessor funcs
    let obj = {
        key: value  // property, part of an obj that associates key (string/symbol) and value
        name: method // func that is val of prop, when called the obj is passed to the func as its "this" val
    }

    // own property
        // property that is directly contained by its object
    // inherited property
        // property of an obj that is not an own property but is a property of the object’s prototype

    // getter and setter
    var obj = {
        get a() { return this._a_ },
        set a(val) { this._a_ = val }
    }

    // create new object
    var obj = {}                   // literal syntax
    var obj = new Object()         // constructed syntax
    var obj = Object.create(null)  // obj with a null prototype, no inherited props
    var obj = Object.create(Foo)   // the same as "new Foo()"

    // create/delete data properties
    let obj = Object.create(Object.prototype)
    // data props
    Object.defineProperty(obj, "key", {
        value: "",                  // default "undefined"
        writable: true,             // default false, read only
        enumerable: true,           // default false, show up in inumeration
        configurable: true          // default false, delete it or change to accessor prop
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
    Object.defineProperties(obj, {
        "keyOne": {
            value: "",
            writable: true
        },
        "keyTwo": {
            value: "",
            writable: true
        }
    })
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
    delete obj.key                 // delete "value" by targeting its 'key' from obj

    // internal methods
    Object.getPrototypeOf(target) // determine obj that provides inherited props for this obj
    Object.setPrototypeOf(target,proto) // associate obj with another obj that provides inherited props
    Object.getOwnPropertyNames(target) // get array of all properties
    
    // internal methods for function objects
    Object.call() // (any, a List of any)→any Executes code associated with this obj.
        // args are "this" val and list containing the args passed to the func by a call expression
    Object.construct() // (a List of any, Object)→Object Creates an obj. Invoked via "new" or "super" operators
        // first arg is a list of args, second arg is an obj to which "new" operator was initially applied
        // obj that implement this method are called constructors
    Object.preventExtensions(obj)  // prevent new props from assigne to the obj, throw exeption
    Object.seal(obj)  // prevent extentions and makes every prop as non-configurable, vals of present props can still be changed
    Object.freeze(obj) // prevent extentions and makes every prop read only and non-configurable

    // computed prop name
    var suffix  = " name"
    var person = {
        ["first" + suffix]: "Sergey"
    }

    // duplicating objects
    var newObj = JSON.parse( JSON.stringify( someObj ) )   // deep copy
    var newObj = Object.assign( {}, someObj )              // shallow copy

    // mixing objs props and methods, shallow copy, receiver - supplier - supplier - ...
    function EventTarget() { }
    EventTarget.prototype = {
        constructor: EventTarget,
        emit: function() { },
        on: function() { }
    }
    var myObject = {} Object.assign(myObject, EventTarget.prototype, thirdObjIfNeeded)
    myObject.emit()

    // property enumeration, numeric keys in ascending, string keys in the order in which they were added
    var obj = { b: 1, a: 1, 1: 1, 0: 1 }
    Object.getOwnPropertyNames(obj).join("")   // 01ba

    // iterate over object, unspecified enumeration order
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // "key" will show all keys, "obj[key]" all values, including proto chain
        }
    }
    Object.keys(obj)   // get array of keys, unspecified enumeration order, not including proto chain

    // destructuring
    var person = { name: "S", age: 35 }
    let {name, age} = person       // let name = "S" let age = 35

    var name = "Tallac" var elevation = 9738
    var print = function() { console.log(`Mt. ${this.name} is ${this.elevation} feet tall`) }
    var funHike = { name, elevation, print }
    funHike.print()     // Mt. Tallac is 9738 feet tall
    }
function constructor() {
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
    var me = new Person("Sergey", "Melentyev")   // create an object instance
    me instanceof Person    // true
    me.constructor === Person   // points back to constructor func, can be overwritten
    }
function prototype() {
    // almost every func has .prototype prop that is shared among all obj instances
    function Person() { }
    Person.prototype.methodName = function() { }
    // instance obj have prop [[Prototype]], a pointer to the prototype obj that instance is using
    var me = new Person()
    var proto = Object.getPrototypeOf(me)
    proto === Person.prototype  // true
    





    // [[Get]] operation in first step check if obj itself has requested prop
    // [[Get]] operation follow [[Prototype]] link of the obj if cannot find requested obj prop directly
    // Object.prototype === top-end of every normal [[Prototype]] chain

    obj.foo = "bar"
    // normal data accessor prop named "foo" is found higher on the [[Prototype]] chain,
        // and it's NOT writable:false, new prop "foo" is added directly to "obj", resulting in a shadowed prop
    // "foo" is found on the [[Prototype]] chain, but it IS writable:false, error will be thrown,
        // both setting of that existing prop as well as creation of shadowed prop on "obj" are disallowed
    // "foo" is found on the [[Prototype]] chain and it's a setter, then the setter will always be called
        // no "foo" will be added to "obj"
    // have to use "Object.defineProperty()" for second and third cases in order to add "foo" to "obj"

    // prototypal inheritance
    function Foo() { }
    let x = new Foo()        // "x" get [[Prototype]] link to the obj that "Foo.prototype" is pointing at
    Object.getPrototypeOf(x) === Foo.prototype   // true

    Object.setPrototypeOf(a, b)        // prototype is b
    let c = Object.create(b)           // prototype is b
    a.getGreeting() b.getGreeting() c.getGreeting()
    Foo.prototype.isPrototypeOf(x)     // in the entire [[Prototype]] chain of "x", does "Foo.prototype" ever appear

    // function with constructor call, use "new" in order to construct an obj
    // arbitrary labeled obj will be created, "Human.prototype" will point to that obj
    // "obj.constructor" will point back to "Human"
    function Human(arg) { this.name = arg }

    // put props directly on arbitrary labeled obj, will be referenced by all objs
    Human.prototype.propName = ""      
    Human.prototype.methodName = function() { return this.name }
    var men = new Human("S")
    var female = new Human("O")
    men.propValue = ""         // put property directly on "men" obj

    // public non-enumerable property ".constructor", extremely unreliable
    Human.prototype.constructor === Human  // true
    men.constructor === Human      // true, "men" does not have that prop, will walk up the
        // prototype chain via private [[Prototype]] link to the arbitrary labeled obj
        // that has ".constructor" prop pointing to the "Human" func
    men.constructor === female.constructor     // true, both points to the "Human" func
    men.__proto__ === Human.prototype      // true, "men" does not have that func,
        // will walk up the prototype chain via private [[Prototype]] link to the arbitrary
        // labeled obj that does not have that func, will walk up to the system
        // arbitrary labeled obj and call that func. It will return internal prototype
        // linkage [[Prototype]] of called obj, in this case "men"

    // enumerate via prototype chain
    for (let i in obj)     // any prop of "obj" that can be reached via chain will be enumerated
    let i = ("key" in obj) // check the entire chain of the obj

    // 
    function Animal(voice) { this.voice = voice || "default" }
    Animal.prototype.teeth = "10"
    Animal.prototype.speak = function () { console.log(this.voice) }

    function Cat(name) {
        Animal.call(this, "not default")   // call "Animal" constructor with args
        this.name = name
    }
    Cat.prototype = Object.create(Animal.prototype)    // assign "Animal" as a prototype for "Cat"
    Cat.prototype.constructor = Cat
    }
function behaviorDelegation() {
    var Foo = {
        init: function(who) { this.me = who },
        identify: function() { return ("I am " + this.me) }
    }
    var Bar = Object.create(Foo)
    Bar.speak = function () { console.log("Hello, " + this.identify() + ".") }
    var bam = Object.create(Bar)
    bam.init("S")
    bam.speak()

    // widget examaple
    var Widget = {
        init: function(width,height) {
            this.width = width || 50
            this.height = height || 50
            this.$elem = null
        },
        insert: function($where) {
            if (this.$elem)
                this.$elem.css({width: this.width+"px", height: this.height+"px"}).appendTo($where)
        }
    }
    var Button = Object.create(Widget)
    Button.setup = function(width, height, label) {
        this.init(width, height)
        this.label = label || "Default"
        this.$elem = $("<button>").text(this.label)
    }
    Button.build = function($where) {
        this.insert($where)
        this.$elem.click(this.onClick.bind(this))
    }
    Button.onClick = function(evt) { console.log(this.label + "' clicked!") }
    $(document).ready(function() {
        var $body = $(document.body)
        var btn1 = Object.create(Button)
        btn1.setup(125, 30, "Hello")
        var btn2 = Object.create(Button)
        btn2.setup(150, 40, "World")
        btn1.build($body)
        btn2.build($body)
    })

    // auth example
    var LoginController = {
        errors: [],
        getUser: function() { return document.getElementById( "login_username" ).value },
        getPassword: function() { return document.getElementById( "login_password" ).value },
        validateEntry: function(user,pw) {
            user = user || this.getUser()
            pw = pw || this.getPassword()
            if (!(user && pw)) return this.failure( "Please enter a username & password!" )
            else if (pw.length < 5) return this.failure( "Password must be 5+ characters!" )
            return true
        },
        showDialog: function(title,msg) { /* display success message to user in dialog */ },
        failure: function(err) { this.errors.push( err ) this.showDialog( "Login invalid: " + err ) }
    }

    var AuthController = Object.create( LoginController )
    AuthController.errors = []
    AuthController.checkAuth = function() {
        var user = this.getUser()
        var pw = this.getPassword()
        if (this.validateEntry(user, pw)) {
            this.server("/check-auth", {
                user: user,
                pw: pw
            }).then(this.accepted.bind(this)).fail(this.rejected.bind(this))
        }
    }
    AuthController.server = function(url, data) {return $.ajax({url: url, data: data})}
    AuthController.accepted = function() {this.showDialog("Success", "Authenticated!")}
    AuthController.rejected = function(err) {this.failure("Auth Failed: " + err)}
    }
function functionalInheritance() {
    function nameOne(id) {
        return {
            toString: function() { return "nameOne " + id }
        }
    }
    function nameTwo(id) {
        let that = nameOne(id)
        that.test = function(testId) {
            return testId === id
        }
        return that
    }
    }
function classesFreeOriented() {
    function constructor(spec) {
        let 
            {member} = spec,
            {other} = other_constructor(spec),
            method = function() {
                // member, other, method, spec
            }
        return Object.freeze({
            method,
            other
        })
    }
    }

function array() {
    // inherits from Object, indexes are converted to strings and used as names for retrieving vals
    // constructor
    let items = new Array(2)       // items.length = 2 items[0] === undefined
    let items = new Array(1, 2)    // items.length = 2 items[0] === 1
    let items = Array.of(1, 2)     // items.length = 2 items[0] === 1
    function makeArray() { return Array.prototype.slice.call(arguments) }
    function makeArray() { let args = Array.from(arguments) return args }
    
    // passing array as arg
    func(array)                // passing array by reference
    func(array.slice())        // passing array by value

    // removing values
    let arr = ['a','b','c']
    delete arr[1]                      // => ['a',undefined,'c']
    arr.splice(1,1)                    // => ['a','c']    slow operation
    arr.splice(arr.indexOf('a'), 1)    // => ['a','c']    slow operation

    // methods
    arr.push(5)                // add to the end, return value will show new length
    arr.unshift(5)             // add to the front
    arr.pop()                  // remove the last one element
    arr.shift()                // remove the fist one element
    ["a","b","c"].join(" ")    // "a b c" build a string from arr
    var peaks = ["", ""] var [last] = peaks.reverse()    // get last, with side effect
    var peaks = ["", ""] var [last] = [...peaks].reverse() // get last, no side effect

    // MAP - FOREACH - FILTER - EVERY
    var schools = [ "Yorktown", "Washington & Lee", "Wakefield" ]
    var ages = [21,18,42,40]
    function predicate(item, index, array) {}

    var m = schools.map(school => `${school} High`) // no side effect, apply func arg to each elem, from arr of strs to arr of strs
    var f = schools.filter(school => school[0] === "W") // no side effect, predicate must return bool
    var r = ages.reduce( (max, value) => (value > max) ? value : max, 0 )      // reduce array to a single value

    // from array of strings to array of objects
    var m = schools.map(school => ({ name: school }))

    // from array of objects to object, reduce array to a single value
    const colors = [ { id: "1", title: "red", rating: 2 }, { id: "2", title: "blue", rating: 1 } ]
    const r = colors.reduce(
        (hash, {id, title, rating}) => {
            hash[id] = {title, rating}
            return hash
        }, {}
    )

    // from array of same value to an array of distinct values
    const colors = ["red", "red", "green", "blue", "green"]
    const distinctColors = colors.reduce(
        (distinct, color) => 
            (distinct.indexOf(color) !== -1) ? 
                distinct : 
                [...distinct, color],
        []
    )

    // from object to array of objects
    const schools = { "Yorktown": 10, "Washington & Lee": 2, "Wakefield": 5 }
    const schools = Object.keys(schools).map(key => ({ name: key, wins: schools[key] }) )

    arr.forEach(predicateForEach)    // will change initial array, can not break out while iteration
    arr.every(predicateForEach)    // can be break out while iteration

    // iteration over array
    for (let i in arr) {}     // iterate over array index, not values
    for (let i of arr) {}     // calls next() on an iterable each time the loop executes
    let iterator = arr[Symbol.iterator]()   // iterator.next() => "{ value: 1, done: false }"

    // destructuring
    let colors = [ "red", "green", "blue" ]
    let [ firstColor, secondColor ] = colors       // "red", "green"
    let [ , firstColor, secondColor ] = colors }
    function arrayBuffer() {
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
    function sharedArrayBuffer() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
        Atomics.add()
    }
function setAndMap() {
    // set is an ordered collection of unique items, cannot be directly accessed by index
    var set = new Set() set.size()     // accept any iterable obj
    set.add(1) set.has(1) set.clear() set.delete(1)   // add, check, clear all, delete one

    let set = new Set([1, 2, 3, 4, 5, 5, 5, 5])    // from array to set
    let array = [...set]       // from set to array with spread operator
    function eliminateDuplicates(items) { return [...new Set(items)] }

    // array difference
    arrOne.filter( i => { return arrTwo.indexOf(i) === -1 })   // [].filter(predicate)
    Array.prototype.diff = function (a) { return this.filter(i => a.indexOf(i) === -1) }  // [].diff([])

    // iterate over set
    for (let n of set) {}     // for-of iterate over a set

    let set = new Set([1, 2])
    let processor = {
        output(value, key, owner) {
            console.log(value + " " + key + " " + owner)
        },
        process(dataSet) {      // the same as below
            dataSet.forEach(function(value, key, owner) {
                this.output(value, key, owner)
            }, this)
        },
        process(dataSet) {      // the same as above
            dataSet.forEach((value, key, owner) => {
                this.output(value, key, owner)
            })
        }
    }
    processor.process(set)

    // weak set, only store weak obj ref and CANNOT store primitive vals
    // weak ref does`t prevent garbage collection
    let set = new WeakSet()    // not iterable, cannot be used in for-of loop and forEach()

    // map is ordered list of key-value pairs, both can have any type
    var userSkills = new Map()
    userSkills.set(key, ["vals"])      // .get(), .has(), .delete(), .clear(), size()

    let map = new Map([["name", "Sergey"], ["age", 35]])   // map initialization
    let processor = {
        output(value, key, owner) {
            console.log(value + " " + key + " " + owner)
        },
        process(dataSet) {      // the same as below
            dataSet.forEach(function(value, key, owner) {
                this.output(value, key, owner)
            }, this)
        },
        process(dataSet) {      // the same as above
            dataSet.forEach((value, key, owner) => {
                this.output(value, key, owner)
            })
        }
    }
    processor.process(map)

    // weakmap does`t put strong reference on obj, does`t prevent garbage collection
    // every key must be an obj
    let map = new WeakMap()
    let key1 = {},
        key2 = {},
    map = new WeakMap([[key1, "Hello"], [key2, 42]])
    }

function iterator() {
    // default iterator
    let values = [1, 2, 3]
    let iterator = values[Symbol.iterator]()   // iterator.next() => "{ value: 1, done: false }"

    // for-of loop
    let values = [1, 2, 3]     // calls next() on an iterable each time the loop executes
    for (let num of values)

    // generator function
    function *createIterator(items) {
        for (let i = 0 i < items.length i++) yield items[i]
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
        *[Symbol.iterator]() {
            for (let item of this.items) yield item
        }
    }
    collection.items.push(1) collection.items.push(2) collection.items.push(3)
    for (let x of collection)  // 1, 2, 3   

    // default collection iterators
    let anyCollection = [1, 2, 3]
    for (let entry of anyCollection.entries()) // returns an iterator whose values are a key-value pair
    for (let entry of anyCollection.values()) // returns an iterator whose vals are vals of the collection
    for (let entry of anyCollection.keys()) // returns an iterator whose vals are keys contained in the collection

    // nodeList iterator
    var divs = document.getElementsByTagName("div")
    for (let div of divs) console.log(div.id)
    }
function spreadOperator() {
    // array
    var nums = [1,2] var chars = ["a", "b"]
    console.log(...nums)       // the same as console.log(arr[0] + " " + arr[1])
    function nameless() { return [1,2] }
    var num = [0, ...nameless()]       // array concatenation
    var concat = [...nums, ...chars]

    // object
    var obj1 = { foo: 'bar', x: 42 }
    var obj2 = { foo: 'baz', y: 13 }
    var clonedObj = { ...obj1 }    // Object { foo: "bar", x: 42 }
    var mergedObj = { ...obj1, ...obj2 }   // Object { foo: "baz", x: 42, y: 13 }
    }

function promise() {
    // time independent state, async flow control, immutable once resolved
    {   // simple real-world example
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
    }
    {   // simple promise
        let promise = new Promise(function(resolve, reject) {
            // promise body, logic here execute immediately, save result in var and check in next line
            if (condition) resolve(data)
            else reject(err)
        })
        promise.then(function (data) {
            // async data area
        }, function (err) {
            // async error area
        })
    }
    {   // error handling
        var p = new Promise(function(resolve, reject) {
            foo.bar()  // not defined, error is thrown
            resolve(42)    // never gets here
        })
        p.then(
            function fulfilled() {
                // never gets here
            },
            function rejected(err) {
                // this line will work
            })

        // always end promise chain with .catch()
        var p = Promise.resolve(42)
        p.then(function(msg) {
            msg.toLowerCase()  // error
        }.catch(handleErrors))     // only rejection callback
    }
    {   // chained promises with propagation data down the chain
        function getData(data){
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(data)
                }, 1000)
            })
        }
        let x
        function print(data) { console.log(data) return data }
        getData(10)
            .then(print)                // num 10 will be printed and fall down the chain
            .then(function(num) {       // "num" === 10
                x = 1 + num
                return getData(30)
            })
            .then(print)                // num 30 will be printed and fall down the chain
            .then(function(num) {       // "num" === 30
                let y = 1 + num
                return getData("Meaning of life: " + (x + y))
            })
            .then(function(answer) {    // "answer" === "Meaning of life: 42"
                console.log(answer)
            })
    }
    {   // compose arbitrary lenth list of urls and chained call .then()
        const urls = ["urlOne", "urlToo", "urlThree"]
        function getFile(file) {
            return new Promise(function(resolve, reject) {
                fakeAjax(file,resolve)
            })
        }

        urls.map(getFile).reduce(function combine(chain,pr) {
            return chain.then(function() {
                return pr
            }).then(print)
        }, Promise.resolve())
            .then(function(){
                print("complete")
            })

        // the same as abive but without .map() and .reduce()
        Promise.resolve()
            .then(function() {
                return p1
            })
            .then(print)
            .then(function() {
                return p2
            })
            .then(print)
            .then(function() {
                return p3
            })
            .then(print)
    }
    {   // method .resolve()
        let promise = Promise.resolve(35)  // accept arg and return promise in the fulfilled state
        promise.then(function(val) {
            console.log(val)       // async operation
        })
    }
    {   // returning vals in chain
        let p1 = Promise.resolve(35)
        p1.then(function(value) {
            return value + 1
        }).then(function(value) {
            console.log(value)     // 36
        })
    }
    {   // returning promise in chain
        let p1 = new Promise(function(resolve, reject) { resolve(35) })
        let p2 = new Promise(function(resolve, reject) { resolve(36) })
        p1.then(function(value) {
            console.log(value)     // 35
            return p2
        }).then(function(value) {
            console.log(value)     // 36
        })
    }
    {   // method .all(), resolves only when every promise in the iterable is resolved
        let p1 = new Promise (function (resolve, reject) { resolve(34) })
        let p2 = new Promise (function (resolve, reject) { resolve(35) })
        let p3 = new Promise (function (resolve, reject) { resolve(36) })

        let p4 = Promise.all([p1, p2, p3])     // iterable argument of promises to monitor

        p4.then(function (arrOfVals) {
            console.log(arrOfVals[0])      // vals are stored in order promises were passed
        })
    }
    {   // methods .race(), resolves as soon as any first promise is resolved, not longer the 3000ms
        let p1 = Promise.resolve(42)
        let p2 = new Promise (function(resolve, reject) { resolve(43) })
        let p3 = new Promise (function(resolve, reject) { resolve(44) })
        let p0 = new Promise (function(_,reject) {
            setTimeout(function() {
                reject("Timeout, reject all")
            }, 3000)
        })

        let p4 = Promise.race([p1, p2, p3, p0])     // result ignores the other promises
            .then(
                successFuncName,
                errorFunctionName
            )
    }
    }
function generator() {
    {   // yield undefined
        function* gen() {
            console.log("data")
            yield undefined
            console.log("data")
        }
        let it = gen()   // generator func call produces iterator, no code will be executed
        it.next()        // code execution starts, result => "data", code execution suspend
        it.next()        // code execution restarts, result => "data", code execution suspend
    }
    {   // message passing out
        function* gen() {
            yield 1
            yield 2
            yield 3
            return 4       // also return void 0
        }
        let it = gen():
        it.next()        // { value: 1, done: false }
        it.next()        // { value: 2, done: false }
        it.next()        // { value: 3, done: false }
        it.next()        // { value: 4, done: true } or { value: undefined, done: true }
    }
    {   // message passing in
        function coroutine(g) {
            let it = g()
            return function() {
                return it.next.apply(it,arguments)
            }
        }
        let run = coroutine(function* () {
            let x = 1 + (yield)
            let y = 1 + (yield)
            yield (x + y)
        })
        console.log(run())     // { value: undefined, done: false }
        console.log(run(10))   // { value: undefined, done: false }
        console.log(run(30))   // { value: 42, done: false }
        console.log(run())     // { value: undefined, done: true }

        // the same as above
        function fakeAjax(d) {
            setTimeout(function() {
                run(d)
            }, 1000)
        }
        let run = coroutine(function* () {
            let x = 1 + (yield fakeAjax(10))
            let y = 1 + (yield fakeAjax(30))
            let answer = (yield fakeAjax(x+y))     // 42
        })
        run()
    }
    }

function class() {
    {   // simple example
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
        }
        class Men extends Human {
            constructor(name, age, id){
                super(name, age)
                this.id = id
            }
        }
        var person = new Men("S", 35, 123)
    }
    {   // dependency tracking
        window.Dep = class Dep {
            constructor() {
                this.subscribers = new Set()
            }
            depend() {
                if (activeUpdate) {
                    this.subscribers.add(activeUpdate)
                }
            }
            notify() {
                this.subscribers.forEach(sub => sub())
            }
        }
        let activeUpdate
        function autorun(update) {
            //
            function wrappedUpdate() {
                activeUpdate = wrappedUpdate
                update()
                activeUpdate = null
            }
            wrappedUpdate()
        }
        function update() {
            // 
        }
    }
    }

function exeption() {
    throw new Error(reason)
    
    throw {
        name: exeptionName,
        message: reason
    }

    try {
        methodOne()
    } catch (e) {
        mathodTwo(e)
    }
    }
function module() {
    // must work with http2.0 protocol
    var name = "S"
    function getAge(){ return 35 }
    export {name, getAge}
    export default name    // only one type

    import person from "./modules"
    person.name person.getAge()

    export var name = "S"
    export function getAge(){ return 35 }
    import {name, getAge} from "./module"
    import {name as n, getAge as g} from "./module"


    import * as foo from "./modules"
    }
function observables() {
    // ES2017
    {   // 
        // 
    }
    }
function animeLoop() {
    var box = document.getElementById("box"),
        fpsDisplay = document.getElementById("fpsDisplay"),
        boxPos = 10,
        boxVelocity = 0.08,
        limit = 300,
        lastFrameTimeMs = 0,
        maxFPS = 60,
        delta = 0,
        timestep = 1000 / 60,
        fps = 60,
        framesThisSecond = 0,
        lastFpsUpdate = 0

    function update(stemp) {
        boxPos += boxVelocity * stemp
        if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity
    }
    function draw() {
        box.style.left = boxPos + "px"
        fpsDisplay.textContent = Math.round(fps) + " FPS"
    }
    function panic() {
        delta = 0
    }

    function mainLoop(timestamp) {
        if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
            requestAnimationFrame(mainLoop)
            return
        }
        delta += timestamp - lastFrameTimeMs
        lastFrameTimeMs = timestamp

        if (timestamp > lastFpsUpdate + 1000) {
            fps = 0.25 * framesThisSecond + 0.75 * fps
            lastFpsUpdate = timestamp
            framesThisSecond = 0
        }
        framesThisSecond++

        var numUpdateSteps = 0
        while (delta >= timestep) {
            update(timestep)
            delta -= timestep
            if (++numUpdateSteps >= 240) {
                panic()
                break
            }
        }
        draw()
        requestAnimationFrame(mainLoop)
    }

    requestAnimationFrame(mainLoop)
    }
function patterns() {
    {   // get required key-value from object
        // pass object and get new obj with only required key-value pares
        function pick(obj, ...keys) {
            let result = Object.create(null)
            for (let i = 0, len = keys.length i < len i++)
                result[keys[i]] = obj[keys[i]]
            return result
        }
    }
    {   // copy object and add new prototype
        function replace_proto(object, prototype) {
            var result = Object.create(prototype)
            object.getOwnProperyNames(object).forEach(function (key) {
                Object.defineProperty(result, key, Object.getOwnPropertyDescriptor(object, key))
            })
            return result
        }
    }
    {   // functional patterns
        // composition pattern
        const compose = (a, b) => (c) => a(b(c))
        const cookAndEat = compose(eat, cook)

        // partial application pattern
        const mapWith = (fn) => (array) => map(array, fn)  // apply func to each elem of an arr
        const squareAll = mapWith((n) => n * n)
        squareAll([1, 2, 3])            // [1, 4, 9]

        // "combinator" higher-order pure func that take only func as args and return a func
        const addOne = (number) => number + 1
        const doubleOf = (number) => number * 2
        const doubleOfAddOne = (number) => doubleOf(addOne(number))    // function compose combinator

        const not = (fn) => (x) => !fn(x)
        const something = (x) => x != null
        const nothing = not(something)                                 // function decorator

        // currying
        const userLogs = userName => message => 
            console.log(`${userName} -> ${message}`)
        const log = userLogs("grandpa23")
        getFakeMembers(20).then(        // grandpa23 -> successfully loaded 20 members
            members => log(`successfully loaded ${members.length} members`)
        )
    }
    {   // simple module pattern, ptivate fields
        var foo = (function() {
            var publicAPI = {
                bar: function() {
                    publicAPI.baz()
                },
                baz: function() {
                    console.log("logic")
                }
            }
            return publicAPI
        })()
        foo.bar()          // "logic"

        // ES5 implementation
        var Person = (function() {
            var privateData = {},
                privateId = 0
            function Person(name) {
                Object.defineProperty(this, "_id", {
                    value: privateId++
                })
                privateData[this._id] = {
                    name: name
                }
            }
            Person.prototype.getName = function() {
                return privateData[this._id].name
            }
            return Person
        }())
        // ES6 implementation
        let Person = (function() {
            let privateData = new WeakMap()
            function Person(name) {
                privateData.set(this, {
                    name: name
                })
            }
            Person.prototype.getName = function() {
                return privateData.get(this).name
            }
            return Person
        }())
        // private field and exploit
        function vector() {
            let array = []
            return {
                get: function get(i) {
                    return array[i]        // cure "return array[+i]"
                },
                store: function store(i,v) {
                    array[i] = v           // cure "array[+i] = v"
                },
                append: function append(v) {
                    array.push(v)          // cure "array[array.length] = v"
                }
            }
        }
        let exploit
        const myVector = vector()
        myVector.store("push", function () {
            exploit = this
        })
        myVector.append()      // now "exploit" === "array" and can be manipulated
    }
    }
/* 8.1.1.
