hello.txt
```
Hello World.
How you doing?
```

## Read Mode
Follow this Rule:
    open() -> read() -> close()
```python
# Create path variable
>>> myPath = '/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles/hello.txt'
# open path
>>> myFile = open(myPath)
# read file
>>> myFile.read()
'Hello World.\nHow you doing?'
# close file
>>> myFile.close()

# read as list of strings
>>> myFile = open(myPath)
>>> myFile.readlines()
['Hello World.\n', 'How you doing?']
>>> myFile.close()
```

## Write Mode
Open the file and overwrite. If file doesn't exist create a new file
```python
# open file with 'write' mode
>>> myFile = open('/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles/helloWrite.txt', 'w')
# writing texts to file
>>> myFile.write('Greeting1')
>>> myFile.write('Greeting2')
>>> myFile.write('Greeting3')
>>> myFile.close()

# check file
>>> open('/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles/helloWrite.txt').read()
'Greeting1Greeting2Greeting3'

```

## Append Mode
Original file of contents won't change. Appending new ones
```python
# open as a append mode
>>> myFile = open('/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles/helloWrite.txt', 'a')
# appending texts
>>> myFile.write('\n Appendings1')
>>> myFile.write('\n Appendings2')
>>> myFile.close()

# check file
>>> open('/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles/helloWrite.txt').read()
'Greeting1Greeting2Greeting3\n Appendings1\n Appendings2'
```

## Shelve Files
Shelve module can store Python values in a binary-file. Returns like python dictionary
```python
# changin directory
>>> import os
>>> os.chdir('/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles')

# import shelve module
>>> import shelve

# saves the data
>>> shelfFile = shelve.open('mydata')
>>> shelfFile['country'] = ['Mongolia', 'Japan', 'USA']
>>> shelfFile.close()

# access data
>>> shelfFile = shelve.open('mydata')
>>> shelfFile['country']
['Mongolia', 'Japan', 'USA']
>>> shelfFile.close()

# keys, values
>>> shelfFile = shelve.open('mydata')
>>> list(shelfFile.keys())
['country']
>>> list(shelfFile.values())
[['Mongolia', 'Japan', 'USA']]
>>> shelfFile.close()
```

## Recap

![alt text][file_paths]

[file_paths]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/ReadWriteTextFiles/read_write.png "Read Write Recap"