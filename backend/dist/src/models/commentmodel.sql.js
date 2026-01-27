import { Model, Sequelize, DataTypes } from 'sequelize';
export default (sequelize) => {
    class Comment extends Model {
    }
    Comment.init({
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        Comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'Comments',
        modelName: 'Comment',
    });
    return Comment;
};
//# sourceMappingURL=commentmodel.sql.js.map