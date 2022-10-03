const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(`This is home`)
})
app.get('/about',(req,res)=>{
    res.send(`This is about`)
})
app.get('/contact',(req,res)=>{
    res.send(`This is contact`)
})
app.get('/singin',(req,res)=>{
    res.send(`This is singin`)
})
app.get('/singup',(req,res)=>{
    res.send(`This is singup`)
})
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.listen(3000,()=>{
        console.log(`Server is running at port http://localhost:3000`)
})
