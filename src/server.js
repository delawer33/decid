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

import authRouter from './routes/auth.js'

async function start_db() {
  await db.authenticate();
  console.log("DB connected");

  await db.sync({ alter: false });
  console.log("DB synced");
}
start_db();

const app = express();
app.use(express.json())
const router = express.Router()
app.use('/api', router)
router.use("/auth", authRouter)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
