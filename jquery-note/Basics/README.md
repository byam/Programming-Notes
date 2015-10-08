## What is JQuery?

jQuery is a library, or set of helpful add-ons, to the JavaScript programming language. 

```js
$(document).ready(something);


//jQuery will run the code in our function as soon as the HTML document loads.
$(document).ready(function() {
    jQuery magic;
});
```

## JQuery Building Example:

### HTML

index.html :
```html
<html>
    <head>
        <title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
     <div><br/><strong>Click Me!</strong></div>   
    </body>
</html>
```

### Javascript

script.js :
```js
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    }).mouseleave(function(){
        $('div').fadeTo('fast', 0.5);
    });
});
```

### CSS

stylesheet.css :
```css
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}
```


## jQuery Functions

## Selectors

### Using Functions to Select HTML Elements
```js
$(document).ready(function(){
    // <div>
    $('div').fadeIn('slow');
});
```

### Selecting by Class
```js
$(document).ready(function() {
    $('button').click(function() {
        // class = 'red', class = 'blue'
       $('.red, .blue').fadeOut('slow'); 
    });
});
```

### Selecting by ID
```js
$(document).ready(function() {
    $('button').click(function() {
        // id="blue"
        $('#blue').fadeOut('slow');
    });
});

```


### THIS
The this keyword refers to the jQuery object you're currently doing something with.
```js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
```

### .on()

```js
// syntax
$(document).on('event', 'selector', function() {
    Do something!
});

// example: if there were class = 'item' then remove it
$(document).on('click', '.item', function(){
    $(this).remove();
});
```