let dayOfTheWeek = parseInt(prompt('Enter a day of the week.'))
let typeOfWeek = prompt('Enter type of week? (EU or US)?')

// console.log(100 + dayOfTheWeek)
// console.log('dayOfTheWeek:', typeof dayOfTheWeek, dayOfTheWeek)

// switch(dayOfTheWeek) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2: 
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4: 
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     case 7:
//         console.log('Sunday')
//         break;
//     default:
//         console.log('Please enter a valid number from 1-7.')
// }
// (dayOfTheWeek === 1 || dayOfTheWeek === 2 || dayOfTheWeek === 3 || dayOfTheWeek === 4 || dayOfTheWeek === 5)
// switch(dayOfTheWeek) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('Working day')
//         break;
//     case 6:
//     case 7:
//         console.log('Weekend!')
//         break;
//     default:
//         console.log('Please enter a valid number from 1-7.')
// }

if (typeOfWeek === 'US') {
    switch(dayOfTheWeek) {
        case 1:
            console.log('Sunday')
            break;
        case 2: 
            console.log('Monday')
            break;
        case 3:
            console.log('Tuesday')
            break;
        case 4: 
            console.log('Wednesday')
            break;
        case 5:
            console.log('Thursday')
            break;
        case 6:
            console.log('Friday')
            break;
        case 7:
            console.log('Saturday')
            break;
        default:
            console.log('Please enter a valid number from 1-7.')
    }
} else if (typeOfWeek === 'EU') {
    switch(dayOfTheWeek) {
        case 1:
            console.log('Monday')
            break;
        case 2: 
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4: 
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;
        default:
            console.log('Please enter a valid number from 1-7.')
    }
} else {
    console.log('Please enter either EU or US for type of week.')
}