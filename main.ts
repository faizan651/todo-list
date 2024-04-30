#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option:",
      type: "list",
      choices: ["Add", "View To-dos", "Modify", "Delete", "Exit"],
    },
  ]);

  if (operationAns.operation === "Add") {
    let todoQuestions = await inquirer.prompt([
      {
        name: "firstQuestion",
        type: "input",
        message: "What would you like to add in your To-dos?",
      },
    ]);
    if (todoQuestions.firstQuestion !== "") {
      todos.push(todoQuestions.firstQuestion);
    }
  }

  if (operationAns.operation === "View To-dos") {
    if (todos.length === 0) {
      console.log("Array list is empty.");
    } else {
      let n = 0;
      while (n < todos.length) {
        console.log(todos[n]);
        n += 1;
      }
    }
  }

  if (operationAns.operation === "Exit") {
    condition = false;
    process.exit();
  }

  if (operationAns.operation === "Modify") {
    if (todos.length === 0) {
      console.log("Array list is empty.");
    } else {
      let todoQuestions = await inquirer.prompt([
        {
          name: "firstQuestion",
          type: "input",
          message:
            "What would you like to edit in your To-dos? Note: (To-do must be match with exisitng and case sensitive)",
        },

        {
          name: "secondQuestion",
          type: "input",
          message: "What would be its replacement in To-dos?",
        },
      ]);

      let n = 0;
      while (n < todos.length) {
        if (
          todos[n] === todoQuestions.firstQuestion &&
          todoQuestions.secondQuestion !== ""
        ) {
          todos[n] = todoQuestions.secondQuestion;
        }
        n += 1;
      }
    }
  }

  if (operationAns.operation === "Delete") {
    if (todos.length === 0) {
      console.log("Array list is empty.");
    } else {
      let todoQuestions = await inquirer.prompt([
        {
          name: "firstQuestion",
          type: "input",
          message:
            "What would you like to delete in your To-dos? Note: (To-do must be match with existing and case sensitive)",
        },
      ]);

      const index = todos.indexOf(todoQuestions.firstQuestion);

      if (index !== -1) {
        const lastElement: any = todos[todos.length - 1];
        todos[index] = lastElement;
        todos.pop();
      }
    }
  }
}
