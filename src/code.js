const inquirer = require("inquirer");
const { default: Choice } = require("inquirer/lib/objects/choice");
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '@2161233Nl!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`),
    Start()
  );

function Start () {
    inquirer
    .prompt([
        {
            type: "list",
            name: 'Choice',
            message: "What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
          }
    ])
    .then((answers) => {
    Next_steps(answers)});
};
function Next_steps({Choice}) {
    if (Choice == "View all departments"){
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results)
            Start();
        })
    }
    else if (Choice == "View all roles"){
        db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
            Start();
    })
    }   
    else if (Choice == "View all employees"){
        db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            Start();
    })
    }
    else if (Choice == "Add a role"){
        add_roll();
    }
    else if (Next_Steps == "Add an employee"){
        console.log("test")
    }
    else {
        console.log("UHOH")
    }
};
function add_roll(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'role_id',
            message: "What is the role Id?",
          },
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the role?",
        },
        {
            type: 'input',
            name: 'Salary',
            message: "What is salary for this role?",
        },
        {
            type: 'input',
            name: 'department_id',
            message: "What department does this role belong too?",
        }
    ])
    .then((answers) => {
        db.query(`INSERT INTO roles (id, title, salary, department_id)
        VALUES (${answers.role_id}, "${answers.title}", "${answers.Salary}", ${answers.department_id})`, (err, results) => {
            if (err) {
                console.log(err)
            }
        console.log(results) 
        } )
    })

}

module.export ={Start}