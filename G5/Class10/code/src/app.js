//javascript object
let academy = {
    academyName: "SEDC",
    trainer: "Danilo Borozan",
    assistant: "Ivan Ivanov",
    students: ["Filip", "Kiril", "Ana", "Nina", "Ivan"],
    isOnline: true,
    group: 5
}
//we pack the object in order to send it to server
//the client and server understand json format
let jsonContent = JSON.stringify(academy);//serialization
console.log(jsonContent);

//json string comes from server and has to be parsed
//from json string we get javascript object
let parsedJson = JSON.parse(jsonContent);
console.log(parsedJson);


console.log(parsedJson.academyName);
console.log(parsedJson.trainer);
console.log(parsedJson.assistant);

document.getElementsByTagName("h1")[0].innerText = parsedJson.academyName;

document.getElementsByTagName("div")[0].innerHTML += `<p>Trainer: ${parsedJson.trainer}</p>`
