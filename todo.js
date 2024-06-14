import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "moreSecondQuestion",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    todos.push(addTask.firstQuestion);
    condition = addTask.moreSecondQuestion;
    console.log(todos);
}
