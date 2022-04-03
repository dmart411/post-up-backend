const express = require("express");
const db = require("./databse");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.send('hi');
})

app.post('/', function (req, res) {
    const { username, password, email, firstname, lastname} = req.body;
    try {
        if(username && password && email && firstname && lastname) {
            db.promise().query(`INSERT INTO user (username, email, password, firstname, lastname) VALUES ('${username}', '${email}', '${password}', '${firstname}', '${lastname}')`);
        }
        res.status(201).send('user created');
    } catch(err) {
        res.err(err);
    }
})

app.listen(8000, () => {
    console.log('running')
});