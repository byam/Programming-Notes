## Events

### Hover
```js
$(document).ready(function(){
  // add two inputs into hover
  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

});
```

### Focus

The `.focus()` event handler only works on elements that can receive focus—the list of these elements is a bit vague, but HTML elements like `<textarea>`s and `<input>`s are the usual suspects.

```js
$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
    });
});
```

### The .keydown() Event

The `.keydown()` event is triggered whenever a key on the keyboard is pressed. It only works on whatever page element has focus, so you'll need to click on the window containing your div before pressing a key in order for you to see its effects.

```js
$(document).ready(function() {
  $(document).keydown(function() {
     //The .animate() effect takes two inputs: the animation to perform, and the time in which to perform the animation.
    $('div').animate({left:'+=10px'}, 500);
  });
});
```


#### Case key

```js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $('img').animate({top: "+10px"}, 'fast');
                break;
        }
    });
});

```