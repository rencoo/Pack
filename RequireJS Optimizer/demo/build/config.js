({
    appDir: '../',
    baseUrl: './js',
    dir: "../dist",
    keepBuildDir: false,
    // 打包结果优化; 压缩等
    optimize: "none",
    skipModuleInsertion: true,
    removeCombined: true,
    modules: [
        {
            name: "main"
        }
    ],
    fileExclusionRegExp: /^(\.|build|dist|README)/,
})