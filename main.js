const express = require('express')
const app = express()
//引入path模块
const path = require('path')
//引入cookie-session
const cookieSession = require('cookie-session')
//引入body-parser模块
const bodyParser = require('body-parser')
app.listen(8080)

//在中间件中注册cookie-session
app.use(cookieSession({
    //指定session在cookie中的标识符名称
    name:'sessionId',
    //salt加密字符串   混淆字符串
    secret:'adkjdljgjldsjgldjgkjgd',
    //有效时间，一般为20分钟
    maxAge:20*60*1000
}))

//静态资源的托管
app.use(express.static('public'))

//post数据接收
app.use(bodyParser.urlencoded({extended:false}))

//配置模板引擎
app.engine('html',require('express-art-template'))
//指定视图模板的路径
app.set('views',path.join(__dirname,'views'))
//指定模板引擎的默认扩展名，之后再render中不用谢扩展名
app.set( 'view engine','html')

//引入后台路由，后台路由有一个前缀/admin
app.use('/admin',require('./routes/admin') )

//404设置
app.use((req,res)=>{
    res.status(404).send('页面找不到了')
})