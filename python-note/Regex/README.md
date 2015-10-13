## Regular Expression Basices
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
