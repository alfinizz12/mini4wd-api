import pg from "pg";
import { Sequelize } from "sequelize";

let sequelize;

if (!global._sequelize) {
  global._sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    },
    pool: {
      max: 5, // maksimal 5 koneksi aktif
      min: 0,
      idle: 10000,
    },
    logging: false,
  });

  await global._sequelize.authenticate();
  await global._sequelize.sync();
}

sequelize = global._sequelize;

export default sequelize;
