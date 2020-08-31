//定义操作的mongodb数据的model对象，并且返回对象
const logSchema = require('../schema/logSchema')
const { model } = require('../conn/index')

//利用es6语法定义，导出时可以有方法
class LogModel{
    constructor(){
        //类成员的属性
        this.model = model('log', logSchema, 'logs')
    }
    saveLog({username,time}){
        this.model.insertMany({username,time})
    }
}

module.exports = new LogModel