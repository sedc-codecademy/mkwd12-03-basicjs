//GETING ELEMENTS FROM THE HTML USING SELECTORSS
let saveBtn=document.getElementById("btn");
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let age=document.getElementById("age");
let studentsList=document.getElementById("studentsList");

//CONSTRUCTOR FUNCTION FOR CREATING STUDENT OBJECTS
function Student(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

//EMPTY ARRAY WHERE I WILL SAVE MY STUDENT OBJECTS
let students=[];

//EVENT LISTENER ON SAVEBTN
saveBtn.addEventListener("click",function(){
    //ADDING STUDENTS TO THE STUDENTS ARRAY
    //STUDENTS OBJECTS ARE CREATED WITH THE CONSTRUCTOR WITH THE VALUES FROM THE INPUTS
    students.push(new Student(firstName.value,lastName.value,age.value));
    //CHECKING TO SEE IF THIS WORKS
    console.log(students);
   
//ADDING STUDENTS TO THE UNORDERED LIST
    studentsList.innerHTML+=`
    <li>Name:${firstName.value} , LastName:${lastName.value} , Age:${age.value}</li>`;

     //CLEANING THE INPUTS
     firstName.value="";
     lastName.value="";
     age.value="";
})