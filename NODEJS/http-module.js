const http = require("http");

const books =[
    {id: 1, title: "Book 1", author: "Author 1"},
    {id: 2, title: "Book 2", author: "Author 2"},
    {id: 3, title: "Book 3", author: "Author 3"},
];


//http: localhost:8000/books

const server = http.createServer((req, res)=>{
    if(req.method =="GET"){
res.end("Hello")
    }
});


const backendPort= 8000;
server.listen(backendPort, ()=> console.log(`Server on ${backendPort}`))