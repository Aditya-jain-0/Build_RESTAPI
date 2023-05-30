const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected Succesfully"))
.catch((err)=>console.log(err));

app.use(express.json())

const usersRouter = require('./routes/users')

app.use('/users',usersRouter)
//localhost:8000/users/lorem

app.listen(3000,()=>console.log("server Started"))


