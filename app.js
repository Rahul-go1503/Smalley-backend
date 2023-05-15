const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book-routes");
const blogRoute = require("./routes/blog-routes");
const cors = require("cors");
const app = express();

// Middlewares
if(process.env !== "Production"){
  require("dotenv").config();
}
app.use(express.json());
app.use(cors());
// var i=0;
// const myMiddleware =(req,res,next)=>{
//   console.log(`custom middleware called ${++i} times`)
//   next();
// }
// app.use(myMiddleware);
app.use('/',(req,res)=>{
  res.send('hello!! Im here...')

})
app.use("/books", bookRoute); // localhost:5000/books
// app.use("/blogs", blogRoute); // localhost:5000/books
// frkHFNZZDONtwOOD
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected To Database")) 
  .then(() => {
    app.listen(process.env.port || 5000);
  })
  .catch((err) => console.log(err));
