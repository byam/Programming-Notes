import webbrowser
import sys

# $ python mapit.py TECH LAB PAAK, Shibuya
# ['mapit.py', 'TECH', 'LAB', 'PAAK,', 'Shibuya']
sys.argv
# Check if command line arguments were passed
if len(sys.argv) > 1:
    address = ' '.join(sys.argv[1::])
    # https://www.google.com/maps/place/<ADDRESS>
    webbrowser.open('https://www.google.com/maps/place/' + address)
else:
    print 'write your place'
