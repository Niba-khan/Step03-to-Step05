//================Step 03a===============
//~~~~~~~~~~~~~~~~Modules~~~~~~~~~~~~~~~~~~~~~~
//In typescript,Modules are used to organize code into resuable peice.
//Through modules you can connect all files with each other
let a = 13;
let b = 18;
let c = a + b;
function myFunction(name) {
    console.log("This is me", name, "and i am IT student");
}
let object;
object = {
    name: "niba",
    age: 18,
    qualification: "inter",
    bioData: {
        cellNo: 302041200,
        email: "kinsamasnaj@jswj"
    }
};
function calculation(a = 19, b = 89, c = 78, d = 15) {
    let result = a * d / c + b;
    return result;
}
//Export:
//You use the export keyword to make functions, classes, objects, or variables available outside the module.
export { c, myFunction, object, calculation };
//=============Step 03b============
//~~~~~~~~~~Native Ecmasript Modules~~~~~~~~~~~
//Each file in a TypeScript project is treated as an ES module. By default, all code in a file is local to that module unless explicitly exported.
let num1 = 18;
let num2 = 5;
let subtract = num1 - num2;
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
        name: "age",
        type: "number",
        message: "Enter your age"
    },
    {
        name: "Qualification",
        type: "string",
        message: "Enter your Qualification"
    },
    {
        name: "Study",
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
});
console.log(chalk.bgBlue.italic(`This is your Best friend name is : ${friend.friendname}`));
//=================Step 04===============
//~~~~~~~~~~~~~Union and Literal~~~~~~~~~~~~~~~
let myAges;
myAges = 17; // "narrowing" means that if you have provided multiple data types for a variable and you store a value of one type in it, TypeScript will narrow down the type to that specific type based on the stored value.
//console.log(myAge.toLowerCase) //error
let myAge = Math.random() > 0.07 ? "khan" : 70;
//myAge.toLowerCase() //error Transpile cannot narrowi(is liyn error dy raHa hain q k is ko abi vaklue nh pata kn c store hon g hosakta hain string ajaya hosakta haioj n number ajayn so is k liyn ek statement banatx hsin                        
if (typeof myAge === "string") {
    //type of new age string
    console.log(myAge.toUpperCase());
}
else {
    console.log(myAge.toString());
}
//typeof means ye hamy data type batata ha
typeof myAge === "string"
    ? myAge.toUpperCase() //ok string
    : myAge.toFixed(1); //number
//to fixed(2) The toFixed method returns a string that represents a number rounded to the specified number of decimal places.
//~~~~~~~~~~~~~~Union Type~~~~~~~~~~~~~~~
let Union;
Union = "khan";
Union = 4;
//Union = true  //error Type 'boolean' is not assignable to type 'string | number'
let union; //means all type k variable ko store kr sakty hain
union = "niba";
union = 17;
union = true;
union = "https://github.com/ziaukhan";
union = [1, 2, 3, 4, 5,];
console.log(union);
//~~~~~~~~~~~~~~Literal Type~~~~~~~~~~~~~~
let colours;
colours = "red"; //ok axceptable
colours = "black"; //ok
colours = "yellow"; //ok
colours = "blue"; //ok
let myInfo;
myInfo = "Niba khan";
myInfo = 343;
myInfo = true;
let studentData;
studentData = "Waniya";
studentData = 4;
studentData = true;
studentData = undefined;
studentData = null;
function friendsGang(friend) {
    console.log(`Best friend ${friend}`);
}
friendsGang("Uzma");
friendsGang("yusra");
friendsGang("Haram");
friendsGang("Asma");
friendsGang("Saniya");
friendsGang("Vaniza");
//==============Step 05a=================
//~~~~~~~~~~~~~~~Object~~~~~~~~~~~~~~~~~~~~~
let student = {
    name: "Niba khan",
    fName: "Farooq khan",
    stdID: 2343,
    isStudent: true
};
//Acessing properties of the Object:
console.log(student);
console.log(student.name);
console.log(student["isStudent"]);
//Modifying an object,s properties:
student.stdID = 1234;
console.log(student.stdID);
//Anonymous type: Data type Object: Basic object type:
let Student = {
    stId: 6778,
    name: "niba",
    fName: "farooq khan",
};
console.log(Student);
let teachingInformation = {
    name: "niba khan",
    age: 17,
    Qualification: "AI Enginering",
    AddInfo: {
        experince: 4,
        class: 10
    }
};
console.log(teachingInformation.AddInfo.experince);
let teacherInfo = [
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
];
console.log(teacherInfo);
let pencil = { price: 30 };
let pen = { price: 80 };
pencil = pen;
pen = pencil;
;
;
let std = {
    name: "Niba",
    id: 123,
};
let teacher = {
    name: "Maha",
    id: 987,
    qualification: "Graduation",
    experince: "7 years"
};
std = teacher; //ok
//teacher = std // error
//=================Step 05c=================
//~~~~~~~~~~~~~~Nested Object~~~~~~~~~~~~~~~~~
let PersonalInfo = {
    name: "Niba khan",
    fName: "Farooq khan",
    qualification: "intermediate",
    bioData: {
        phoneNumber: 973881282,
        houseNo: "h-ksjji8di8"
    }
};
console.log(PersonalInfo);
let schoolInfo = {
    name: "niba",
    classTeacher: 1,
    subject: "urdu",
    student: {
        name: "waniya",
        class: 1
    }
};
console.log(schoolInfo);
console.log(schoolInfo.student);
console.log(schoolInfo["classTeacher"]);
