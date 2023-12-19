console.log('Switch Statement class');

let denOdNedela = prompt('vnesi den od nedela');

// switch (denOdNedela) {
//     case 'Ponedelnik':
//         alert('Ponedelnik e den za rabota');
//         break;
//     case 'Vtornik':
//         alert('Vtornik e den za rabota ama i za predavanje');
//         break;
//     case 'Sreda':
//         alert('Sreda e den za rabota')
//         break;
//     case 'Cetvrtok':
//         alert('Cetvrtok e den za rabota i za predavanje');
//         break;
//     case 'Petok':
//         alert('Petok e den za rabota');
//         break;
//     case 'Sabota':
//         alert('Sabota e den za odmor');
//         break;
//     case 'Nedela':
//         alert('Nedela e den za odmor');
//         break;
//     default:
//         alert('Ne vnesovte validen den');
//         break;
// }


switch (denOdNedela) {
    case 'Ponedelnik':
    case 'Sreda':
    case 'Petok':
        alert(`${denOdNedela} e den za rabota`);
        break;
    case 'Vtornik':
    case 'Cetvrtok':
        alert(`${denOdNedela} e den za rabota ama i za predavanje`);
        break;
    case 'Sabota':
    case 'Nedela':
        alert(`${denOdNedela} e den za odmor`);
        break;
    default:
        alert(`Ne vnesovte validen den, tuku vnesovte ${denOdNedela}`);
        break;
}

