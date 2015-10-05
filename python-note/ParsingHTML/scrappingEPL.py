import bs4
import requests


def getAmazonPrice(productUrl):
    res = requests.get(productUrl)
    res.raise_for_status()

    # parsing as html
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    # select the price's css path
    cssPATH = '#btable > tbody > tr:nth-child(3)'
    elems = soup.select(cssPATH)
    # return the first element, withou spaces
    return elems[0].text.strip()

url = 'http://www.soccerstats.com/results.asp?league=england_2015'

price = getAmazonPrice(url)
print('The price is ' + price)
