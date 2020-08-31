//后台登陆控制器
//引入用户模型userModel
const userModel  = require('../dao/model/userModel')
//导入记录日志的模型logModel
const logModel = require('../dao/model/logModel')

module.exports = {
    index(req,res){
        //路由规则匹配后打开登陆界面
        //指定渲染的视图模板
        res.render('admin/login/index')
    },
    //用户登录的验证处理
    async login(req,res){
        let ret = await userModel.userCheck(req.body)
        // console.log(ret);
        if(!ret){
            //ret为空，证明数据库中没有用户信息
            return res.render('admin/login/msg',{msg:'登录信息不正确'})
        }else{
            //用户登录成功。
            //保存用户的登录状态，通过将用户信息写入到session中
            req.session.username = ret.username
            req.session.password = ret.password
            // console.log(req.session)
            //记录登录成功日志功能
            //1， 先定义schema和model进行操作
            //2， 输入的内容只是包括登录名和时间  username， time
            //3,  利用logmodel写入数据到
            let t = new Date()
            let y = t.getFullYear()
            let m = t.getMonth()
            let d = t.getDate()
            let h = t.getHours()
            let minu =t.getMinutes()
            let ntime = `${y}年-${m}月-${d}天--${h}:${minu}`

            await logModel.saveLog({'username':ret.username,'time':ntime})

            //跳转到后台的首页
            //老师用的res.redirect, 而我的现在不好用
            res.redirect('/admin/index')
        }
    },
    isLogin(req,res,next){
        //console.log(req.session.username)
        if(!req.session.username){
            res.render('admin/login/msg', { msg: '请先登录' })
        }else{
            next()
        }
    }
}
