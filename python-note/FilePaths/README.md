## File Paths

```python
# importing os module
>>> import os

# strings to path
>>> os.path.join('path', 'to', 'file.png')
'path/to/file.png'

# separator
>>> os.sep
'/'

# get current working directory
>>> os.getcwd()
'/Users/Bya'

# change directory
>>> os.chdir('/Users')
>>> os.getcwd()
'/Users'
```

## Absolute and Relative Paths

Abosolute Path is always related to root folder. ex: `/Users/Bya`

Relavative Path is always related to current folder. 
* '.' is current directory
* '..' is parrent directory

```python
>>> import os

>>> os.getcwd()
'/Users/Bya'

>>> os.path.abspath('abs.png')
'/Users/Bya/abs.png'

>>> os.path.abspath('../rel.png')
'/Users/rel.png'

# Check path is absolute
>>> os.path.isabs('/Users/Bya')
True
>>> os.path.isabs('../Users/Bya')
False

# Get relative path
>>> os.path.relpath('/Users/Bya/Pythons/file.py', '/Users/Bya')
'Pythons/file.py'
```

## Useful commands

```python 
# Get directory name
>>> os.path.dirname('/Users/Bya/Pythons/file.py')
'/Users/Bya/Pythons'

# Get base name
>>> os.path.basename('/Users/Bya/Pythons/file.py')
'file.py'
>>> os.path.basename('/Users/Bya/Pythons')
'Pythons'

# Check the file or path exists
>>> os.path.exists('/Users/Bya/hello.txt')
False
>>> os.path.exists('/Users/Bya')
True
>>> os.path.isfile('/Users/Bya')
False
>>> os.path.isdir('/Users/Bya')
True

# Get size of file. (return integer bytes)
>>> os.path.getsize('/Users/Bya/git/Programming-Notes/README.md')
170

# Get all files and folder names as list
>>> os.listdir('/Users/Bya/git/Programming-Notes')
['.git', 'python-note', 'README.md']

# Create directory
>>> os.makedirs('/Users/Bya/newFolder')
>>> os.path.isdir('/Users/Bya/newFolder')
True
```


### Summary
![alt text][file_paths]

[file_paths]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/FilePaths/file_paths.png "File Paths Recap"



















