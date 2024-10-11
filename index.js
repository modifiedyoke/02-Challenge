// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs/promises';

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

// dTODO: Create a function to write README file
const writeToFile = (filename, data) => {
    fs.writeFile(filename, data)
        .then((err) => {
            err ? console.error(err) : console.log("Success");
        });
};

// dTODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const text = `
# ${answers.title}

### Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Test](#Test)

[License](#License)

[Questions](#Questions)

## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contribute}
## Test
${answers.test}
## License
This application is covered under the ${answers.license} license.
## Questions
Questions can be directed to:

Github: ${answers.profile}

email: ${answers.email}
`
            writeToFile('READMEtogo.md', text);
        }
        );
};

// Function call to initialize app
init();