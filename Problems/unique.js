//write a funciton that will take in an array and output only the unique values in that array

function unique(arr){
    //create an empty array to be returned
    let uniqueArr = []
    //loop though arr supplied 
    arr.forEach(num => {
    //if new arr includes i from supplied array then pass
        if(uniqueArr.includes(num)){
            console.log('exists')
    //else push new i into new arr    
        }else {
            uniqueArr.push(num)
        }
    });
    //return arr
    return uniqueArr
}

let returnedArr = unique([1,5,8,1,2,5,5,4,8,2])
console.log(returnedArr)