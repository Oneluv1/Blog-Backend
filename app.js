import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const dotenv = require("dotenv");
console.log(process.env);

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:y79GzgRJpj9pZ5lS@cluster0.683k9ys.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Connected to Database and Listen to port 3000"))
  .catch((err) => console.log(err));
//y79GzgRJpj9pZ5lS
