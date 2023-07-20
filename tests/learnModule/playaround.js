var GrpOne;
(function (GrpOne) {
    GrpOne.myVariable = 42;
})(GrpOne || (GrpOne = {}));
console.log(GrpOne.myVariable);
var person;
var guna = {
    name: "guna",
    age: 10,
    city: "Cbe"
};
console.log(typeof (guna));
function typecheck(num) {
    return num;
}
function tc(num1, num2) {
    return num1 + num2;
}
var add = typecheck;
console.log(add(1));
var classA = /** @class */ (function () {
    function classA() {
    }
    return classA;
}());
var classB = /** @class */ (function () {
    function classB() {
    }
    return classB;
}());
var a;
a = new classB();
