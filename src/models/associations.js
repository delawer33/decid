import User from './user.js'
import Group from './group.js'
import GroupMember from './groupMember.js'
import Decision from './decision.js'
import Vote from './vote.js'
import Option from './option.js'


User.hasMany(Group, { foreignKey: "owner_id" });
Group.belongsTo(User, { foreignKey: "owner_id" });

Group.belongsToMany(User, {
  through: GroupMember,
  foreignKey: "group_id",
});
User.belongsToMany(Group, {
  through: GroupMember,
  foreignKey: "user_id",
});

Decision.belongsTo(User, { foreignKey: "creator_id" });
Decision.belongsTo(Group, { foreignKey: "group_id" });

Option.belongsTo(Decision, { foreignKey: "decision_id" });
Decision.hasMany(Option, { foreignKey: "decision_id" });

Vote.belongsTo(Decision, { foreignKey: "decision_id" });
Vote.belongsTo(Option, { foreignKey: "option_id" });
Vote.belongsTo(User, { foreignKey: "user_id" });
