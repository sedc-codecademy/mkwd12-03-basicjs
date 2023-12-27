// {
/* <note>
  <to>Jill</to>
  <from>Bob</from>
  <heading>Reminder</heading>
  Don't forget me this weekend!
</note> */
// }

// {
/* <student>
    <name>Petar</name>
    <surname>Petrovski</surname>
    <group>
        <number>1</number>
        <trainer>Ivo</trainer>
        <grades>
            <bjs>5</bjs>
            <ajs>5</ajs>
        </grades>
    </group>
    <aboutme>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veritatis doloremque aliquam, nihil dolorem sunt, nulla mollitia nam placeat commodi alias saepe nobis sit est quasi soluta debitis dolorum!  </aboutme>
</student> */
// }

// let note = {
//   to: "Jill",
//   from: "Bob",
//   heading: "Reminder",
//   content: `Don't forget me this weekend`,
// };

// let noteJSON = `
//     {
//         "to": "Jill",
//         "from": "Bob",
//         "heading": "Reminder",
//         "content": "Don't forget me this weekend",
//         "day": 28,
//         "isSent": true
//     }
// `;

// Convert JS Object to JSON

let user = {
  name: "Ivo Kostovski",
  age: 34,
  hasPet: true,
  petNames: ["Galen", "Boem"],
  address: {
    country: "MKD",
    city: "Skopje",
    number: 34,
  },
};

console.log(typeof user, user); // object
let stringifiedUser = JSON.stringify(user);
console.log(typeof stringifiedUser, stringifiedUser); // string

// Convert JSON to JS Object
let parsedUser = JSON.parse(stringifiedUser);
console.log(typeof parsedUser, parsedUser);

let parsedPet = JSON.parse(`{ "name": "Murdzo", "age": 2 }`);
console.log(typeof parsedPet, parsedPet);
