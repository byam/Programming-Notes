
## Modifyinf HTML Elements

### Adding Elements
```js
// append <p> to <body>
$('body').append("<p> I'm a paragraph! </p>")


// add <p> tag to after id = 'one'
$('#one').after('<p>Added post! </p>');
```

### Removing Elements
```js
// deletes an element's content and all its descendants
$('p').empty();

// not only deletes an element's content, but deletes the element itself.
$('p').remove();
```

### Adding and Removing Classes
```js
// functions
$('selector').addClass('className');
$('selector').removeClass('className');

// ex: add class = 'highlighted' to id = 'text'
$(document).ready(function(){
    $('#text').click(function(){
        $('#text').addClass('highlighted');
    });
});
```

### Toggling Classes
```js
// If the element it's called on has the class it receives as an input, .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.
$('#text').toggleClass('highlighted');
```

### Changing CSS Style
```js
// functions
$("div").height("100px");
$("div").width("50px");
$("div").css("background-color","#008800");

// example
$('div').height('200px').width('200px').css('border-radius', '10px'); 

```


### Modifying Content
```js
// .html() can be used to set the contents of the first element match it finds. For instance:
$('div').html("I love jQuery!");


// .val() is used to get the value of form elements. For example:
$('input:checkbox:checked').val();





// ex:
$(document).ready(function() {
    $('button').click(function() {
        var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});

```