const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productRoutes = require('./routes/productRoutes')
const reclamationRoutes = require('./routes/reclamationRoutes')
const commentRoutes = require('./routes/commentRoutes')
const repliesRoutes = require('./routes/repliesRoutes')
const answerRoutes = require('./routes/answerRoutes')


const cors = require('cors')



mongoose.connect("mongodb+srv://intissar:Intissar@crud.5chsd.mongodb.net/portal?retryWrites=true&w=majority").then(() => console.log('connected'))
    .catch(e => console.log(e));

app.use(express.json())
app.use(cors())
app.use('/', userRoutes)
app.use('/', adminRoutes)
app.use('/', productRoutes)
app.use('/', reclamationRoutes)
app.use('/', commentRoutes)
app.use('/', repliesRoutes)
app.use('/', answerRoutes)

app.listen(3000, () => console.log("server is running"))
