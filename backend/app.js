const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./Routes');

const port =  5454;
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// to handle the incoming requests
app.use('/', routes);


// connnect to MongoDBabcdefgh
mongoose.connect(
    'mongodb+srv://XXXX:YYYYYY@cluster0.spcvd.gcp.mongodb.net/hrm?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(resp => {
    console.log(`Connected to mongoDB !!`);
    app.listen(port, (err) => {
        if (!err) {
            console.log(`Server up and running on port : ${port}`);
        }
    })
})
.catch(err => {
    console.log(err);
})



