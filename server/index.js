import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import projectRoutes from "./routes/projects.js";
import userRoutes from "./routes/user.js";
import User from "./models/User.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL = "mongodb+srv://vedansh:vedansh123@cluster0.r2ts0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
    seedAdminUser();
  })
  .catch((error) => console.log(`${error.message}`));

const seedAdminUser = async () => {
  const existingUser = await User.findOne({ username: "admin" });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash("admin123", 12);
    const adminUser = new User({ username: "admin", password: hashedPassword });
    await adminUser.save();
    console.log("Default admin user created");
  } else {
    console.log("Admin user already exists");
  }
};