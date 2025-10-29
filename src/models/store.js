import { DataTypes } from "sequelize"
import sequelize from "@/lib/sequelize"

const Store = sequelize.define("stores", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  latitude: DataTypes.DOUBLE,
  longitude: DataTypes.DOUBLE,
}, {
  timestamps: false, 
});

export default Store
