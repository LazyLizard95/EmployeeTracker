const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    derpartment: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    salary: {
      type: DataTypes.INTEGER
    },
    is_manager: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTable: true, //stops pluralization
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Book;
