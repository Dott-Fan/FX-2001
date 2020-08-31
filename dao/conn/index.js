const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')


//数据配置文件
const {host,opts}=require('../../config/db')
//返回是一个promise对象，因为是连接操作，必然有成功和失败，所以是一个promise对象
mongoose.connect(host,opts).catch(err=>{
    // 连接失败日志记录
    // let logpath = path.join(path.dirname(path.dirname(__dirname)),'logs','conn.log')
    // fs.appendFileSync(logpath,'aaaa')

    let logpath = path.join( path.dirname(path.dirname(__dirname)),'logs','conn.log')
    fs.appendFileSync(logpath, err)
})

module.exports = mongoose;