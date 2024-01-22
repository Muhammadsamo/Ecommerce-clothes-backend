import express from "express";
import cors from "cors";
import stripe from "./routes/stripe.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
// app.use(express.static("public"));

app.use("/api/stripe", stripe);
app.get("/", (req, res) =>
  res.send(`<h1>Running on Linux VM on port: ${PORT} </h1>`)
);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
