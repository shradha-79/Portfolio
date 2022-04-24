const express = require('express')
const path = require('path')
const bodyparser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", function (req, res) {
    const comm = req.body.message;
    const na = req.body.name;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shradhabansal123@gmail.com',
            pass: 'wjdbiwbblxnwuzlv'
        }
    });

    var mailOptions = {
        from: 'shradhabansal123@gmail.com',
        to: req.body.username,
        cc: 'shradhabansal123@gmail.com',
        subject: 'Thanks for giving feedback ' + na,
        text: 'Thanks for your message you have sent to us --> ' + comm
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("sent");
            res.redirect("/");
        }
    });
});



app.listen(3000, function () {
    console.log("server started at 3000");
});