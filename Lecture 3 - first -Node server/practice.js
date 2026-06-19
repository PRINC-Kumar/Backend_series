
const http=require('http');
const server=http.createServer((req,res) =>{
  console.log(req.url,req.method);
  if(req.url==='/home'){
    res.write('<h1>Welcome to Home Page </h1>');
    return res.end();
  }
  else if(req.url==='/men'){
    res.write('<h1>Welcome to men page</h1>');
     return res.end();
  }
  res.write(`
<html lang="en">
<head>
<title>Myntra</title>
</head>
<body>
<head>
<nav>
<ul>
<li><a href="/home">home</a></li>
<li><a href="/men">men</a></li>
<li><a href="/Home">Women</a></li>
<li><a href="/Home">Kids</a></li>
<li><a href="/Home">Cart</a></li>
</nav>
</head>
</body>
</html>`);
res.end();
});
server.listen(3001,()=>{
  console.log('server running on address https://localhost:3001');
});