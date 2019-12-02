// don't use moduleA.js or js/moduleA.js here
require(["moduleC"], function (moduleC) {
    moduleC.init();
})