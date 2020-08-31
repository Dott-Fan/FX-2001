//封装集合的规则,hotSchema

const { Schema } = require('../conn/index')
module.exports = new Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:2
        },
        //海报
        pic:String,
        //热度
        hot:Number,
        //上映时间
        dt:String,
        //演员
        actor:String
    }

)