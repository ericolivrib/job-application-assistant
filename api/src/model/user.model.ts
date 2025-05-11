import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:  String,
    skills: [String],
});

const User = mongoose.model('User', UserSchema);

export { User }
