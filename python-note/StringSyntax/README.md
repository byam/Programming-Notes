## Syntax
### Escaping
```python
# It will occure errror
>>> 'This is Bya's pen.'
  File "<input>", line 1
    'This is Bya's pen.'
                 ^
SyntaxError: invalid syntax
# Double quotation is smart
>>> "This is Bya's pen."
"This is Bya's pen."

# Using escape syntax : '\'
>>> 'This is Bya\'s pen.'
"This is Bya's pen."
```

Escape characters:

* \'    single quote
* \"    double quote
* \t    tab
* \n    new line(Line break)
* \\    Backslash

### Raw string
```python
This is Bya\'s pen.
>>> r'This is Bya\'s pen.'
"This is Bya\\'s pen."
>>> print(r'This is Bya\'s pen.')
This is Bya\'s pen.
```

### Multi Line
```python
>>> """Hey
... this is test.
... You got it ?"""
'Hey\nthis is test.\nYou got it ?'
```

### As list
```python
>>> var = "Hello, Bya"
>>> var
'Hello, Bya'
>>> 'Hello' in var
True
>>> 'hello' in var
False
>>> var[1:5]
'ello'
>>>
```


## String Methods
### upper(), lower(), isupper(), islower()
```python
>>> var = "Hello, Bya"
>>> var.upper()
'HELLO, BYA'
>>> var
'Hello, Bya'
>>> var = var.upper()
>>> var
'HELLO, BYA'
>>> var.lower()
'hello, bya'
>>> var.isupper()
True
>>> var.islower()
False
```

other methods:

* isaplha():    letters only
* isalnum():    letters and numbers only
* isdecimal():  numbers only
* isspace():    whitespace only
* istitle():    titlecase only