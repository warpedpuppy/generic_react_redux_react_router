"use strict";
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config');
let counter = 0;

let middleware = (res, req, next) =>{
	// console.log('middleware has been hit')
	next();
}
app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);


app.use(middleware);

app.get("/api", (req, res) => {
	res.json({counter})
})

app.post("/api", (req, res) => {
	counter ++
	res.json({counter})
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 5000, () => console.log('listening. . . .'))