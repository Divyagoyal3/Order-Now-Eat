import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { connectDB } from "./config/db.js";
import  connectCloudinary from "./config/cloudinary.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();


// database connection
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
