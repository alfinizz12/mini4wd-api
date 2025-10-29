import { DataTypes } from "sequelize"
import sequelize from "@/lib/sequelize"

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
  specifications: DataTypes.JSON,
  stock: DataTypes.INTEGER
}, {
  timestamps: false, 
});

export default Product
