from bs4 import BeautifulSoup
import requests

url = "https://mnm.be/"

urlRequest = requests.get(url).text

soup = BeautifulSoup(urlRequest, "html.parser")

ul_tag = soup.find_all("ul", {"id": "main-menu"})
test = []

print(ul_tag)

for x in ul_tag:
    test.append(x.get_text().strip())

print(test)