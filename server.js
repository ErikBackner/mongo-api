const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const PORT = 3000;

app.get ("/", (req, res)=> {
    res.send ("welcome to my mongoAPI");
});

app.post ("/blogpost", (req, res) =>{

    res.send ("this is a postrequest");
});

mongoose.connect("mongodb+srv://erikbackner1:54321edith@eriksapi.9d1xz.mongodb.net/products-API?retryWrites=true&w=majority&appName=EriksAPI")
    .then(() => {
        console.log("connected to mongo");
        app.listen(PORT, () =>{
            console.log ("listening to 3000");
        });
    });
