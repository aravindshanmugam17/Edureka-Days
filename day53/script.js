//Q1.//Q1..Create a simple server using http package and 
//show “hello world” response on localhost:8900

//Q2.Create a server using http package and define three routes namely home,
// filter, details and print different text for each different route.
// Print “page not found”, if route other than home, filter and details is given.

var http= require ('http')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<h1> Hello World </h1>")
        res.end()
    }
    else if( req.url=="/home"){
        res.write("<h1>Home Page</h1>")
        res.end()
    }
    else if( req.url=="/filter"){
        res.write("<h1>Filter Page</h1>")
        res.end()
    }
    else if( req.url=="/details"){
        res.write("<h1> Details Page </h1>")
        res.end()
    }
    else {
        res.write("<h1> Page not found </h1>")
        res.end()
    }
});
server.listen(8900,()=>{
    console.log("server listening at port 8900");
});