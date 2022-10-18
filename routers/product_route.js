
const express = require("express");
const app = express();
const routers = new express.Router()
const { ObjectId } = require("mongodb");
app.use(express.json())

const productconn = require("../db/product")

routers.post("/product", async(req,res)=>{
    console.log(req.body);
    var data = await  productconn();
    data = await data.insertOne(req.body)
    res.send(data)
    console.log(data);
})


routers.get("/product", async(req,res)=>{
    let data = await  productconn();
    data = await data.find().toArray();
    res.send(data)
    console.log(data);
})

routers.get("/product/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  productconn();
    data = await data.find({_id:ObjectId(_id)}).toArray();
    res.send(data)
    console.log(data);
})

routers.patch("/product/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  productconn();
    data = await data.updateOne({_id:ObjectId(_id)},{
        $set: {
            product_name: req.body.product_name,
            product_descrip: req.body.product_descrip,
            product_price: req.body.product_price,
            product_color: req.body.product_color,
            product_quantity: req.body.product_quantity,
            product_image: req.body.product_image,
            product_amount: req.body.product_amount
        },
      });
    res.send(data)
    // console.log(data);
})

routers.delete("/product/:_id", async(req,res)=>{
    const {_id} = req.params;
    console.log(_id);
    let data = await  productconn();
    data = await data.deleteOne({_id:ObjectId(_id)});
    res.send(data)
    console.log(data);
})

module.exports=routers;
