// Using node.js take arguments for operator, num 1 and num 2 and return the result
let operator = process.argv[2]
let arg1 = parseFloat(process.argv[3])
let arg2 = parseFloat(process.argv[4])

switch (operator) {
    case 'add':
        console.log(arg1 + arg2)
        break;
    case 'subtract':
        console.log(arg1 - arg2)
        break;
    case 'multiply':
        console.log(arg1*arg2)
        break;
    case 'divide':
        console.log(arg1/arg2)
        break;
    default:
        console.log('Sorry, something went wrong... check your inputs are valid (add/subtract/multiply/divide)')
}

//Bonus, take argument 'algebra' and a basic expression lik 4x+2 = 10 and return the solution for x