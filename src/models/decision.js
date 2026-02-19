import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Decision = db.define("Decision", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  creator_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  group_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      "draft",
      "open",
      "voting",
      "closed",
      "archived"
    ),
    defaultValue: "draft",
  },

  voting_type: {
    type: DataTypes.ENUM(
      "majority",
      "ranked",
      "weighted",
      "consensus",
      "quorum"
    ),
    allowNull: false,
  },

  voting_settings: {
    type: DataTypes.JSONB,
  },

  deadline: {
    type: DataTypes.DATE,
  },

}, {
  tableName: "decisions",
  underscored: true,
  timestamps: true,
});

export default Decision
