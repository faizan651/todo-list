import inquirer from "inquirer";
let todos = [];
let condition = true;

while(choices != "Exit") {

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option:",
        type: "list",
        choices: ["Add", "Edit", "Delete","Show To-dos", "Exit"],
        }
    },
])

if (operationAns.operation === "Add") {
    while (condition) {
        let todoQuestions = await inquirer.prompt([
            {
                name: "firstQuestion",
                type: "input",
                message: "What would you like to add in your To-dos?",
            },
            {
                name: "secondQuestion",
                type: "confirm",
                message: "Would you like to add more in your To-dos?",
                default: "true",
            },
        ]);
        todos.push(todoQuestions.firstQuestion);
        console.log(todos);
        condition = todoQuestions.secondQuestion;
    }


if (operationAns.operation === "Edit") {
      let todoQuestions = await inquirer.prompt([
        {
          name: "firstQuestion",
          type: "input",
          message: "What would you like to edit in your To-dos?",
        },
    
        {
          name: "secondQuestion",
          type: "input",
          message: "What would be its replacement in To-dos?",
        },
      ]);

      let n=0;
      while (todos[n] != todoQuestions.firstQuestion) {
      todos.pop();
      n=n+1;
      }
      todos.push(todoQuestions.secondQuestion);
      console.log(todos);
    }
}
    
    
