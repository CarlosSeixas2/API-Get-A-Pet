"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conn_1 = require("../db/conn");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    avatar: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize: conn_1.sequelize,
    tableName: 'users',
});
exports.default = User;
// import { sequelize } from '../db/conn'
// import { DataTypes } from 'sequelize'
// const user = sequelize.define('users', {
//   name: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   phone: {
//     type: DataTypes.STRING,
//   },
//   password: {
//     type: DataTypes.STRING,
//   },
//   avatar: {
//     type: DataTypes.STRING,
//   },
// })
// export default user
