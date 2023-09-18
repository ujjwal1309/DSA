const express = require("express");
const { connection } = require("./config/server");
const { userRouter } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/user",userRouter);

app.listen(4000, async() => {
    try {
        await connection;
        console.log("server is running");
    } catch (error) {
        console.log(error)
    }
});
