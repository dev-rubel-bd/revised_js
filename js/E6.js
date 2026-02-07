//Template string
const name= "Rubel"
const fullName=` Md ${name}  Hossain`
console.log(fullName);



//Arrow function 

const add=(num1,num2)=>num1+num2; // 2+ peramiter
const sqr=x=>x*x;   // 1 peramiter
const text=()=>console.log("Amar sonar Bangla"); // no peramiter

//spread operator
 const arr= [33,40,50,45,60];
 console.log(...arr);

 //Destructuring

 const obj={name:"Rubel",class: 12, roll:10, mark:90}
 const {roll}=obj;
 console.log(roll);

 // dot(.) and Braket{} notation

 const student={1:1 ,name:"hasan", age:29 ,roll:20 }
 const student1=student.name ;// dot(.) notation
 const student2=student["1"];
 console.log(student1);
 console.log(student2);

 // map / filter/ find

 const numbers2=[45,30,40,50,70,80,20];
 const doubleIt=numbers2.map(x => x*2);
 console.log(doubleIt);

 



 
