// define([
//     'require',
//     'exports',
//     'moduleA',
//     'moduleB'
// ], function(require, exports, moduleA, moduleB) {
//     'use strict';
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

define([
    'moduleA',
    'moduleB'
], function(moduleA, moduleB) {
    'use strict';
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