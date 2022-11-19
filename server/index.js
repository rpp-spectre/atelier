const express = require("express");


const app = express();

app.use(express.static("./client/dist"));
app.use(express.json());

// app.get("/", (req,res) =>{
//   res.sendFile()
// });

app.listen(3000);