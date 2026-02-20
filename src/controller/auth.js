import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();

import User from '../models/user.js';

export default {
  register: async (req, res) => {
    try {
      const { email, name, password } = req.body;

      if (!email || !password || !name) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const password_hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        email,
        name,
        password_hash,
      });

      const payload = { id: user._id };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);

      return res.status(201).json({ token });

    } catch (err) {
      console.error("Register error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
