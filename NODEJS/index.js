import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.send("welome to backend server")
});
app.get('/books', (req, res)=>{
res.send("Books")
});
app.get('/products', (req, res)=>{
    res.send("Products")
});
app.get('/hello', (req, res)=>{
    res.send("Hello")
});

app.listen(8000, ()=> console.log("Server 8000"))