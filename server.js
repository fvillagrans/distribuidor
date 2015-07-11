var port = (process.env.PORT || 5000);

var server = require("socket.io").listen(port);

var objDatos = {
        id: "",
        dato: ""
};

server.sockets.on("connection", function(message){
	message.on("newMessage", function(objDatos){
        	server.sockets.emit("sendEvent", objDatos);
			//console.log(objDatos);
        });
});
