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

app.listen(4242, () => console.log(`Running on port ${PORT}`));
