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