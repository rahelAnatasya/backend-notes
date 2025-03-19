import express from "express";
import cors from "cors";
import noteRoutes from "./routes/note-route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
