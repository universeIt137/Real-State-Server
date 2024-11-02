const express = require("express")
const rateLimit = require("express-rate-limit")
const xss = require('xss-clean')
const helmet = require("helmet")
const hpp = require('hpp');
const cors = require("cors")
const mongoSanitize = require('express-mongo-sanitize');
const { default: mongoose } = require("mongoose");
require("dotenv").config();


const app = new express();


// Using rate limit middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
})

app.use(limiter)

// Using helmet for secure http response


// Using xss-clean sanitize for body query params

app.use(xss())

// Using hpp for protect against HTTP Parameter Pollution attacks query req.body params

app.use(hpp())

// Using cors for enabling CORS

app.use(cors())

// Using MongoSanitize for sanitize user input

app.use(mongoSanitize())




app.use(express.urlencoded({ limit: '1000mb' }));
app.use(express.json({ limit: '1000mb' }));

app.set('trust proxy', 'loopback'); // Only trust localhost proxy
app.set('trust proxy', '192.168.0.1'); // Trust specific IP
app.set('trust proxy', 1); // Trust the first proxy

app.get("/", (req, res) => {
    res.send("Server is running");
})

// Database Connect

const db = process.env.DATABASE;

mongoose.connect(db).then((res) => {
    console.log("---Connected to database----");
}).catch((err) => {
    console.log("Error connecting to database", err);
});



// api file import

const routes = require("./src/routes/api");

app.use("/api/v1", routes)





module.exports = app