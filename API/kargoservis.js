const info = {
    port: 7777
}

const express = require("express");
const app = express();
const mongodb = require("./services/mongodb");
const mongoObj = new mongodb;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("test");
});

let createShipment = {
    "ShipperName": "MISSHA",
    "ShipperAddress": "-23-23-",
    "ShipperCityCode": 6,
    "ConsigneeName": "Mehmet TOKMAK",
    "ConsigneeAddres": "Ergazi Mah. Batı Bulvar  No:1123",
    "ConsigneeMobilePhoneNumber": "5532123812",
    "ConsigneeEMail": "mehmet.tkmk.0352@gmail.com",
    "PaymentType": 0
}

app.get("/createShipment", (req, res) => {
    res.send( JSON.stringify(createShipment, null, '\t') );
});
app.post("/createShipment", ( req , res) => {
   mongoObj.saveShipment( req.body ).then(r=>{
       console.log( {r} );
       res.send( r );
   })
});

app.listen(info.port, () => {
    console.log("Bağlantı Hazır +");
});



