const httpServer = require('http');
const fs = require('fs');

const PORT = 3000;

const server = httpServer.createServer((req, res) => {
	const data = fs.readFile('./public');

	
	res.end(data);
});

server.listen(PORT, err => {
	if(err) throw err;
	console.log(`Server listening in port ${PORT}`);
});
