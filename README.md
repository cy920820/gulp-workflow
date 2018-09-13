# gulp工作流
> gulp基于node.js流的威力去自动化构建工作流，中间不产生任何多余的文件，减少频繁的I/O操作

针对不同的开发环境进行自动化流式构建

## 项目目录结构

```shell
.
├── README.md
├── config
│   ├── gulp.config.js
│   ├── gulp.dev.js
│   ├── gulp.init.js
│   └── gulp.prod.js
├── gulpfile.js
└── package.json
```

## 开发流程

克隆项目到本地
```
git clone git@github.com:Cui-y/gulp-work.git my-project
cd my-project
```

安装依赖
> 要求node版本: ^6.14.0 || ^8.10.0 || >=9.10.0
```
yarn install
```

初始化项目目录
```
yarn run init
```

本地开发
```
yarn start
```

生产上线
```
yarn build
```

语法检查
```
yarn lint --fix
```

## 协议
MIT
