import express from 'express';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config()

import "./models/user.js";
import "./models/group.js";
import "./models/groupMember.js";
import "./models/decision.js";
import "./models/option.js";
import "./models/vote.js";

async function start() {
  await db.authenticate();
  console.log("DB connected");

  await db.sync({ alter: false });
  console.log("DB synced");
}

start();

const app = express();

app.get('/health', (req, res) => {
  res.json({
    message: 'Welcome to Decid API!', 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

