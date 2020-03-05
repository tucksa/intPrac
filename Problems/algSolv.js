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
let equation = process.argv[3]
//Isolate the x on the left side

//split expresion at = to get right and left side of equation
let rightLeftArr = equation.split('=')
console.log(rightLeftArr)
//split the left side to get array representation
let leftArr = rightLeftArr[0].split(/\W/g)
console.log(leftArr)
// create opperator tracker
let algOperator = []
//create empty isolated var to note x
let x = 0
//loop through the left side array 
for(let i = 0; i < rightLeftArr[0].length; i ++){
    if(rightLeftArr[0][i] == '+' || rightLeftArr[0][i] == '-' || rightLeftArr[0][i] == '*'  || rightLeftArr[0][i] == '/'){
        algOperator.push(rightLeftArr[0][i])
    }
}
console.log(algOperator)
//if i inludes 'x' then set this equal to isolated

//else if it is +, -, ^ or / then set as operator

//else take the i and do the opposite to the right side equation
//switch case if + then - ect.

//finally outside of loop take the isolated value and split to get just x
// divide right side by first value in arr (assuming its not a fraction)

//Note- this only works on simple expresions. throw in fraction, exponents, multiple variables and it will break