# Try and Except Statements

### 1. Specific errors
try_except_specific.py:

```python
def Division100(x):
    try:
        ans = 100 / x
        print ans
    except ZeroDivisionError:
        print "Error is just occured HERE."


Division100(10)
Division100(0)
```

Implementation:

```sh
$ python try_except.py
10
Error is just occured HERE.
```

### 2. If any error occurs, save the all errors to file
try_except_any.py:

```python
import traceback


def Division200(x):
    try:
        ans = 200 / x
        print ans
    except:
        # file will saved in current directory
        errorFile = open('error_log.txt', 'a')
        errorFile.write(traceback.format_exc())
        errorFile.close()
        print "Traceback Error is written in error_log.txt"


Division200(10)
Division200(11)
Division200(0)
Division200(0)

```

Implementation:

```shell
$  tipsPython  python try_except.py
20
18
Traceback Error is written in error_log.txt
Traceback Error is written in error_log.txt

$  tipsPython  cat error_log.txt
Traceback (most recent call last):
  File "try_except.py", line 16, in Division200
    ans = 200 / x
ZeroDivisionError: integer division or modulo by zero
Traceback (most recent call last):
  File "try_except.py", line 16, in Division200
    ans = 200 / x
ZeroDivisionError: integer division or modulo by zero
```

### 3. Raise Exception

try_except_raise.py:

```python
import traceback


def Division200(x):
    try:
        # if x is not even number, raise error
        if x % 2 != 0:
            raise Exception("x is not Even number.")

        ans = 200 / x
        print ans

    except:
        # file will saved in current directory
        errorFile = open('error_log.txt', 'a')
        errorFile.write(traceback.format_exc())
        errorFile.close()
        print "Traceback Error is written in error_log.txt"


Division200(10)
Division200(11)
Division200(0)
```

Implementation:

```sh
$ python try_except.py
20
Traceback Error is written in error_log.txt
Traceback Error is written in error_log.txt

$ cat error_log.txt
Traceback (most recent call last):
  File "try_except.py", line 7, in Division200
    raise Exception("x is not Even number.")
Exception: x is not Even number.
Traceback (most recent call last):
  File "try_except.py", line 9, in Division200
    ans = 200 / x
ZeroDivisionError: integer division or modulo by zero
```