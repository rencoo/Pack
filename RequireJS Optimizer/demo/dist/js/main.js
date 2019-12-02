
// define(["require", "exports"], function (require, exports) {
//     exports.a = 5
// });

define('moduleA',[],function () {
    return {
        a: 5
    }
});
// define([
//     'require',
//     'exports'
// ], function(require, exports) {
//     
//     exports.b = 10;
// });

define('moduleB',[],function () {
    return {
        b: 10
    }
});
// define([
//     'require',
//     'exports',
//     'moduleA',
//     'moduleB'
// ], function(require, exports, moduleA, moduleB) {
//     
//     let a = moduleA.a;
//     let b = moduleB.b;

//     function add (x, y) {
//         return x + y;
//     }
    
//     function init () {
//         console.log('app init');
//         console.log('the result is: ' + add(a, b));
//     }

//     exports.init = init;
// });

define('moduleC',[
    'moduleA',
    'moduleB'
], function(moduleA, moduleB) {
    
    let a = moduleA.a;
    let b = moduleB.b;

    function add (x, y) {
        return x + y;
    }

    function init() {
        console.log('app init');
        console.log('the result is: ' + add(a, b));
    }

    return {
        init: init
    }
});
// don't use moduleA.js or js/moduleA.js here
require(["moduleC"], function (moduleC) {
    moduleC.init();
});