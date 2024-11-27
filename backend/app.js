const express=require('express');
const app=express();
const dotenv=require('dotenv');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})