
const path = require('path')
const fs = require('fs')
const model = require('../dao/model/hotModel')

module.exports = {

    //添加热映管理显示界面
    create(req,res){
        res.render('admin/hot/hot')
    },

    //添加热映影片的功能
    async store(req,res){
        //表单中有文件上传选项
        const file = req.file
        //post表单项中的数据
        const data = req.body
        if(!file){
            //用户没有上传图片，使用默认图片
            data.pic = '/uploads/323608cacb33dcca301640514891a8e3.jpg'
            let ret = await model.store(data)
            console.log(ret)
        }else{
            //得到上传文件的扩展名.jpg
            const extname = path.extname(file.originalname)
            //上传成功后的文件路径
            const filepath = file.path
            //上传成功后的文件名称
            const filename = file.filename + extname
            //对文件重命名
            fs.rename(filepath,path.join(path.dirname(filepath),filename), async err =>{
                if(!err){
                    //上传成功，而且文件重命名成功
                    data.pic = '/uploads/'+filename
                    let ret = await model.store(data)
                    console.log(ret)

                }
            })

        }
        res.send('添加数据完成')        
    }

}
