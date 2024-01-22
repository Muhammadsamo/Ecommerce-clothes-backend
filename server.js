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

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
app.get("/", (req, res) => app.res(`Running on Linux VM on port: ${PORT}`));
