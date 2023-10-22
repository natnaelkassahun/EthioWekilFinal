const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true,"Please provide unique Username"],
            unique:[true,"User Exist"]
        },
        password: {
            type: String,
            required: [true,"Please provide unique Password"],
            unique: false
        },
        email: {
            type: String,
            required: [true,"Please provide unique email"],
            unique: true
        },
        firstName: { type: String },
        lastName: { type: String},
        mobile: { type: String },
        address: { type: String },
        profile: { type: String },
    }

);

module.exports = mongoose.model.Users || mongoose.model("User", UserSchema)