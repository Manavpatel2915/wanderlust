const { Sequelize } = require('sequelize');
import UserModel from "../models/usermodel.sql";
import CommentModel from "../models/commentmodel.sql";
import PostModel from "../models/postmodel.sql";
const Databasename = "aribin";
const sequelize = new Sequelize('airbin', 'root', 'MANAVPATEL291', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql',
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`Database connected ${Databasename}`);
    }
    catch (error) {
        console.log(error);
    }
})();
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = UserModel(sequelize);
db.Post = PostModel(sequelize);
db.Comment = CommentModel(sequelize);
// one to many 1user have many post 
db.User.hasMany(db.Post, {
    foreignKey: 'user_id',
});
db.Post.belongsTo(db.User, {
    foreignKey: 'user_id',
});
// one to many connect between post and comment 
db.Post.hasMany(db.Comment, {
    foreignKey: 'post_id',
});
db.Comment.belongsTo(db.Post, {
    foreignKey: 'post_id',
});
/// one to many connect between user and comment
db.User.hasMany(db.Comment, {
    foreignKey: 'user_id',
});
db.Comment.belongsTo(db.User, {
    foreignKey: 'user_id',
});
// NOTE:
// - `force: true` drops tables. In MySQL this can fail if FK constraints exist (e.g. `post` -> `users`).
// - Use `DB_FORCE_SYNC=true` only when you explicitly want to reset the schema.
(async () => {
    try {
        const force = process.env.DB_FORCE_SYNC === 'true';
        await sequelize.sync(force ? { force: true } : { alter: true });
    }
    catch (error) {
        console.error('Sequelize sync failed:', error);
    }
})();
export default db;
//# sourceMappingURL=sqldbconnnect.js.map