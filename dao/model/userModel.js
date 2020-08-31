//定义操作的mongodb数据的model对象，并且返回对象
const userSchema = require('../schema/userSchema')
const {model} = require('../conn/index')

//利用es6语法定义，导出时可以用方法
class UserModel{
    constructor(){
        //类成员的属性
        this.model = model('user', userSchema, 'users')
    }
    userCheck({username,password}){
        //console.log()
        return this.model.findOne({username,password});
        //return this.model.findOne();
        //return this.model.findOne({'password':"admin999"})
    }
    allCheck(){
        return this.model.find()
    }
    addUser({username,password}){
        return this.model.insertMany({username,password})
    }
}



module.exports = new UserModel 