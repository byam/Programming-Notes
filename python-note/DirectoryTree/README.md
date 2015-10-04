## Directory Tree
It goes deeper in folders.
```python
import os
>>> for folderName, subFolders, fileNames in os.walk('/Users/Bya/git/Programming-Notes/python-note/'):
...     print ('The folder is :' + folderName)
...     print ('The subFolders are :' + str(subFolders))
...     print ('The filenames :' + str(fileNames))
...     print ()
...
...
The folder is :/Users/Bya/git/Programming-Notes/python-note/
The subFolders are :['CopyMove', 'Delete', 'DirectoryTree', 'FilePaths', 'ReadWriteTextFiles', 'TryExcept']
The filenames :['.DS_Store', 'README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/CopyMove
The subFolders are :['folder1', 'folder1_backups']
The filenames :['hello.txt', 'moveme.txt', 'README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/CopyMove/folder1
The subFolders are :[]
The filenames :['helloCopy.txt', 'moveme_new.txt']

The folder is :/Users/Bya/git/Programming-Notes/python-note/CopyMove/folder1_backups
The subFolders are :[]
The filenames :['helloCopy.txt']

The folder is :/Users/Bya/git/Programming-Notes/python-note/Delete
The subFolders are :[]
The filenames :['deleteMe.txt', 'README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/DirectoryTree
The subFolders are :[]
The filenames :['README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/FilePaths
The subFolders are :[]
The filenames :['file_paths.png', 'README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/ReadWriteTextFiles
The subFolders are :[]
The filenames :['hello.txt', 'helloWrite.txt', 'mydata', 'read_write.png', 'README.md']

The folder is :/Users/Bya/git/Programming-Notes/python-note/TryExcept
The subFolders are :[]
The filenames :['error_log.txt', 'README.md', 'try_except_any.py', 'try_except_raise.py', 'try_except_specific.py']
```