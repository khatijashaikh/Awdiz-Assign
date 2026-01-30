export const Register = (req, res)=>{
try{
        const { name, email, password, confirmPassword } = req.body
        console.log(name, email, password, confirmPassword);

        if(!name || !email || !password || !confirmPassword){
            return res.send("All data mandatory");
        }
        if (password !== confirmPassword){
            return res.send("Password mismatched")
        }
        return res.send("Registration completed")
    }
    catch(error){
        console.log(error, "Error in API");
        return res.send(error);
    }
}

export const Login =(req, res)=>{
    try{
 return res.send("Login completed")
    }
    catch(error){
        console.log(error, "Error in API");
        return res.send(error);
    }
}