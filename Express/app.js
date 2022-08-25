const express = require('express');

const app = express();
const port = 80;

app.get("/", (req, res)=>{ 
    console.log(req);
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, (err)=>{
    console.log(`The application started successfully on port ${port}`);
});