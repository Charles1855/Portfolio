import express from "express";
import cors from "cors";
import "dotenv/config";
import contactRouter from "./routes/contact";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT. () => console.log(`API running on port ${PORT}`));
