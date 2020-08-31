//后台路由
const express = require('express')
const router = express.Router()
const userModel= require('../dao/model/userModel')
const loginController = require('../controller/loginCotrol')
const indexController = require('../controller/indexControl')



//定义登录显示的视图， 此时需要建立与html页面的连接
router.get('/login', loginController.index )

//对用户的登录进行判断
router.post('/login',loginController.login)

//用户方翻墙功能
router.use(loginController.isLogin)

//用户后台首页
router.get('/index',indexController.index )

//用户后台主页示例1
router.get('/indexv',indexController.indexv )

//用户后台主页示例2
router.get('/indexv2',indexController.indexv2 )

//添加用户的操作
router.post('/aaa', indexController.addUser)

//用户退出
router.get('/layout', indexController.layout)

module.exports = router;