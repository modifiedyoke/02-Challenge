// TODO: Include packages needed for this application
import inquirer from 'inquirer';

let answers;

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Project Title:',
    },
    {
        name: 'description',
        message: 'Description:',
    },
    {
        name: 'installation',
        message: 'Installation Instructions:',
    },
    {
        name: 'usage',
        message: 'Usage Information:',
    },
    {
        name: 'contribute',
        message: 'Contribution Guidelines:',
    },
    {
        name: 'test',
        message: 'Test Instructions:',
    },
    {
        name: 'license',
        message: 'Choose a license:',
        type: 'list',
        choices: ['MIT', 'GPLv3', 'none'],
    },
    {
        name: 'profile',
        message: 'Enter your Github username: ',
    },
    {
        name: 'email',
        message: 'Enter your email address: ',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(answers)
    .then((answers) => {
        console.log(answers);
    }
    );
}

// Function call to initialize app
init();
