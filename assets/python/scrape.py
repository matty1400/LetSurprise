from collections import Counter
from bs4 import BeautifulSoup
import requests
import json

wishing = ("djset")


requestproduct = requests.get(
    "https://www.bol.com/be/nl/s/?searchtext=" + wishing).text
productBS = BeautifulSoup(requestproduct, "html.parser")

# product img
productimg = productBS.find_all("div", {"class": "h-o-hidden"})

Firstimg = productimg[0]

for link in Firstimg('img'):
    productimageURL = link.get('src')
print(productimageURL)

# product Naam
productName = productBS.find_all("div", {"class": "product-title--inline"})
productNameTxt = productName[0].text

# product prijs
productprijs = productBS.find_all("span", {"class": "promo-price"})
productpr = productprijs[0].text.strip()
pijstje = productpr.replace("  -", "")
print(pijstje)
