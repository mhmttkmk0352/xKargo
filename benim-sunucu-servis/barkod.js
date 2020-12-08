process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const io = require('socket.io')(5555);
const request = require("request"); 

io.on("connection", (s) => {
  console.log(io.engine.clientsCount);

	s.on("iadeSorgula", data => {
		
		request("http://misshaturkiye.net/servis/iadesorgula?takipNo="+data.takipNo+"&durumKodu="+data.durumKodu, (error, response, html) => {
			if ( !error && response.statusCode == 200 ){
				s.emit("iadeSorgula",{status:1, html:html});
			}
			else{
				s.emit("iadeSorgula",{status:0, html:""});
			}
		});
	});

});

