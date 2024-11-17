import express from "express";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
const app = express();


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
// app.use("/api/auth/register", (req, res) => {
//     res.send("It works register")
// })
// app.use("/api/auth/login", (req, res) => {
//     res.send("It works")
// })
// app.use("/api/auth/logout", (req, res) => {
//     res.send("It works")
// })
// app.use("/api/posts/", (req, res) => {
//     res.send("It works")
// })
// app.use("/api/posts/", (req, res) => {
//     res.send("It works")
// })
// app.use("/api/posts/12312", (req, res) => {
//     res.send("It works")
// })
app.listen(8800, () => {
    console.log("Server is running!!!!");

})

console.log("test1");

