var mongoose = require('mongoose');
//连接数据库，数据库叫做/studentmanagement。如果数据库不存在会自动创建。
mongoose.connect('mongodb://localhost/demo');

//创建一个schema
var studentSchema = {
    "name"     : String,
    "age"     : Number,
    "sex"     : String
};

//创建一个模型（就是一个类）
var Student = mongoose.model("student" , studentSchema);

//new一个实例
var xiaoming = new Student({
    "name"     : "小明",
    "age"     : 12,
    "sex"     : "男"
});

//持久化
xiaoming.save();