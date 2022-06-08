/**
 * web开发服务器
 */
import express from 'express'

//声明常量app，值是express方法的调用
const app = express()
//静态资源文件夹
app.use(express.static("./dist"))
const template = `
<html>
<head>
<title>React Fiber</title>
</head>
<body>
<div id="root"></div>
<script src="bundle.js"></srcipt>
</body>
</html>
`

//'*'接收所有get请求
//()=>{}请求处理函数
app.get('*', (req, res) => {
	res.send(template)
})

//监听3000端口
app.listen(3000, () => console.log('sercer is running'))
