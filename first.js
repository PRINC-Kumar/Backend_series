
console.log("kg coding");

const fs= require('fs');
fs.writeFile("output.txt","writing file",(err) =>{
  if(err) console.log("Error occured");
  else console.log("file written sucessfully");

})
