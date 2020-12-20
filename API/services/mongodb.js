const MongoClient = require("mongodb").MongoClient;

class mongoObj {
    constructor(){
        MongoClient.connect("mongodb://127.0.0.1", {useUnifiedTopology:true},(mongoErr, mongoRes) => {
            this.db = mongoRes.db("xKargo");
        });
    }
    async getCount( typeCode ){
        let pr = new Promise((resolve, reject) => {
            let collection = this.db.collection("counts");
            
            collection.updateOne(
                {_id:typeCode},
                {$inc:{count:1}}, (err, res) => {

                if ( res ) {
                    collection.find().toArray((find_err, find_res) =>{
                        resolve( find_res[0] );
                    });
                }
                else{
                    resolve( "-");
                }
            });

        });
        return pr;
    }
    async addShipment( data ){
        let pr = new Promise((resolve, reject) => {
            let collection = this.db.collection("createdShipment");

            data["statusCode"] = 0;
            data["statusDescription"] = "Henüz barkod okutulmadı.";

            collection.insertOne( data , (err, res) => {
                if ( res && res.result && res.result.ok == 1 ){
                    resolve( {status:1, msg:"Kayıt Başarılı", barcode:data.barcode} );
                }
                else{
                    resolve( {status:0, msg:"Kaydedilemedi"} );
                }
            }); 
        });
        return pr;
    }

    async saveShipment( data ) {
        let pr = new Promise((resolve, reject) => {
            this.getCount(0).then(shipment=>{
                data["barcode"] = "XK"+shipment.count;
                this.addShipment( data ).then( xx=>{
                    resolve( {xx} );
                });
            }); 
        });
        return pr;
    }
    
  
}



module.exports = mongoObj;