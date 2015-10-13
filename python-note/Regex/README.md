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
