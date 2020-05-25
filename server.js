
const express = require('express');
const session = require('express-session')
const SERVER_PORT=process.env.PORT || 5000
const path=require('path')
const app = express();
var cors = require('cors');
app.set('views', path.join(__dirname, 'views/'));
app.use((req, res, next) => {
    next()
})
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'something very very secret'
  }))
app.use(cors());  
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/api/customers',cors(),(req,res) =>{
    const customers=[
        {id:1,name:'hey1'},
        {id:2,name:'hey2'},
    ];
    res.json(customers);
});
app.get('/',cors(),(req,res) =>{
    res.sendFile(path.join(__dirname,'./file.html'))
});
app.get('/script/file.js',cors(),(req,res) =>{
    res.sendFile(path.join(__dirname,'./file.js'))
});
app.post('/api/add',cors(),function (req, res) {
    console.log("MY");
    console.log(req.body.id);
    console.log(req.body.name)
});

//npm install --save cors
//do npm run dev to start
app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:5000/");
});
//taskkill/f /im node.exe