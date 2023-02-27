import express from 'express'
import Post from './models/Post.js'

const app = express() //app is a server

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("Hello")
    res.json("hello adi")
})



mongoose.connect('mongodb+srv://joharcoders:Aditya220972@cluster0.4jw13qz.mongodb.net/?retryWrites=true&w=majority');

app.listen(3000);


