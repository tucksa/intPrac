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
const equation = process.argv[3]
//Isolate the x on the left side
//split expresion at = to get right and left side of equation
let rightLeftArr = equation.split('=')
let total = rightLeftArr[1]
//split the left side to get array representation
let leftArr = rightLeftArr[0].split(/\W/g)
// create opperator tracker
let algOperator = []
//create empty isolated var to note x
const xVals = [];
//loop through the left side array 
for(let i = 0; i < rightLeftArr[0].length; i ++){
    if(rightLeftArr[0][i] == '+' || rightLeftArr[0][i] == '-' || rightLeftArr[0][i] == '*'  || rightLeftArr[0][i] == '/'){
        algOperator.push(rightLeftArr[0][i])
    }
}
function popX(val){
    let num = val.split('')
    num.pop()
    num = num.join()
    return num
}

for(let i =0; i < algOperator.length; i ++){
    if(leftArr[i].includes('x')){
        if(algOperator[i] == '-'){
            xVals.push(popX(leftArr[i]))
            total = parseInt(total) + parseInt(leftArr[i+1])
        }else if(algOperator[i] == '/' && !leftArr[i+1].includes('x')){
            let val = popX(leftArr[i])
            xVals.push(val+'/'+ leftArr[i+1])
        }else if(algOperator[i] == '*'){
            if(leftArr[i+1].includes('x')){
                let coreNum1 = popX(leftArr[i])
                let coreNum2 = popX(leftArr[i+1])
                xVals.push(parseInt(coreNum1) * parseInt(coreNum2))
            }else{
                let coreNum1 = popX(leftArr[i])
                xVals.push(parseInt(coreNum1) * parseInt(leftArr[i+1]))
            }
        }else{
            if(leftArr[i+1].includes('x')){
                let coreNum1 = popX(leftArr[i])
                let coreNum2 = popX(leftArr[i+1])
                xVals.push(parseInt(coreNum1) + parseInt(coreNum2))
            }else{
                xVals.push(popX(leftArr[i]))
                total = parseInt(total) - parseInt(leftArr[i+1])
            }
        }
    }else if(leftArr[i+1].includes('x') && !leftArr[i].includes('x')){
        if(algOperator[i] == '-'){
            xVals.push('-' + popX(leftArr[i+1]))
            total = parseInt(total) -  parseInt(leftArr[i])
        }else if(algOperator[i] == '/'){
            xVals.push(leftArr[i]+ '/' + popX(leftArr[i+1]))
        }else if(algOperator[i] == '*'){
            let coreNum = popX(leftArr[i+1])           
            xVals.push(parseInt(leftArr[i])*parseInt(coreNum))
        }else{
            xVals.push(popX(leftArr[i+1]))
            total = parseInt(total)- parseInt(leftArr[i])
        }
    }else{
        //add values
        if(algOperator[i] == '+'){
            let sum = parseInt(leftArr[i]) + parseInt(leftArr[i+1])
            total = parseInt(total) - sum
        }else if(algOperator[i] == '-'){
            let diff = parseInt(leftArr[i]) - parseInt(leftArr[i+1])
            total = parseInt(total) + diff
        }else if(algOperator[i] == '*'){
            let mult = parseInt(leftArr[i]) * parseInt(leftArr[i+1])
            total = parseInt(total)/ mult
        }else{
            let div = parseInt(leftArr[i]) / parseInt(leftArr[i+1])
            total = parseInt(total) * div
        }
    }
}

if(xVals[0].includes('/')){
    let frac = xVals[0].split('/')
    total = parseInt(total)* (parseInt(frac[1])/parseInt(frac[0]))
    console.log(total)
}else{
    total = parseInt(total)/ parseInt(xVals[0])
    console.log(total)
}
//if i inludes 'x' then set this equal to isolated

//else if it is +, -, ^ or / then set as operator

//else take the i and do the opposite to the right side equation
//switch case if + then - ect.

//finally outside of loop take the isolated value and split to get just x
// divide right side by first value in arr (assuming its not a fraction)

//Note- this only works on simple expresions. throw in fraction, exponents, multiple variables and it will break