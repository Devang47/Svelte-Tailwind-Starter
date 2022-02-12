import express from "express";

const app = express();

app.use(express.static("./frontend/build"));

const PORT = process.env.PORT || 5000;

app.listen(8080, () => console.log("listening on port 8080"));
