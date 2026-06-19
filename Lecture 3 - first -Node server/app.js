
const http=require('http');
function requestListener(req,res){
  console.log(req.url,req.method,req.headers);
  //process.exit();// event loop exit
//res. setHeader('Content-Type', 'json');
if(req.url==='/'){
  res. setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>welcome to home </h1></body>');
res.write('</html>');
return res. end () ;

}
else if(req.url==='/product'){
  res. setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like welcome to product</h1></body>');
res.write('</html>');
res. end () ;
}
res. setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like / Share / Subscribe</h1></body>');
res.write('</html>');
res. end () ;

}
const server=http.createServer(requestListener);
const PORT=3001;

server.listen(PORT,() =>{
  console.log(`server running on address http://localhost: ${PORT}`);
});