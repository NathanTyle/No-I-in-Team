const inquirer = require("inquirer");
const fs = require("fs");
const jest = require('jest');
const path = require('path');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { default: generate } = require("@babel/generator");
const render = require('./src/page-template');

const DIST_DIR = path.resolve(__dirname,'dist');
const outputPath = path.join(DIST_DIR, 'index.html');

const teamArr = [];
const idArr = [];

function initApp() {

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