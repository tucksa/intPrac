//When you have an asynch func you cannot put it into a loop because the loop will execute before you get each response
//SO- do a recursive function instead

//create a count variable for how many times you want the code executed
let count = 0
const names = []
//create async function with an if statement for count
const inquirer = require('inquirer');

function getNames(){
    if(count < 3){
        inquirer.prompt([
            {
                name : 'name',
                message : 'What is your name?'
            }
        ]).then(response => {
            names.push(response.name)
            count++
            getNames()
        })
    }else{
        console.log(names)
    }
}

getNames()

