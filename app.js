const express= require ("express");
//developing an express application
const app = express();
const PORT = 5500;
app.get("/",(req, res) =>{
    res.send(" Hello world");
});

app.listen(PORT, ()=>{
    console.log (` server is runing on http:localhost:${PORT}`)
});