const mongoose = require("mongoose")

const connectDB = async () => {
        mongoose.set('strictQuery',true)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected: ", conn.connection.host)
        return conn
}

module.exports = connectDB