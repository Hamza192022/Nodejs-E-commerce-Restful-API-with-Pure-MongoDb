var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@test-cluster.ju59ciy.mongodb.net/?retryWrites=true&w=majority"; 
async function orderconn(){
    try{
       return( await MongoClient.connect(url))
            .db("Talabat")
            .collection("order")
            // console.log("show");
    }catch(err){
        console.log("connection error",err);

    }
}
module.exports=orderconn;