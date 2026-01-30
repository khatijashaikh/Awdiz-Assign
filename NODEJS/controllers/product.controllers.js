export const CreateProduct =(req, res)=>{
    try{
        return res.send("Product created")
    }
     catch(error){
        console.log(error, "Error in API");
        return res.send(error);
    }
}