import bs4
import requests


def getAmazonPrice(productUrl):
    res = requests.get(productUrl)
    res.raise_for_status()

    # parsing as html
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    # select the price's css path
    elems = soup.select('#newOfferAccordionRow > div > a > h5 > div > div.a-column.a-span7.a-text-right.a-span-last > span.a-size-medium.a-color-price.header-price')
    # return the first element, withou spaces
    return elems[0].text.strip()

url = 'http://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994/'

price = getAmazonPrice(url)
print('The price is ' + price)
