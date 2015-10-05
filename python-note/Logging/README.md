## Example of Logging
example_logging.py :
```python
import logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')

logging.debug('Start of program')


def factorial(n):
    logging.debug('Start of factorial (%s)' % (n))
    total = 1
    for i in range(1, n+1):
        total *= i
        logging.debug('i is %s, total is %s' % (i, total))
    logging.debug('Return value is %s' % total)
    return total

print factorial(5)

logging.debug('End of program')

```

Result:
```sh
$ python example_logging.py
2015-10-05 16:44:23,015 - DEBUG - Start of program
2015-10-05 16:44:23,015 - DEBUG - Start of factorial (5)
2015-10-05 16:44:23,015 - DEBUG - i is 1, total is 1
2015-10-05 16:44:23,015 - DEBUG - i is 2, total is 2
2015-10-05 16:44:23,015 - DEBUG - i is 3, total is 6
2015-10-05 16:44:23,015 - DEBUG - i is 4, total is 24
2015-10-05 16:44:23,015 - DEBUG - i is 5, total is 120
2015-10-05 16:44:23,015 - DEBUG - Return value is 120
120
2015-10-05 16:44:23,015 - DEBUG - End of program
```

## Disable Logging
Log levels:

* debug (lowest)
* info
* warning
* error
* critical (highest)

disable_loglevels.py :

```python
import logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')

logging.disable(logging.DEBUG)

logging.debug('Start of program')


def factorial(n):
    logging.info('Start of factorial (%s)' % (n))
    total = 1
    for i in range(1, n+1):
        total *= i
        logging.warning('i is %s, total is %s' % (i, total))
    logging.error('Return value is %s' % total)
    return total

print factorial(5)

logging.critical('End of program')
```

Result:
```sh
$ python disable_loglevels.py
2015-10-05 16:54:26,419 - INFO - Start of factorial (5)
2015-10-05 16:54:26,419 - WARNING - i is 1, total is 1
2015-10-05 16:54:26,419 - WARNING - i is 2, total is 2
2015-10-05 16:54:26,419 - WARNING - i is 3, total is 6
2015-10-05 16:54:26,419 - WARNING - i is 4, total is 24
2015-10-05 16:54:26,419 - WARNING - i is 5, total is 120
2015-10-05 16:54:26,419 - ERROR - Return value is 120
120
2015-10-05 16:54:26,419 - CRITICAL - End of program
```