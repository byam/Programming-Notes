## BeautifulSoup module
parsingHTML.py :
```python
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
```

Result:
```sh
$ python3 parsingHTML.py
The price is $22.86
```

## Get England Premiear League's all match results
```python
>>> import bs4
>>> import requests
>>> url = 'http://www.soccerstats.com/results.asp?league=england_2014'
>>> res = requests.get(url)
>>> res.status_code
200
>>> soup = bs4.BeautifulSoup(res.text, 'html.parser')
>>> tag_ids = soup.findAll('tr', {"class": "odd"})
>>> len(tag_ids)
380
>>> tag_ids[0].text.strip()
'Sat. 17 Aug. \n11:45\n\xa0Liverpool - Stoke City\n\n1-0\n\n\r\n(1-0)'
```

### Summary
![alt text][file_paths]

[file_paths]: https://github.com/byam/Byam-Programming-Notes/blob/master/python-note/ParsingHTML/parse_html.png "Parsing HTML Recap"
