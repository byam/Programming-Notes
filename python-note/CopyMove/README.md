## Copy
```python
# nead shutil module
>>> import shutil
# copy file
>>> shutil.copy('hello.txt', 'folder1/helloCopy.txt')
'folder1/helloCopy.txt'

# copy folder
>>> shutil.copytree('folder1/', 'folder1_backup/')
'folder1_backup'
```

## Move
```python
# move file
>>> shutil.move('moveme.txt', 'folder1/')
'folder1/moveme.txt'

# rename file
>>> shutil.move('folder1/moveme.txt', 'folder1/moveme_new.txt')
'folder1/moveme_new.txt'
```