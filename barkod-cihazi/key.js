const gkm = require("gkm");

let veri = {
    metin:"",
    ciftleme:1,
    bekleme:1,
    bekleme_suresi:200
};



function filtre( karakter ){
    let liste = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_","*",",","."];
    if (  liste.indexOf( karakter ) > -1   )  {
        return karakter
    }
}

gkm.events.on("key.*",data => {

    if ( veri.bekleme == 1 ) {
        veri.timer = setTimeout(() => {
            veri.bekleme = 1;
            console.log({sussus:veri.metin});
            veri.metin = "";
        }, veri.bekleme_suresi);

        veri.bekleme = 0;
        
    }


    let karakter = filtre( data[0] );
    if ( karakter ){
        //console.log( {karakter:karakter });
     
        if( veri.ciftleme == 1 ) {
            veri.metin += karakter;
            veri.ciftleme = 0;
        }
        else{
            veri.ciftleme = 1;
        }
    }

});





//N20223051105N20223051105

/*
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
8698934341904
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
N20223051105
8698934341904
8698934341904

 */