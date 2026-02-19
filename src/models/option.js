import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Option = db.define("Option", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  decision_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
  },

}, {
  tableName: "options",
  underscored: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
});

export default Option
