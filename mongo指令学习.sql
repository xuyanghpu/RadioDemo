X: db.infos.aggregate({"$project:{"address":1}},{"$group":{"_id":"$address","count":{"$sum":1}}},{"$sort":{"count":-1}},{"$limit":5});

//查看数据库中所有地址指令总数统计情况
db.infos.aggregate({"$group":{"_id":"$address","count":{"$sum":1}}},{"$sort":{"count":-1}},{"$limit":50});
db.infos.aggregate({"$group":{"_id":"$address","count":{"$sum":1}}},{"$sort":{"_id":1}},{"$limit":50});


//查看数据库中某个地址指令分类总数统计情况
db.infos.aggregate({"$match":{"address":242001}},{"$group":{"_id":"$data.type","count":{"$sum":1}}},{"$sort":{"count":-1}});


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

> db.infos.find({"data.type":"fault_state"},{}).count();
13001
> db.infos.find({"data.type":"fault_state","data.args.flag":true},{}).count();
6495
> db.infos.find({"data.type":"fault_state","data.args.flag":false},{}).count();
6506
> db.infos.find({"address":242001,"data.type":"fault_state","data.args.flag":false},{}).count();
307
//查询某个电台的故障状态的信息
> db.infos.find({"data.type":"fault_state","address":242008,"data.args.flag":false},{}).count();
315
//查询某个电台的故障状态的信息 按照时间排序 
> db.infos.find({"data.type":"fault_state","address":242008,"data.args.flag":false},{"_id":0,"time":1,"data":1}).sort({"time":1});
{ "time" : ISODate("2000-02-02T18:12:30.820Z"), "data" : { "msg" : "report", "type" : "fault_state", "addr" : 241022, "args" : { "flag" : false, "code" : [ 230, 231 ] } } }

//查询某个电台的故障状态的信息-分类
db.infos.aggregate({"$match":{"address":242001}},{"$group":{"_id":"$data.type","count":{"$sum":1}}},{"$sort":{"count":-1}});

//查询本地电台位置信息 按照时间排序
> db.infos.find({"data.type":"local_position","address":242008,"data.args.flag":false},{"_id":0,"time":1,"data":1}).sort({"time":1});
{ "_id" : ObjectId("5d43ebb2e66972299c9d3ce3"), "address" : 242001, "time" : ISODate("2072-07-21T04:18:09.635Z"), "data" : { "msg" : "report", "type" : "fault_s
tate", "addr" : 241020, "args" : { "flag" : false, "code" : [ 229, 234 ] } } }





//查询最大时间
> db.infos.aggregate({"$group":{_id: "max",max_value:{"$max":"$time"}}})
{ "_id" : "max", "max_value" : ISODate("2099-11-27T15:20:53.997Z") }

//查询最小时间
> db.infos.aggregate({"$group":{_id: "min",min_value:{"$min":"$time"}}})
{ "_id" : "min", "min_value" : ISODate("2000-01-31T17:02:29.694Z") }

//查询最小时间和最大时间
> db.infos.aggregate({"$group":{_id: "min",min_value:{"$min":"$time"},max_value:{"$max":"$time"}}})
{ "_id" : "min", "min_value" : ISODate("2000-01-31T17:02:29.694Z"), "max_value": ISODate("2099-11-27T15:20:53.997Z")}


//查询所有的电台本址
>> db.infos.aggregate({"$group":{"_id":"$address","count":{"$sum":1}}},{"$sort":{"_id":1}});
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
