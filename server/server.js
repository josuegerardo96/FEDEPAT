require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
const playerRoutes = require('./routes/player')
const imgRoutes = require('./routes/img')
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



//routes
app.use('/api/user',userRoutes)
app.use('/api/player',playerRoutes)
app.use('/api/img',imgRoutes)


app.use(express.static('public'))



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    // listen for requests
    app.listen(process.env.PORT,() => {
    console.log('Connected to db & listeneing on port',process.env.PORT)
    })
        
    })
    .catch((error) => {console.log(error)})


app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
