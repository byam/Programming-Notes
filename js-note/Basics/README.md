### Introduction to Functions in JS

```js
// This is what a function looks like:
var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};

// Exaple:
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

divideByThree(6);
```

### For loop
```js
// For loop Syntax
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}

// example
for(var i = 100; i > 0; i -= 5){
    console.log(i);
}
```

### While loop
```js
// While Syntax
while(condition){
    // Do something!
}

// Do While
var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");    
} while (loopCondition);

```
