def Division100(x):
    try:
        ans = 100 / x
        print ans
    except ZeroDivisionError:
        print "Error is just occured HERE."


Division100(10)
Division100(0)
