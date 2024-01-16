//distructure //

//simply we do 
// const array = [1,2,3,4,5,6,7,8,9];
// console.log(array[5]);

//in distructure 
//this is ressrt operator (dherailai 1 ta ma lyauna lai rest operator use garne )
// let [a,_,c,...rest]  = array; //rest operator j rakhe poni hunxa , //[] this is use in array
// console.log(a);
// console.log(c);

// console.log(rest)

// this is spread operator(1 ta lai dheraima laijana lai spread use garne)

// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// let combined = [...num1,...num2]

// now in object

// function sum(...num){
//     console.log(num);
// }
// console.log(sum(1,2,3,4,5,6,7,8));


//how to use object in distructure

// let student = {
//     name:'Ashika',
//     age:20,
// }

// // let{name,age,..._} = student; // object bhako bhayarw {} use this 
// // console.log(name);
// // console.log(age);

// let {name:firstName,age,location = "Bardiya"} = student;
// console.log(firstName);
// console.log(age);
// console.log(location);

// let address ={
//     district: "Bardiya",
//     city: "Taratal",
// }

// let combined = [...student,...address];


// let student = {
//     name:'Ashika',
//     age :20,
//     subject :{
//         sub1:'math',
//         sub2:'Web',
//         sub3:'java',
//     }
// }
// console.log(student.subject);


let student = {
    name:'Ashika',
    
    detail: {
        age : 20,
        getInfo:function(){
        return this.age;

    }
    }
}
// console.log(student.detail.getInfo());

// console.log(student?.detail);
console.log(student.roll);
// console.log(student.detail.getAddress());
console.log(student.getAddress?.());

function getVowel(str){}





