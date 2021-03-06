const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../../config/db');
module.exports = (sequelize) => {
    const comment = sequelize.define('comment', {
    // Model attributes are defined here
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieId:{
         type: DataTypes.INTEGER,
    },
    commenter: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    updatedAt:false
  });
  return comment
}