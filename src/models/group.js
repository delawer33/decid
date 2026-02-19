import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Group = db.define("Group", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: "groups",
  underscored: true,
  timestamps: false,
});

export default Group
