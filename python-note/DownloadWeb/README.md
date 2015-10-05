# Requests Module
```python
>>> import requests
# get the response
>>> res = requests.get('https://automatetheboringstuff.com/files/rj.txt')
# check status
>>> res.status_code
200

# length of text
>>> len(res.text)
174130
>>> print(res.text[:50])
ï»¿The Project Gutenberg EBook of Romeo and Juliet

# check error in status
>>> badRes = requests.get('https://fb.com/asdasdsasdsadasdasd')
>>> badRes.raise_for_status()
Traceback (most recent call last):
  File "<input>", line 1, in <module>
  File "/usr/local/lib/python3.4/site-packages/requests/models.py", line 851, in raise_for_status
    raise HTTPError(http_error_msg, response=self)
requests.exceptions.HTTPError: 404 Client Error: Not Found


# save the file
>>> playFile = open('downloaded.txt', 'wb')
>>> for chunk in res.iter_content(100000):
...     playFile.write(chunk)
...
...
100000
74130
>>> playFile.close()

```
