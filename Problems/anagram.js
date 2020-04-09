// write a func that takes in 2 strings and returns T/F if is anagram

function anagram(st1, st2){
    //remove the spaces and lowercase all letters
    st1 = st1.toLowerCase().replace(' ', '')
    st2 = st2.toLowerCase().replace(' ', '')
    //check if they are the same length, if not return false
    if(st1.length != st2.length){
        return false
    }
    //create a count obj
    const count = {}
    //loop through st1
    for(let i = 0; i < st1.length; i++){
        //if letter exists in count then add 1 to value
        if(count[st1[i]]){
            count[st1[i]] +=1
        }
        //else add letter to count with val 1
        else{
            count[st1[i]] = 1
        }
    }
    console.log(count)
    //loop through st2
    for(let i = 0; i < st2.length; i++){
        //if letter exists in count then subtract 1
        if(count[st2[i]]){
            count[st2[i]] -= 1
        }
        //else return False
        else{
            return false
        }
    }

    //loop through count 
    for(let i = 0; i < count.length; i++){
        //if value is not 0 return false
        if(count[i] != 0){
            return false
        }
    }

    //return True
    return true
}

console.log(anagram('Dog wed', 'god dew'))