import { model, Schema} from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true},
    email:{ type: String, required: true},
    password: { type: String, required: true},
    phone: { type: Number, default: 97765578},
});

const User = model("User", userSchema)



export default User;