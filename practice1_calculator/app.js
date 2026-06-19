
const http=require('http');
const {requestHandler} =require('./handler');

const server=http.createServer(requestHandler);

const port=3001;
server.listen(port,() => {
  console.log(`server running on the address http://localhost:${port}`);
})