const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env.local") });

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Anamour Guesthouse API is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

const startServer = async () => {
  if (!mongoUri) {
    console.error("MONGO_URI is missing from server/.env.local");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      console.log("MongoDB Atlas connected");
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas:", error.message);
    process.exit(1);
  }
};

startServer();
