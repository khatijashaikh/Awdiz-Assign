
import express from "express";
import AllRoutes from "./routes/index.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.get('/', (req, res)=>{
    res.send("welome to backend server")
});

app.use("/api/v1", AllRoutes);



app.listen(8000, ()=> console.log("Server 8000"))