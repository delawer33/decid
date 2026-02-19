import db from "../config/db.js";
import { DataTypes } from "sequelize";


const GroupMember = db.define("GroupMember", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  group_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("owner", "admin", "member", "viewer"),
    allowNull: false,
    defaultValue: "member",
  },
  joined_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "group_members",
  timestamps: false,
  underscored: true,
});

export default GroupMember

