import { Model, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  class User extends Model {}

  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('Admin', 'user'),
        allowNull: false,
        defaultValue:'user',
      },
    },
    {
      sequelize,
      tableName: 'user',
      modelName: 'User',
    }
  );

  return User;
};
