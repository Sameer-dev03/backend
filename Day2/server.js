const app = require("express")

server =  app()

server.get("/" , (req,res)=>{
    res.send("This Is Home Page")
})

server.get("/about", (req,res)=>{
    res.send("This Is About page")
})

server.listen(5454)