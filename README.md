# Employee Tracker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    
    
## Description
    
This is the readme for the Employee tracker app generator app. After copying the repo and running the required installation and usage codes you will be taken to the terminal app. You can access all aspects of the employee databse by selecting View all employees, roles or departments. You can also add an employee, role, or department to the databse. Finally, you can update an employees role should the change positions. Once they are done, they can click quit to leave the database. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
To install necessary depnedencies, run the follow commands in the terminal of your desired folder:

```
git clone git@github.com:Nevin-Lewis/Employee_tracker.git
```
Then navigate into the cloned folder and run:

```
npm i
```
Then rename the .env.SAMPLE file to .env.
Update the password with your own MYSQL password
Save your file

## Usage

To start this program from the employee_db folder terminal run

```
mysql -u root -p
```
Enter your password as prompted then run

```
source db/schema.sql
source db/seeds.sql
quit
```
Then run the following code in the terminal

```
npm start
```
Navigate the application as desired

## License

<details>

<summary> MIT License </summary>

MIT License

    Copyright (c) 2022 Nevin Lewis
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

## Contributing

Feel free to copy, or fork this repo. Make any changes that you would like and use it freely.

## Test
To run test, run the following command:

```
N/A
```
[Untitled_ Jan 2 2023 8_26 AM.webm](https://user-images.githubusercontent.com/64855834/210245003-4617e82d-5cc5-45c5-a387-b616417addc6.webm)



## Questions
If you have any quetsions about the repo, open an issue or contact me directly at github.com/nevin-lewis
