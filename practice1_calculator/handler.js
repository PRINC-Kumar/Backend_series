
const requestHandler = (req,res) =>{

  console.log(req.url,req.method);

  if(req.url==='/'){
    res.setHeader('Context_Type','text.html');
      res.write(`
<html>
<head>
<title>Practise Set</title>
</head>
<body>
<h1>Welcome to Calculator</h1>
<a href="/Calculator"> Go to calculator</a>

</body>
</html>`);
 return res.end();
  }
  else if(req.url.toLowerCase()==="/calculator"){
        res.setHeader('Context_Type','text.html');
      res.write(`
<html>
<head>
<title>Practise Set</title>
</head>
<body>

<h1>Here is the Calculator</h1>
<form action="/calculator-result" method="post">

<input type="text" placeholder="First number" name="First"/>
<input type="text" placeholder="Second number" name="Second"/>
<input type="submit" value="sum"/>
</form>

</body>
</html>`);
 return res.end();


  }

res.setHeader('Context_Type','text.html');
res.write(`
<html>
<head>
<title>Practise Set</title>
</head>
<body>
<head>
<h1>Page does not Exist</h1>
<a href="/"> Go to Home </a>

</head>
</body>
</html>`);
 return res.end();
  }
exports.requestHandler=requestHandler;