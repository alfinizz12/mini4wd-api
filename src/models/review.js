import { DataTypes } from "sequelize"
import sequelize from "@/lib/sequelize"

const Review = sequelize.define("reviews", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: "users",
        key: "id"
    },
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "products",
        key: "id"
    },
    onDelete: "CASCADE"
  },

  comment: {
    type:DataTypes.TEXT,
    allowNull: false,
  },

  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

}, {
  timestamps: true, 
  createdAt: "created_at",
  updatedAt: "updated_at", 
});

export default Review
