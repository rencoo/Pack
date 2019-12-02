({
    // 程序的根路径
    appDir: "../",
    // 脚本的根路径
    // 若appDir值未指定，模块则相对build文件所在目录。
    // 若appDir值已指定，模块根目录baseUrl则相对appDir。
    // 相对于程序的根路径
    baseUrl: "./js",
    // 打包输出到的路径
    dir: "../dist",
    // 在 RequireJS 2.0.2 中，输出目录的所有资源会在 build 前被删除
    // 值为 true 时 rebuild 更快，但某些特殊情景下可能会出现无法预料的异常
    keepBuildDir: false,
    // RequireJS Optimizer 有个很智能的功能, 就是为没有写明 define(...) 函数
    // 的模块代码自动将其放入 define(...) 之中
    // 如果我们指定如下参数, 那么上述的处理将会被取消
    skipModuleInsertion: true,
    // If set to true, any files that were combined into a build layer will be
    // removed from the output folder.
    // 打包输出的文件夹中只留打包后的js、css
    removeCombined: true,
    // 需要打包合并的js模块, 数组形式, 可以有多个
    // name以basrUrl为相对路径, 无需写.js后缀
    // include字段提供了"强制建立依赖关系"的功能, 也就是说, 即使在main.js的代码里
    // 没有依赖 a.js 和 b.js, 它们也会在合并代码的时候插入到 main.js 的前面
    modules: [
        {
            name: "main",
            include: ["a", "b"]
        }
    ],
    // 通过正则以文件名排除文件/文件夹
    // ex 排除 .svn、.git 这类隐藏文件
    fileExclusionRegExp: /^(\.|build|dist|ignore|README)/,
    // onBuildRead 这个参数可以定义一个函数, 在处理每个 js 文件之前,
    // 会先对文件的文本内容进行预处理
    // 比如下面, 就是把 main.js 里打包前的代码全部清除(注释外的代码, 注释自动会清除)
    onBuildRead: function (moduleName, path, contents) {
        if (moduleName === 'main') {
            console.log('hello')
            contents = '/* empty code */';
            // return contents.replace(/foo/g, "bar");
        }
        return contents
    }
})