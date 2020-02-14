const inquirer = require("inquirer");

module.exports = {
  askDetails: () => {
    const questions = [
      {
        name: "description",
        type: "input",
        message: "Enter the repo description here:",
      },{
        name: "author",
        type: "input",
        message: "Enter the author name here:",
      }
    ];

    return inquirer.prompt(questions);
  }
};
