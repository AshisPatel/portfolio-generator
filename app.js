const inquirer = require('inquirer'); 
// const fs = require('fs'); 
// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2, process.argv.length); 

// const [name, github] = profileDataArgs; 

// fs.writeFile('./index.html', generatePage(name,github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!'); 
// })

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);
};

promptUser().then(answers => console.log(answers)); 