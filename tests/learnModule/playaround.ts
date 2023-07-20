namespace GrpOne {

    export const myVariable: number = 42;
}

console.log(GrpOne.myVariable);

let person : {
    name:string;
    age:number;
    city:string;
};

const guna= {
name:"guna",
age:10,
city:"Cbe"
}

console.log(typeof(guna));

function typecheck(num:number):number {
    return num;
}
function tc(num1:number,num2:number):number
{
    return num1+num2
}
let add=typecheck;

console.log(add(1))

class classA
{
name:string;

p()
{

}
}
class classB
{

}
let a:classA;

a = new classA();
