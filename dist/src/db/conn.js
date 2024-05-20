"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '25369',
    database: 'get_a_pet',
    define: {
        timestamps: true,
    },
});
