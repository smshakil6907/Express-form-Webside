const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 80;

//EXPRESS RELATED CODE
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG RELATED CODE
app.set('view engine', 'pug');// set the te tempete engine as pug
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the inernet so far so use it wisely"
    const params = {'title': 'pubG is the best game', content: con}
    res.status(200).render('index.pug', params)
});
app.post('/', (req, res)=>{
    name = req.body.gender
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputTowrite = `the name of the clients is ${name}, ${age}, years old ,${gender}, rwsiding at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputTowrite)


    const params = {'message': 'Your form has been submitted succcessfully'}
    res.status(200).render('index.pug', params)
});


//START THE SERVER
app.listen(port, () => {
    console.log(`This application startet succesfully onport ${port}`);
});