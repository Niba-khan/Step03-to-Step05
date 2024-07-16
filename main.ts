//================Step 03a===============
//~~~~~~~~~~~~~~~~Modules~~~~~~~~~~~~~~~~~~~~~~
//In typescript,Modules are used to organize code into resuable peice.
//Through modules you can connect all files with each other
let a = 13;
let b = 18;
let c = a + b

function myFunction(name: string){
 console.log("This is me", name, "and i am IT student")
}

let object :{
    name: string,
    age: number,
    qualification: string,
    bioData:{
        cellNo: number,
        email: string
    }
}
  object = {
    name: "niba",
    age: 18,
    qualification: "inter",
    bioData:{
        cellNo: 302041200,
        email: "kinsamasnaj@jswj"
    }

}

 function calculation(a = 19, b=89, c=78 , d= 15){
  let result = a * d / c + b
  return result;
 } 

 //Export:
 //You use the export keyword to make functions, classes, objects, or variables available outside the module.
 export {
    c,
     myFunction,
     object,
    calculation
 };

 
 //=============Step 03b============
 //~~~~~~~~~~Native Ecmasript Modules~~~~~~~~~~~
 //Each file in a TypeScript project is treated as an ES module. By default, all code in a file is local to that module unless explicitly exported.
 
 let num1:number = 18;
 let num2: number = 5;
 let subtract:number = num1 -num2;

 export default subtract;

 //===========Step 03c============
 //~~~~~~~~~~~import inquirer Ecmasript Moudule~~~~~~~~~~
 //It is a liabrary of javascript. it is specially design to use with NodeJS.
 //it is used for ctreative interactive command line interface. it provides set of prompt like.
 //text input boxes
 //Yes/No confirmetion, and List.
 //Making it similar to get user input and make choices within command line application
 
 import inquirer from "inquirer";

 let answer = await inquirer.prompt([
     {
         name: "name",
         type: "input",
         message: "Enter your name"
 
     },
     {
        name : "age",
        type: "number",
        message: "Enter your age"
       
     },
     {
         name : "Qualification",
         type: "string",
         message: "Enter your Qualification"
     },
     {
         name : "Study",
         type: "string",
         message: "Enter your continuing study"
     }
 ]);
 console.log(`My name is ${answer.name}`);
 console.log(`My age is  ${answer.age}`);
 console.log(`My qualification ${answer.Qualification}`);
 console.log(`My study is continuing in ${answer.Study}`);
  
//=============Step 03c=============
//~~~~~~~~~~~~~~Chalk~~~~~~~~~~~~~~~~~
//Chalk module in Node.js is the third-party module that is used for styling the format of text and allows us to create our own themes in the node.js project.
//Advantages of Chalk Module:
//It helps to customize the color of the output of the command-line output
//It helps to improve the quality of the output by providing several color options like for warning message red color and many more

 import chalk from "chalk";

 let friend = await inquirer.prompt({
    name: "friendname",
    type: "input",
    message: chalk.bgRedBright.bold("Enter your Best friend Name")
 })

 console.log(chalk.bgBlue.italic(`This is your Best friend name is : ${friend.friendname}`))


 //=================Step 04===============
 //~~~~~~~~~~~~~Union and Literal~~~~~~~~~~~~~~~

let myAges : string |number

myAges = 17  // "narrowing" means that if you have provided multiple data types for a variable and you store a value of one type in it, TypeScript will narrow down the type to that specific type based on the stored value.

//console.log(myAge.toLowerCase) //error


let myAge = Math.random() > 0.07 ? "khan": 70;
//myAge.toLowerCase() //error Transpile cannot narrowi(is liyn error dy raHa hain q k is ko abi vaklue nh pata kn c store hon g hosakta hain string ajaya hosakta haioj n number ajayn so is k liyn ek statement banatx hsin                        

if(typeof myAge === "string"){
    //type of new age string
   console.log(myAge.toUpperCase())
}
else{
    console.log(myAge.toString())
}

//typeof means ye hamy data type batata ha

typeof myAge === "string"
? myAge.toUpperCase()  //ok string
: myAge.toFixed(1) //number
//to fixed(2) The toFixed method returns a string that represents a number rounded to the specified number of decimal places.

//~~~~~~~~~~~~~~Union Type~~~~~~~~~~~~~~~
// TypeScript allows you to combine specific types together as a union type.

let Union : number | string;

Union = "khan";
Union = 4;
//Union = true  //error Type 'boolean' is not assignable to type 'string | number'

let union : number |string |any //any means all type k variable ko store kr sakty hain

union = "niba";
union = 17;
union = true;
union = "https://github.com/ziaukhan";
union = [1,2,3,4,5,] 

console.log(union);

//~~~~~~~~~~~~~~Literal Type~~~~~~~~~~~~~~
//A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string
//, but a string is not "Hello World" inside the type system.
//There are three sets of literal types available in TypeScript today: strings, numbers, and booleans;
// by using literal types you can allow an exact value which a string, number, or boolean must have.

let colours: "red" | "blue" | "black" | "yellow";

colours = "red";  //ok axceptable
colours = "black"; //ok
colours = "yellow"; //ok
colours = "blue"; //ok
//colours = "orange" //error Type '"orange"' is not assignable to type '"red" | "blue" | "black" | "yellow"' 

//~~~~~~~~~~Type Aliase~~~~~~~~~~~~~~~
type personalInfo = string | number |boolean 

let myInfo :personalInfo ;
myInfo = "Niba khan";
myInfo = 343;
myInfo = true;

//you can even combine them:

type studentInfo = personalInfo | undefined |null

let studentData :studentInfo;
studentData = "Waniya";
studentData = 4;
studentData = true;
studentData = undefined;
studentData = null;

type freinds = "Uzma" | "yusra" | "Haram"  |"Saniya" |"Asma" |"Vaniza"

function friendsGang(friend:freinds){
        console.log(`Best friend ${friend}`)
}
 friendsGang("Uzma")
 friendsGang("yusra")
 friendsGang("Haram")
 friendsGang("Asma")
 friendsGang("Saniya")
 friendsGang("Vaniza")


//==============Step 05a=================
//~~~~~~~~~~~~~~~Object~~~~~~~~~~~~~~~~~~~~~
//An object in TypeScript is an instance which contains set of key value pairs. The key value pairs are also referred as object properties.
//The values can be scalar values or functions or even array of other objects. If a property's value is a function, that property is known as method.

let student = {
    name: "Niba khan",
    fName: "Farooq khan",
    stdID: 2343,
    isStudent: true
}

//Acessing properties of the Object:
console.log(student)
console.log(student.name)  
console.log(student["isStudent"])

//Modifying an object,s properties:

student.stdID = 1234;
console.log(student.stdID)

//Anonymous type: Data type Object: Basic object type:

let Student:{
    stId: number,
    name: string,
    fName: string,
} = {
    stId: 6778,
    name : "niba",
    fName: "farooq khan",
}
console.log(Student);

//============Step 05b============
//~~~~~~~~~~~~Object aliased~~~~~~~~~~~

type Teaching = {
    name: string,
    age: number,
    Qualification: string,
    AddInfo:{
       experince: number,
       class: number,
    }
  }
 
  let teachingInformation: Teaching={
    name: "niba khan",
    age: 17,
    Qualification: "AI Enginering",
    AddInfo:{
       experince: 4,
       class: 10
    }
  }
 
  console.log(teachingInformation.AddInfo.experince)

  //~~~~~~~~~~~~~Array of object~~~~~~~~~~~~~~~

  type information = {
    name: string;
    id: number;
    qualification: string;
    experince: string;
  };

  let teacherInfo:information[] = [
    {
        name: "Maha",
        id: 1123,
        qualification: "graduate",
        experince: "9 year"
    },
    {
        name: "kinza",
        id: 123,
        qualification: "graduate",
        experince: "9 year"
    }
]

console.log(teacherInfo);

//=============Steo 05c================
//~~~~~~~~~~~~~Structural Typing~~~~~~~~~~~~~~
// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface pencil {
    price: number
 }
 
 interface pen {
     price: number
 }
 
 let pencil:pencil = {price: 30};
 let pen: pen = {price: 80};
 
 pencil = pen;
 pen = pencil;


 //Additional Properties:

 interface stdType {
    name: string,
    id: number,
 };

 interface teacherType {
    name: string,
    id: number,
    qualification: string,
    experince: string
 };

 let std: stdType = {
    name: "Niba",
    id: 123,
 }

 let teacher: teacherType = {
    name: "Maha",
    id: 987,
    qualification: "Graduation",
    experince: "7 years"
 };
 

 std = teacher  //ok
 //teacher = std // error

 //=================Step 05d=================
 //~~~~~~~~~~~~~~Nested Object~~~~~~~~~~~~~~~~~

  //In TypeScript, you can define an object type that includes other objects as properties,
  // allowing for the creation of detailed and structured type definitions. These nested structures
  // can be defined using interfaces or type aliases.

 let PersonalInfo = {
      name: "Niba khan",
      fName: "Farooq khan",
      qualification: "intermediate",
      bioData:{
        phoneNumber: 973881282,
        houseNo: "h-ksjji8di8"
      }
 }

 console.log(PersonalInfo);

 type StudentInfo ={
    name: string,
    class: number
}

type TeacherInfo = {
    name: string,
    classTeacher: number,
    subject: string,
    student: StudentInfo
}

let schoolInfo:TeacherInfo = {
    name: "niba",
    classTeacher: 1,
    subject: "urdu",
    student: {
         name: "waniya",
         class: 1
    }
}

console.log(schoolInfo);
console.log(schoolInfo.student);
console.log(schoolInfo["classTeacher"]);

//===============Step 05e==============
//~~~~~~~~~~~~~~Intersection type~~~~~~~~~~~~~~~~~~

//An intersection type creates a new type by combining multiple existing types.
// The new type has all features of the existing types.

//To combine types, you use the & operator as follows:

//type typeAB = typeA & typeB;

interface student1 {
    name1: string,
    id1: number,
    marks1: number,
    grade1: string
}

interface student2 {
    name2: string,
    id2: number,
    marks2: number,
    grade2: string 
}

type intersectionType = student1 & student2;

let obj: intersectionType = {
    name1: "Danain",
    id1: 123,
    marks1: 95,
    grade1: "A+1",
    name2: "Waniya",
    id2: 345,
    marks2: 90,
    grade2: "A+"
    
}

console.log(obj);

//===============Step 05f=============
//~~~~~~~~~~~~~any, Unknown, Never type~~~~~~~~~~~~~

//~~~~~~~Any~~~~~
//when used, it simply turn off the type checker. We can assign anything to the variable which is marked any type.
let names:any = "kinza"; //ok
names = 38; //ok
names =true; //ok
names = {}; //ok
names = [];  //ok
names = null; //ok
names = undefined; //ok

//~~~~~~~Unknown~~~~~~~~~~

//unknown type is a top type that represents any value. It is similar to any, but safer because it forces you to perform type checking before performing operations on the value
// This encourages better type safety and helps prevent runtime errors.

let z: unknown = "hello";
z = 42; // OK, z is now a number
z = true; // OK, z is now a boolean
//z.foo(); // Error, Object is of type 'unknown'
//z + 1; // Error, Object is of type 'unknown'
if (typeof z === "string") {
  z.toUpperCase(); // OK, z is a string inside this block
}

//~~~~~~~~~~Never~~~~~~~~~~~~

//never type is used to indicate that a variable or function should never hold a value. When you assign the never type to a variable, 
//it means that no value can be assigned to that variable, and attempting to do so will result in a compile-time error

let name : never ;
//let names:never = 34 //errorType 'number' is not assignable to type 'never'

//~~~~~~~~~~~~~~~~~~The End~~~~~~~~~~~~~~~~~~~~