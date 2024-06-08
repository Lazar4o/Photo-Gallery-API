import express from "express";
import dotenv from "dotenv";
import { testDBConnection } from "./utils/testDBConnection.js";
import photoRoutes from "./routes/photos.js";
import { testCloudinary } from "./utils/testCloudinary.js";
import cors from "cors"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

testDBConnection();

testCloudinary();

app.use("/photos", photoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
