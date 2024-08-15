import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profile: {
        type: String,
    },
    cover: {
        type: String,
    }
}, {
    timestamps: true
})

const Userinfo = mongoose.models.Userinfo || mongoose.model("Userinfo", UserSchema)
export default Userinfo
