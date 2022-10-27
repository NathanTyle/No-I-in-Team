const inquirer = require("inquirer");
const fs = require("fs");
const jest = require('jest');
const path = require('path');

// Retrieval of the Constructor Classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { default: generate } = require("@babel/generator");
// Retrieval of the HTML tepmlate to render a new index.html
const render = require('./src/page-template');

const DIST_DIR = path.resolve(__dirname,'dist');
const outputPath = path.join(DIST_DIR, 'index.html');

const teamArr = [];
const idArr = [];

// function that runs the app
function initApp() {

    // Prompts that ask questions to add the manager
    function addManager() {
        console.log();
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Manager's name is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "ID is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can not be empty.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number? (format: '555' - '555' - '5555')",
                validate: answer => {
                    const pass = answer.match(
                        /^[0-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Your Office number must be valid, try again.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    };
    function addTeam() {
        inquirer.prompt([
            {
                type:"list",
                name:"memberChoice",
                message: " Manager added. Who's next? ",
                choices: [
                    "Engineer",
                    "Intern",
                    "End app"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                    case "Intern":
                        addIntern();
                        break;
                        default:
                            generateHTML();
            }
        });
    }
    // Prompts that ask questions to add the Engineer
    function addEngineer() {
        console.log();
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Engineer's name is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Engineer's Id is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can not be empty.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Engineer's Github Username is not valid, try again. ";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }
    // Prompts that ask questions to add the Intern
    function addIntern() {
        console.log();
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Intern's name is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Intern's Id is not valid, try again.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the interns email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can not be empty.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school did your intern go to?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Your Intern's School is not valid, try again.";
                }
            }
    
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        });
    };
    // function that generates the new HTML
    function generateHTML() {
    
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Generate Team Profile... ");
        fs.writeFileSync(outputPath,render(teamArr), "utf-8");
    };
    
    addManager();
    
    }
    
    initApp();