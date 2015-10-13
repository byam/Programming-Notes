## Regular Expression Basics
```python
# import regular expression module
>>> import re

# define pattern
>>> phoneNumRegex = re.compile(r'\d\d\d-\d\d\d\d-\d\d\d\d')

# this is example text
>>> text = "My phone number is 080-3558-0177"

# search pattern in text
>>> phoneNumRegex.search(text)
<_sre.SRE_Match object; span=(19, 32), match='080-3558-0177'>

# if object is found .group() will be the pattern
>>> phoneNumRegex.search(text).group()
'080-3558-0177'

```

### Summary
![alt text][basics]

[basics]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/basics.png "Basics"


## Regex Groups and the Pipe Character

### Group
```python
# create groups
>>> import re
>>> phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d\d)-\d\d\d\d')
>>> text = "My phone number is 080-3558-0177"
>>> mo = phoneNumRegex.search(text)
>>> mo.group()
'080-3558-0177'
>>> mo.group(1)
'080'
>>> mo.group(2)
'3558'


# escape group
>>> phoneNumRegex = re.compile(r'\(\d\d\d\) \d\d\d\d-\d\d\d\d')
>>> text = "My phone number is (080) 3558-0177"
>>> mo = phoneNumRegex.search(text)
>>> mo.group()
'(080) 3558-0177'
```

### Pipe
```python
>>> superRegex = re.compile(r'super(man|woman|boy|girl)')
>>> mo = superRegex.search("Hey superboy, come here!")
>>> mo.group()
'superboy'
>>> mo.group(1)
'boy'
>>> mo = superRegex.search("Hey supergirl, come here!")
>>> mo.group()
'supergirl'
>>> mo.group(1)
'girl'
```

### Summary
![alt text][groupPipe]
[groupPipe]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/groupPipe.png "groupPipe"


## Repetition in Regex Patterns and Greedy/Nongreedy Matching

### Repetition in Regex Patterns
```python
>>> import re

# '?' means 0 or 1 time
>>> superRegex = re.compile(r'super(wo)?man')
>>> superRegex.search("Hey superwoman, come here!").group()
'superwoman'
>>> superRegex.search("Hey superman, come here!").group()
'superman'
>>> superRegex.search("Hey superwowoman, come here!") == None
True


# '*' means 0 or more times
>>> superRegex = re.compile(r'super(wo)*man')
>>> superRegex.search("Hey superwowoman, come here!").group()
'superwowoman'
>>> superRegex.search("Hey superman, come here!").group()
'superman'
>>> superRegex.search("Hey superwoman, come here!").group()
'superwoman'


# '+' mean 1 or more times
>>> superRegex = re.compile(r'super(wo)+man')
>>> superRegex.search("Hey superwowoman, come here!").group()
'superwowoman'
>>> superRegex.search("Hey superwoman, come here!").group()
'superwoman'
>>> superRegex.search("Hey superman, come here!") == None
True

# escaping
>>> escapeRegex = re.compile(r'\?\*\+')
>>> escapeRegex.search("This is the ?*+").group()
'?*+'


# (){n} means n times
>>> ntimeRegex = re.compile(r'(ha){3}')
>>> ntimeRegex.search("Bya said hahaha")
<_sre.SRE_Match object; span=(9, 15), match='hahaha'>
>>> ntimeRegex.search("Bya said hahahahaha")
<_sre.SRE_Match object; span=(9, 15), match='hahaha'>

# (){x,y} means at least x times, max y times
>>> ntimeRegex = re.compile(r'(ha){3,5}')
>>> ntimeRegex.search("Bya said hahahahaha")
<_sre.SRE_Match object; span=(9, 19), match='hahahahaha'>
>>> ntimeRegex.search("Bya said hahaha")
<_sre.SRE_Match object; span=(9, 15), match='hahaha'>

>>> ntimeRegex = re.compile(r'(ha){3,}')
>>> ntimeRegex.search("Bya said hahahahaha")
<_sre.SRE_Match object; span=(9, 19), match='hahahahaha'>
>>> ntimeRegex = re.compile(r'(ha){,5}')
>>> ntimeRegex.search("Bya said hahaha")
<_sre.SRE_Match object; span=(0, 0), match=''>
```

### Greedy/Nongreedy Matching
```python
# Greeady search
>>> greedyRegex = re.compile(r'(\d){3,5}')
>>> greedyRegex.search("0123456789")
<_sre.SRE_Match object; span=(0, 5), match='01234'>


# Nongreedy search
>>> greedyRegex = re.compile(r'(\d){3,5}?')
>>> greedyRegex.search("0123456789")
<_sre.SRE_Match object; span=(0, 3), match='012'>

```

### Summary
![alt text][repetitions]
[repetitions]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/repetitions.png "repetitions"



## Regex Character Classes and the findall() method

### findall() method

* `search()` returns Match Objects
* `findall()` returns a list of strings

```python
>>> numbersRegex = re.compile(r'\d')
>>> numbersRegex.findall("My lucky number is 7. Also 9 and 3")
['7', '9', '3']
>>> numbersRegex.search("My lucky number is 7. Also 9 and 3")
<_sre.SRE_Match object; span=(19, 20), match='7'>

# groups
>>> numbersRegex = re.compile(r'(\d)-(\d)')
>>> numbersRegex.findall("My lucky number is 7-6. Also 9-5 and 3-2")
[('7', '6'), ('9', '5'), ('3', '2')]

>>> numbersRegex = re.compile(r'((\d)-(\d))')
>>> numbersRegex.findall("My lucky number is 7-6. Also 9-5 and 3-2")
[('7-6', '7', '6'), ('9-5', '9', '5'), ('3-2', '3', '2')]
```


### Character Classes

* `\d` means numeric digits
* `\D` means not a numeric digits
* `\w` means any character + numberic digits + underscore characters
* `\W` anti `\w`
* `\s` any space, tab, newline
* `\S` anti `\s`

```python
>>> lyric = """<TAB>
... 6 Geese A-laying refers to the six days of creation
... 7 Swans A-swimming refers to the seven gifts of the Holy Spirit, the
 seven sacraments
... 8 Maids A-milking refers to the eight beatitudes
... 9 Ladies Dancing refers to the nine Fruits of the Holy Spirit
... 10 Lords A-leaping refers to the ten commandments
... 11 Pipers Piping refers to the eleven faithful apostles
... 12 Drummers Drumming refers to the twelve points of doctrine in the
Apostle's Creed"""
>>> xmasReger = re.compile(r'\d+\s\w+')
>>> xmasReger.findall(lyric)
['6 Geese', '7 Swans', '8 Maids', '9 Ladies', '10 Lords', '11 Pipers', '12 Drummers']
```

* `[aeiou]` equal to `(a | e | i | o | u)`
* `[a-f]` equal to `(a | b | c | d | e | f)`
* `[^abc]` doesn't include `a,b,c`

```python
# search vowels
>>> vowelRegex = re.compile(r'[aeiouAEIOU]')
>>> vowelRegex.findall("It has been long time here, you wake up!")
['I', 'a', 'e', 'e', 'o', 'i', 'e', 'e', 'e', 'o', 'u', 'a', 'e', 'u']

# search 2 in row vowels
>>> vowelRegex = re.compile(r'[aeiouAEIOU]{2}')
>>> vowelRegex.findall("It has been long time here, you wake up!")
['ee', 'ou']

# not vowels
>>> vowelRegex = re.compile(r'[^aeiouAEIOU]')
>>> vowelRegex.findall("It has been long time here, you wake up!")
['t', ' ', 'h', 's', ' ', 'b', 'n', ' ', 'l', 'n', 'g', ' ', 't', 'm', ' ', 'h', 'r', ',', ' ', 'y', ' ', 'w', 'k', ' ', 'p', '!']
```

### Summary
![alt text][findall]
[findall]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/findall.png "findall"




## Regex Begin and End Matchings. (Dot-Star and Caret/Dollar Characters)

### Begin and End
```python
# begin
>>> beginRegex = re.compile(r'^Hello')
>>> beginRegex.search("Hello guyes, How are you Hello")
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
>>> beginRegex.findall("Hello guyes, How are you Hello")
['Hello']


# end
>>> endRegex = re.compile(r'world!$')
>>> endRegex.search("Hello world!")
<_sre.SRE_Match object; span=(6, 12), match='world!'>
>>> endRegex.search("Hello world") == None
True

# begin & end
>>> beginEndRegex = re.compile(r'^\d+$')
>>> beginEndRegex.search("12313213213213")
<_sre.SRE_Match object; span=(0, 14), match='12313213213213'>
>>> beginEndRegex.search("12313213213213 asdasd") == None
True

```


### Dot-Star
```python
# '.' means any characters, excepts newline
>>> atRegex = re.compile(r'.at')
>>> atRegex.findall("Hat cat flat spot")
['Hat', 'cat', 'lat']

>>> atRegex = re.compile(r'.{1,2}at')
>>> atRegex.findall("Hat cat flat spot")
['Hat', ' cat', 'flat']


# '.*' means match anything
>>> nameRegex = re.compile(r'firstname: (.*), lastname: (.*)')
>>> nameRegex.findall("firstname: Ganbaatar, lastname: Byambasuren")
[('Ganbaatar', 'Byambasuren')]

# Except newline
>>> text = "This is Bya.\nHello guys.\nNice to meet you"
>>> print(text)
This is Bya.
Hello guys.
Nice to meet you
>>> dotStarRegex = re.compile(r'.*')
>>> dotStarRegex.search(text)
<_sre.SRE_Match object; span=(0, 12), match='This is Bya.'>

# include newline
>>> dotStarNewLineRegex = re.compile(r'.*', re.DOTALL)
>>> dotStarNewLineRegex.search(text)
<_sre.SRE_Match object; span=(0, 41), match='This is Bya.\nHello guys.\nNice to meet you'>


# case sensetive
>>> vowelRegex = re.compile(r'[aeiou]')
>>> vowelRegex.findall("Yeah, Apple is good.")
['e', 'a', 'e', 'i', 'o', 'o']

>>> vowelRegex = re.compile(r'[aeiou]', re.IGNORECASE)
>>> vowelRegex.findall("Yeah, Apple is good.")
['e', 'a', 'A', 'e', 'i', 'o', 'o']
```

### Summary
![alt text][dotStar]
[dotStar]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/dotStar.png "dotStar"




## Regex Replace `sub()` method and Verbose Mode

### Replace `sub()` method
```python
>>> import re
>>> nameRegex = re.compile(r'Agent \w+')
>>> nameRegex.findall("Today, Agent Bya meets Agent Julie.")
['Agent Bya', 'Agent Julie']

# replace
>>> nameRegex.sub("AGENTNAME", "Today, Agent Bya meets Agent Julie.")
'Today, AGENTNAME meets AGENTNAME.'

# first letters
>>> nameRegex = re.compile(r'Agent (\w)\w*')
>>> nameRegex.findall("Today, Agent Bya meets Agent Julie.")
['B', 'J']
>>> nameRegex.sub(r"Agent \1****", "Today, Agent Bya meets Agent Julie.")
'Today, Agent B**** meets Agent J****.'
```

### Verbose mode
```python
# add comments to regex
>>> verboseRegex = re.compile('''
... (\d\d\d)    # 3 digits
... (\w\w\w)    # 3 letters
... (\s)        # 1 space
... ''', re.VERBOSE)
>>> verboseRegex
re.compile('\n(\\d\\d\\d)    # 3 digits\n(\\w\\w\\w)    # 3 letters\n(\\s)        # 1 space\n', re.VERBOSE)
>>> verboseRegex.search("The 121bya haha this is working")
<_sre.SRE_Match object; span=(4, 11), match='121bya '>
```

### Summary
![alt text][verbose]
[verbose]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/verbose.png "verbose"
























