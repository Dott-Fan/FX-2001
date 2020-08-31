//定义操作的mongodb数据的model对象，并且返回对象
const hotSchema = require('../schema/hotSchema')
const {model} = require('../conn/index')

//利用es6语法定义，导出时可以用方法
class HotModel{
    constructor(){
        //类成员的属性
        this.model = model('Hot', hotSchema, 'hots')
    }
    //添加影片功能
    store(data){
        return this.model.insertMany(data)
    }

}
module.exports = new HotModel