'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_details = sequelize.define('User_details', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    preferredLoanAmount: DataTypes.BIGINT,
    mobileNumber: DataTypes.BIGINT,
    emailId: DataTypes.STRING,
    panNumber: DataTypes.STRING,
    companyName: DataTypes.STRING,
    profession: DataTypes.STRING,
    gender: DataTypes.STRING,
    annualIncome: DataTypes.BIGINT,
    loanPurpose: DataTypes.STRING,
    totalWorkingExperience: DataTypes.INTEGER,
    pincode: DataTypes.INTEGER,
    leadID:DataTypes.INTEGER
  }, {});
  User_details.associate = function(models) {
    // associations can be defined here
  };
  return User_details;
};