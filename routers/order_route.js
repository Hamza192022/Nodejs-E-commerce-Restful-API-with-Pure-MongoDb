
const express = require("express");
const app = express();
const routers = new express.Router()
const { ObjectId } = require("mongodb");
app.use(express.json())

const orderconn = require("../db/order")

routers.post("/order", async(req,res)=>{
    console.log(req.body);
    var data = await  orderconn();
    data = await data.insertOne(req.body)
    res.send(data)
    console.log(data);
})


routers.get("/order", async(req,res)=>{
    let data = await  orderconn();
    data = await data.find().toArray();
    res.send(data)
    console.log(data);
})

routers.get("/order/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  orderconn();
    data = await data.find({_id:ObjectId(_id)}).toArray();
    res.send(data)
    console.log(data);
})

routers.patch("/order/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  orderconn();
    data = await data.updateOne({_id:ObjectId(_id)},{
        $set: {
            cust_name: req.body.cust_name,
            cust_phone: req.body.cust_phone,
            cust_email: req.body.cust_email,
            cust_address: req.body.cust_address,
        },
      });
    res.send(data)
    // console.log(data);
})

routers.delete("/order/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  orderconn();
    data = await data.deleteOne({_id:ObjectId(_id)});
    res.send(data)
    console.log(data);
})

module.exports=routers;
