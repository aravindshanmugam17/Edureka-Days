const express =require("express");
const app =express();
const port =8900;

app.get("/",(req,res)=>{
    res.send("Hello World form Express Server!");
});

app.get("/home",(req,res)=>{
    res.send("Hello Page");
});

app.get("/filter",(req,res)=>{
    res.send("Filter Page");
});

app.get("/details",(req,res)=>{
    res.send("Details Page");
});

app.listen(port, () => {
    console.log('Helleworld app listening on port ${port}!');
});