//Using 'require' and the path I now have access to the band object and can do what i want with it
const bands = require('./bands')

//Accept an argument for what type of band
let type = process.argv[2]

//switch cases for different types to get output
switch(type){
    case'classic' :
        console.log(bands.classic + ' is a classic band')
        break;
    case 'rap':
        console.log(bands.rap + ' is a rap band')
        break;
    case 'punk':
        console.log(bands.punk + ' is a punk band')
        break;
    case 'classical':
        console.log(bands.classical + ' is a classical band')
        break;
    default:
        console.log('sorry, you input a band type we do not have information on')
}

//OR! remember square bracket notation to use the variable

if(bands[type]){
    console.log(bands[type] + ' is a ' + type + ' band')
}else {
    console.log('sorry, you input a band type we do not have information on')
}