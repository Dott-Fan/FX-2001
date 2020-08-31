//封装集合的规则
const {Schema } = require('../conn/index')
module.exports = new Schema(
    {
        username:{
            type:String,
            required:true,
            minlength:2
        },
        password:{
            type:String,
            required:true,
            minlength:2,
        }
/*         ,
        nickname:{
            type:String,
        },
        phone:{
            type:String,
        },
        email:{
            type:String,
        },
        hobby:[String],
        introduce:{
            type:String,
        } */
        
    }

)