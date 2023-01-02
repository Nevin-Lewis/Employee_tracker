const inquirer = require("inquirer");
const { default: Choice } = require("inquirer/lib/objects/choice");
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({

    user: 'root',
    database: 'company_db',
    password: process.env.DB_PASSWORD,
    host: "localhost",
}
);

function Start () {
    inquirer
    .prompt([
        {
            type: "list",
            name: 'Choice',
            message: "What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
          }
    ])
    .then((answers) => {
    Next_steps(answers)});
};
function Next_steps({Choice}) {
    if (Choice == "View all departments"){
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
            Start();
        })
    }
    else if (Choice == "View all roles"){
        db.query('SELECT roles.id, roles.title, roles.salary, department.dep_name FROM roles INNER JOIN department ON department.id = roles.department_id;', function (err, results) {
            console.table(results);
            Start();
    })
    }   
    else if (Choice == "View all employees"){
        db.query('SELECT e1.employee_id, e1.first_name, e1.last_name, r1.title, d1.dep_name as department, CONCAT(m1.first_name, " ", m1.last_name) as manager FROM employee AS e1 LEFT JOIN employee M1 ON e1.manager_id = m1.employee_id LEFT JOIN roles AS r1 ON e1.role_id = r1.id LEFT JOIN department as d1 ON r1.department_id = d1.id;', function (err, results) {
            console.table(results);
            Start();
    })
    }
    else if (Choice == "Add a role"){
        add_role();
        
    }
    else if (Choice == "Add an employee"){
        add_employee();
    }
    else if (Choice == "Add a department"){
        add_department();
    }
    else if (Choice == "Update an employee role"){
        update_role();
    }
    else {
        process.exit();
    }
};
function add_role(){
    db.query('SELECT * FROM department', (err, results) => {
        dept = [];
        results.forEach(({dep_name, id}) =>
        {dept.push({
            name : dep_name,
            value: id
        });
        });
    inquirer
    .prompt([
        
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
            type: 'list',
            message: "What department does this role belong too?",
            name: 'department',
            choices: dept,
            
        }
    ])
    .then((answers) => {
        db.query(`INSERT INTO roles (title, salary, department_id)
        VALUES ("${answers.title}", "${answers.Salary}", ${answers.department})`, (err, results) => {
            if (err) {
                console.log(err)
            }
        console.log(`Added ${answers.title} to the database`);
        Start();
        })
    })

})
};
function add_employee(){
    db.query('SELECT * FROM roles', (err, results) => {
            roles = [];
            results.forEach(({title, id}) =>
            {roles.push({
                name : title,
                value: id
            });
            });
        db.query('SELECT employee_id, CONCAT(first_name, " ", last_name) as name FROM employee', (err, results) => {
                managers = [];
                results.forEach(({name, employee_id}) =>
                {managers.push({
                    name : name,
                    value: employee_id
                });
                });
    inquirer
    .prompt([
       {
            type: 'input',
            name: 'first_name',
            message: "What is their first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is their last name?",
        },
        {
            type: 'list',
            name: 'role',
            message: "What role does the employee have?",
            choices: roles
        },
        {
            type: 'list',
            name: 'manager_id',
            message: "Who is there manager?",
            choices: managers
        },

    
    ])
    .then((answers) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role}, ${answers.manager_id})`, (err, results) => {
            if (err) {
                console.log(err)
            }
        console.log(`{Added ${answers.first_name} ${answers.last_name} to the database}`);
        Start();
        } )
    })
})})
};
function add_department(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'dep_name',
            message: "What is the department name?",
        },
    ])
    .then((answers) => {
        db.query(`INSERT INTO department (dep_name)
        VALUES ("${answers.dep_name}")`, (err, results) => {
            if (err) {
                console.log(err)
            }
        console.log(`Added ${answers.dep_name} to the Database`);
        Start();
        } )
    })

};
function update_role(){
    db.query('SELECT employee_id, CONCAT(first_name, " ", last_name) as name FROM employee', (err, results) => {
        employees = [];
        results.forEach(({name, employee_id}) =>
        {employees.push({
            name : name,
            value: employee_id
        });
        });
    db.query('SELECT * FROM roles', (err, results) => {
        roles = [];
        results.forEach(({title, id}) =>
         {roles.push({
            name : title,
            value: id
        });
        });
        
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: "Which employee do you want to update?",
            choices: employees
          },
        {
            type: 'list',
            name: 'role_id',
            message: "What role their new role",
            choices: roles
        }


    ])
    .then((answers) => {
        db.query(`UPDATE employee SET role_id = ${answers.role_id} WHERE employee_id = ${answers.employee_id};`, (err, results) => {
            if (err) {
                console.log(err)
            }
        console.log(`Updated ${answers.employee_id}'s role`);
        Start();
        } )
    })
    })
})
};

module.exports ={Start};