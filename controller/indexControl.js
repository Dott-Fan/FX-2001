//后台首页的控制
const userModel = require('../dao/model/userModel')


module.exports = {
    index(req,res){
        res.render('admin/index')
    },
   async indexv(req,res){
        let userList = await userModel.allCheck()
        //console.log(userList)
        // res.render('admin/index/index_v1',{
        //     userList,
        // })
        res.render('admin/index/table_basic',{
            userList,
        })
    },
    
    indexv2(req,res){
        res.render('admin/index/index_v2')
    },

    welcome(req,res){
        res.render('admin/index/welcome')
    },

    async addUser(req,res){
        //通过方法做添加
        //post传递的数据在req.body中
        //传递数据到
        console.log(req.body)
        let addRes = await userModel.addUser(req.body)
        console.log(addRes)

        res.render('admin/index/index_v2')
    },

    layout(req,res,next){
        //console.log('111')
        //req.session.username = null
        delete req.session.username
        res.redirect('/admin/login')
    }
    
}