# gulp-workflow

> 特点：  
> 1. 代码优于策略  
> 2. 利用nodejs流，减少频繁的I/O操作,速度快  
> 3. 高质量插件  
> 4. 少量API，上手成本低  

针对不同的开发环境进行自动化流式构建  

## 项目目录结构

```shell
.
├── LICENSE
├── README.md
├── config
│   ├── gulp.config.js
│   ├── gulp.dev.js
│   ├── gulp.init.js
│   └── gulp.prod.js
├── gulpfile.js
├── package.json
└── yarn.lock
```

## 开发流程

克隆项目到本地

```shell
git clone git@github.com:Cui-y/gulp-work.git my-project
cd my-project
```

安装依赖

> 要求node版本:  ^6.14.0  ||  ^8.10.0  ||  >=9.10.0

```shell
yarn install
```

初始化项目目录

```shell
yarn run init
```

本地开发

```shell
yarn start
```

生产上线

```shell
yarn build
```

语法检查

```shell
yarn lint --fix
```

## 协议

MIT
