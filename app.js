const http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html"})
	fs.readFile("index.html",(err,data)=>{
		if(err){
			res.writeHead(404)
			res.write("Error: File not found")
		}else{
			res.write(data)
		}
		res.end()
	})
})

const port = 3000
server.listen(port,(err)=>{
	if(err)console.log("Server connection failed")
	else console.log("Server connected successfully ")
})
