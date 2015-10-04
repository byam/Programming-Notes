## Delete

```python
>>> import os

# delete file
>>> os.unlink('deleteMe.txt')

# delete empty folder
>>> os.rmdir('eFolder/')

# delete not empty folder
>>> os.rmdir('Folder/')
Traceback (most recent call last):
  File "<input>", line 1, in <module>
OSError: [Errno 66] Directory not empty: 'Folder/'
>>> import shutil
>>> shutil.rmtree('Folder/')
```

## send2trash
It will send file to trash bin. Safe to delete.
```python
>> import send2trash
>>> os.chdir('/Users/Bya/git/Programming-Notes/python-note/Delete/')
>>> send2trash.send2trash('deleteMe.txt')
```