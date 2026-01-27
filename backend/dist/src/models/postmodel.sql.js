import { Model, Sequelize, DataTypes, } from 'sequelize';
export default (sequelize) => {
    class Post extends Model {
    }
    Post.init({
        post_id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://justdemo.jpeg",
        },
        like: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        sequelize,
        tableName: 'Posts',
        modelName: 'Post',
    });
    return Post;
};
//# sourceMappingURL=postmodel.sql.js.map