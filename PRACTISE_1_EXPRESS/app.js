const express=require('express');

const app=express();

// app.use((req,res,next) =>{
//   console.log("first dummy middleware",req.url,req.method);
//   next();
// });
// app.use((req,res,next) =>{
//   console.log("first dummy middleware",req.url,req.method);
//   next();
// });
// app.use((req,res,next) =>{
//   console.log("third dummy middleware",req.url,req.method);
//   res.send("<h1>Welcome to complete coding</h1>")
//   next();
// });
app.get("/",(req,res,next) =>{
  console.log("handling / gor get ",req.url,req.method);
  res.send("<h1>Welcome to complete coding</h1>")
  next();
});
app.get("contect-us",(req,res,next) =>{
  console.log("handling  contect_us / gor get ",req.url,req.method);
  res.send(`<h1>Welcome to complete coding</h1> 
    <form action="/contact-us" method="POST">
<input type="text" name="name" placeholder="Enter your name" />
<input type="email" name="email" placeholder="Enter your Email" />
<input type="Submit">
</form>`)
  next();
});
app.post("/contect-us",(req,res,next)=>{
  console.log('handling /contact-us for Post',req.url.req.method);
  res.send(`<h1>will will contect to you sortly</h1>`)
})

const port=3001;
app.listen(port,() => {
  console.log(`server running on address http://localhost:${port}`);
});

