// https://www.bezkoder.com/node-express-sequelize-postgresql/

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      title: {
        type: Sequelize.STRING
      },
    });
  
    return Task;
  };