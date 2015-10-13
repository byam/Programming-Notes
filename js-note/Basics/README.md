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


### Switch
```js
// Switch Syntax
switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}

// Example
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
```

### Object
```js
// object literal notation Syntax
var myObject = {
    key: value,
    key: value,
    key: value
};

// object constructor
var me = new Object();
me.name = 'Bya';
me['age'] = 25;
```

### Object Constructer
```js
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

```