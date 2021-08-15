const fs = require('fs'); 

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // If there is an error, reject the Promise and send the error to the Promise's catch method
            if (err) {
                reject(err);
                // Return out of the function
                return; 
            }

            // If everything goes fine, resolve the Promise and send succesful data to then 'then' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied succesfully!'
            });
        });
    });
}; 

// Uses shorthand property names functionality to create an object where the key has the same name as the value we are associating it with 
module.exports = { writeFile, copyFile}; 