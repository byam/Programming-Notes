## Webbrowser Module

### Open default web browser
```python
>>> import webbrowser
# python will launch new browser OS's defualt browser
>>> webbrowser.open('https://fb.me/')
True
```

### Search place on Google map, using Terminal
```python
import webbrowser
import sys

# $ python mapit.py ULAANBAATAR, MONGOLIA
# ['mapit.py', 'ULAANBAATAR,', 'MONGOLIA']
sys.argv
# Check if command line arguments were passed
if len(sys.argv) > 1:
    address = ' '.join(sys.argv[1::])
    # https://www.google.com/maps/place/<ADDRESS>
    webbrowser.open('https://www.google.com/maps/place/' + address)
else:
    print 'write your place'

```

Terminal:
```sh
$ python mapit.py ULAANBAATAR, Mongolia
```

