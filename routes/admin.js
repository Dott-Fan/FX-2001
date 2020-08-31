//后台路由
const express = require('express')
const router = express.Router()

//
const path = require('path')
//文件上传中间件
const multer = require('multer')
//指定文件上传的路径
const uploader = multer({
    dest: path.join(path.dirname(__dirname, 'public','uploads'))
})





const userModel= require('../dao/model/userModel')
const loginController = require('../controller/loginCotrol')
const indexController = require('../controller/indexControl')
const hotController = require('../controller/hotControl')



//定义登录显示的视图， 此时需要建立与html页面的连接
router.get('/login', loginController.index )

//对用户的登录进行判断
router.post('/login',loginController.login)

//用户方翻墙功能
router.use(loginController.isLogin)

//用户后台首页
router.get('/index',indexController.index )

//用户后台欢迎页面
router.get('/welcome', indexController.welcome)

//用户后台主页示例1 ，用户列表页面
router.get('/indexv',indexController.indexv )

//用户后台主页示例2，添加用户页面
router.get('/indexv2',indexController.indexv2 )

//热映管理页面
router.get('/hot/create', hotController.create)

//添加热映影片处理
router.post('/hot/store',uploader.single('pic')  ,hotController.store)

//添加用户的操作
router.post('/aaa', indexController.addUser)

//用户退出
router.get('/layout', indexController.layout)

module.exports = router;