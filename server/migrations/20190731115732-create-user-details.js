'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      preferredLoanAmount: {
        type: Sequelize.BIGINT
      },
      mobileNumber: {
        type: Sequelize.BIGINT
      },
      emailId: {
        type: Sequelize.STRING
      },
      panNumber: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      annualIncome: {
        type: Sequelize.BIGINT
      },
      loanPurpose: {
        type: Sequelize.STRING
      },
      totalWorkingExperience: {
        type: Sequelize.INTEGER
      },
      pincode: {
        type:Sequelize.INTEGER
      },
      leadID:{
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_details');
  }
};