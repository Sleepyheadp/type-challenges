### 1）搭建浏览器开发环境步骤

> 1. 建立好文件夹后，打开 VSCode，把文件夹拉到编辑器当中，然后打开终端，运行`npm init -y`,创建`package.json`文件。
> 2. 生成文件后，我们接着在终端中运行`tsc -init`,生成`tsconfig.json`文件。
> 3. 新建`src`和`build`文件夹，再建一个`index.html`文件。
> 4. 在`src`目录下，新建一个`page.ts`文件，这就是我们要编写的`ts`文件了。
> 5. 配置`tsconfig.json`文件，设置`outDir`和`rootDir`，也就是设置需要编译的文件目录，和编译好的文件目录。`outDir:"./build" `和`rootDir:"./src"`
> 6. 然后编写`index.html`，引入`<script src="./build/page.js"></script>`,当让我们现在还没有`page.js`文件。
> 7. 编写`page.ts`文件，加入一句输出`console.log('hello capoo')`,再在控制台输入`tsc`,就会生成`page.js`文件
> 8. 再到浏览器中查看`index.html`文件，如果按`F12`可以看到`hello capoo`，说明我们的搭建正常了。
```