`r.js`是`RequireJS`的一个附产品，支持在 `NodeJS`环境下运行`AMD`程序，并且其包含了一个名为`RequireJS Optimizer`的工具，可以为项目完成合并脚本等优化操作

##### `RequireJS Optimizer`常规用法

写好一个配置文件, 比如 `config.js`，常用属性有：

```javascript
({
    appDir: "xxx",
    baseUrl: "xxx",
    dir: "xxx",
    modules: [
        {
            name: "main"
        }
        ...
    ],
    fileExclusionRegExp: /^\./
})
```

运行`node`命令

```javascript
node r.js -o config.js
```

这时 `RequireJS Optimizer` 就会：

1. 把配置信息的 `modules`下的所有模块建立好完整的依赖关系，再把相应的文件打包合并到 `dir` 目录
2. 把所有的 `css`文件中，使用 `@import` 语法的文件自动打包合并到 `dir`目录
3. 把其他文件赋值到 `dir` 目录，比如图片、附件等

适合老旧传统项目使用的`api`

##### modules[i].include

```javascript
modules: [
	{
		name: "main",
		include: ["a", "b"]
	}
]
```

这里`include`字段提供了"强制建立依赖关系"的功能，也就是说，即使在 `main.js` 的代码里没有依赖 `a.js` 和 `b.js`，它们也会在合并代码的时候插入到 `main.js`的前面，这种打包方式非常适合传统老旧项目