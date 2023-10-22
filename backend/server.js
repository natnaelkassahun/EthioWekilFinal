const express = require( 'express');
const dotenv = require( 'dotenv');
const { notFound,errorHandler } = require( './middleware/errorMiddleware.js');
dotenv.config();
const port = process.env.PORT || 5001;
const cors = require('cors');
const connectDB = require("./config/db")
const morgan = require('morgan')



//nodemon backend/server.js
//npm install mongoose
//nodemon server.js
//cd backend
//cd frontend
//cd ../


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use(express.urlencoded({extended:true}));
app.use("/public", express.static('public'));

app.use('/items', require("./routes/itemRoutes"))
app.use('/api', require("./routes/userRoutes"))
//app.use('/payment', cors(), require("./routes/payment"))
//app.get('/',(req,res) => res.send('server ready'));
//cd backend
//cd frontend
//node server.js

//nodemon server.js
//npm i formik react-hot-toast


app.use(notFound);

app.use(errorHandler);

connectDB().then(()=>{
    try{
        app.listen(port, console.log("Server is running on port ", port))

    }catch(err) {
        console.log("Can't connect to the server  on port ", port)
    }
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})
    


