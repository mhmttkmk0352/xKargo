const gkm = require("gkm");

let veri = {
    metin:"",
    ciftleme:1,
    bekleme:1,
    timer:""
};



function filtre( karakter ){
    let liste = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (  liste.indexOf( karakter ) > -1   )  {
        return karakter
    }
}

gkm.events.on("key.*", data => {

    if ( veri.bekleme == 1 ) {
        veri.timer = setTimeout(() => {
            veri.bekleme = 1;
            console.log({sussus:veri.metin});
            veri.metin = "";
        },200);

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

 */