import mongoose,{Document,Schema} from "mongoose";
import bcrypt from "bcryptjs";
import { Roles } from "../constants";

export interface IUser extends Document {
    name : String;
    email: String;
    password: String;
    roles: String[];
    userImage?: String;
    comparePassword: (enteredPassword: string) => boolean;
}

const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    roles:{
        type: [String],
        required:true,
        default: [Roles.Reader],
    },
    userImage:{
        type: String,
        required:false,
    },
})

userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
            next();
        }
    
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password as string, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
        return await bcrypt.compare(enteredPassword, this.password);
};
  
  const User = mongoose.model("User", userSchema);
  
  export default User;