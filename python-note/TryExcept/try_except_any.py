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
