const express = require('express');
const mongoose = require('mongoose');
//const router = require('./routes/claim');
const claimRoute = require("./routes/claim");

//import mongoose from "mongoose";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use('/api',claimRoute);



//routes
app.get('/', (req,res) => {
    res.send("Prueba 1")
});

//mongodb Atlas connection
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
    .then(()=> console.log("Connected to mongodb Atlas"))
    .catch((error) => console.error(error));

    /*(async () => {
        try {
          const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          });
          console.log("Mongodb is connected to", db.connection.host);
        } catch (error) {
          console.error(error);
        }
      })();*/

app.listen(port,() => console.log('server listening on port',port));
