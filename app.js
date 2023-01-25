const express= require("express")
const {prismaclient, PrismaClient} = require('@prisma/client')
const prism= new PrismaClient()
const app = express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"Hola"});

}
)
app.listen(3000,()=>{

    console.log("aplicacion ejecutandose...");
});