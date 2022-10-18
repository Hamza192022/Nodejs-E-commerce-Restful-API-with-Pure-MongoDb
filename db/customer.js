var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@test-cluster.ju59ciy.mongodb.net/?retryWrites=true&w=majority"; 
async function customerconn(){
    try{
       return( await MongoClient.connect(url))
            .db("Talabat")
            .collection("customer","order")
            // console.log("show");
    }catch(err){
        console.log("connection error",err);

    }
}
module.exports=customerconn;