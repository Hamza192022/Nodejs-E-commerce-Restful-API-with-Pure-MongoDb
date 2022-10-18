const express = require("express");
const app = express();
const { ObjectId } = require("mongodb");
app.use(express.json())
const customerRoute=require("./routers/customer_route")
const productRoute=require("./routers/product_route")
const orderRoute=require("./routers/order_route")
const cors = require("cors")


app.use(cors())

app.use(customerRoute)
app.use(productRoute)
app.use(orderRoute)

app.listen(8000,()=>{
    console.log(`running at port 8000`);
})



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://admin:admin@test-cluster.ju59ciy.mongodb.net/test"; 
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// // console.log("Database created!");
//     const bdo = db.db("Talabat");
//     // bdo.createCollection("product",(err,res)=>{
//     //     if (err) throw err;
//     //     console.log("collection created!");
//     //     db.close();
//     // })
//     const mydata = {cust_name :"zeeshan",cust_phone:"+92678678",
//                     cust_email:"zeeshan@gmail.com",cust_address:"gujranwala"}; 
//     bdo.collection("customer").insertOne(mydata,(err,res)=>{
//         if (err) throw err;
//         console.log("inserted dacuments");
//         db.close();
//     })
// });
// const customerconn = require("./db/customer")

// app.post("/customer", async(req,res)=>{
//     console.log(req.body);
//     var data = await  customerconn();
//     data = await data.insertOne(req.body)
//     res.send(data)
//     console.log(data);
// })


// app.get("/customer", async(req,res)=>{
//     let data = await  customerconn();
//     data = await data.find().toArray();
//     res.send(data)
//     console.log(data);
// })

// app.get("/customer/:_id", async(req,res)=>{
//     const {_id} = req.params;
//     console.log(_id);
//     let data = await  customerconn();
//     data = await data.find({_id:ObjectId(_id)}).toArray();
//     res.send(data)
//     console.log(data);
// })

// app.patch("/customer/:_id", async(req,res)=>{
//     const {_id} = req.params;
//     console.log(_id);
//     let data = await  customerconn();
//     data = await data.updateOne({_id:ObjectId(_id)},{
//         $set: {
//             cust_name: req.body.cust_name,
//             cust_phone: req.body.cust_phone,
//             cust_email: req.body.cust_email,
//             cust_address: req.body.cust_address,
//         },
//       });
//     res.send(data)
//     // console.log(data);
// })

// app.delete("/customer/:_id", async(req,res)=>{
//     const {_id} = req.params;
//     console.log(_id);
//     let data = await  customerconn();
//     data = await data.deleteOne({_id:ObjectId(_id)});
//     res.send(data)
//     console.log(data);
// })



