import Sequelize from 'sequelize';
import {getModels} from "../src/helpers/models";

const env = process.env.NODE_ENV || "development",
    config = require('../config/sequelize.config.js')[env],
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
    });

getModels(__dirname+'/../src/models/', sequelize);

async function setupDatabase() {
    try {
        await sequelize.sync();
        console.log("Database setup complete");
    } catch (error) {
        console.error("Database setup failed", error);
        process.exitCode = 1;
    } finally {
        await sequelize.close();
    }
}

setupDatabase();
