const express=require("express")
const restaurentData =require("./JSON/restarunt.json")
const locationData= require("./JSON/location.json")
const mealtypeData= require("./JSON/mealtype.json")


const app=express()
const port=8900

app.get("/getAllRestaurants",(req,res)=>{
    res.send(restaurentData)
});

app.get("/getAllLocations",(req,res)=>{
    res.send(locationData)
});

app.get("/getAllMealtype",(req,res)=>{
    res.send(mealtypeData)
});

app.get("/getRestaurantsByLocation/Delhi",(req,res)=>{
    res.send( restaurentData)
});
app.post('/postRestaurants',function(req,res){
    res.send('data posted successfully')
})

app.listen(port,()=>{
    console.log(`Restaurants app listening on port ${port}!`);
})