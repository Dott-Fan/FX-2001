//封装集合的规则
const { Schema } = require('../conn/index')
module.exports = new Schema(
    {
        username:{
            type:String,
            required:true,
            minlength:2
        },
        time:{
            type:String,
            required:true
        }
    }

)