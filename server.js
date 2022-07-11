require('dotenv').config();
const express = require('express');
const db = require("./db");
// const Item = require('./models/itemModel')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const itemRoute = require('./routes/itemRoute')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

app.get("/", (req, res)=>{
    res.send("Server working");
});

app.use('/api/users/', userRoute)
app.use('/api/auth/', authRoute)
app.use('/api/items/', itemRoute)

// app.get('/getitems',(req,res)=>{
//     Item.find({},(err , docs)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })
// });

const port = process.env.PORT || 5000;

app.listen(port, ()=> {`server running on port ${port}`});