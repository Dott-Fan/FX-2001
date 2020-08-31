//连接数据库需要的配置文件
module.exports = {
    // 连接数据库地址
    host: 'mongodb://localhost:27017/mydb',
    opts: { useNewUrlParser: true, useUnifiedTopology: true }
}