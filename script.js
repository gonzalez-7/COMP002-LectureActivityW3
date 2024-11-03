function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Antonio"));

function circumference(diameter) {
    return Math.PI * diameter;
}

console.log(circumference(10));

function firstFunction() {
    console.log("Entering firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
}

function secondFunction() {
    console.log("Inside secondFunction");
}

firstFunction();
Function Calling Another Function