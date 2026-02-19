import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Vote = db.define("Vote", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  decision_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  option_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  value: {
    type: DataTypes.JSONB,
  },

}, {
  tableName: "votes",
  underscored: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
});

export default Vote
