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

[basics]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/Regex/images/basics.png=200x150
