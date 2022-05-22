from collections import Counter
from bs4 import BeautifulSoup
import requests
import datetime as dt
import threading
import json
import time

# Artist + song NO1
requestartist = requests.get(
    "https://www.instagram.com/letsurprise2022/").text
artistBS = BeautifulSoup(requestartist, "html.parser")

songs = artistBS.find_all(
    "section", {"class": "_9eogI E3X2T"})
# artistsArr = []
# for i in songs:
#     onlytext = i.text.strip()
#     artistsArr.append(onlytext)

print(songs)
