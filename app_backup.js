var express = require("express");
let mongoose = require('mongoose');
const path = require('path');
const router = express.Router();

var app = express();
var port = 3000;
 
app.use(express.static(__dirname + '/'));
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
    // res.sendFile("Users\KIMSINGH\Learning\shopping-cart-kimi" + '/index.html');
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
})

// app.get("/categories", (req, res) => {
//     const categories = mongoose.connection.collection('categories');
//     console.log("categories : " + categories);
//          categories.find().then(data => {
//             console.log("data,", data);
            
//         //  console.log(obj, "objects");
//          res.send(obj);
//          },(err)=>{
//              console.log("err ", err);
//          });
// });

app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Server listening on port " + port);
 
// app.listen(port, () => {
//  console.log("Server listening on port " + port);
// });