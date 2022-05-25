from collections import Counter
from tracemalloc import stop
from bs4 import BeautifulSoup
import requests
import json
import mysql.connector
import string

import numpy as np


wishing = []

# item krijgen
try:
    connection = mysql.connector.connect(host='ID362590_letsurprise.db.webhosting.be',
                                         database='ID362590_letsurprise',
                                         user='ID362590_letsurprise',
                                         password='prijstjelala123')

    sql_select_Query = "select productName from products"
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)
    # get all records
    records = cursor.fetchall()

    for row in records:
        wishing.append(row[0])

except mysql.connector.Error as e:
    print("Error reading data from MySQL table", e)
finally:
    if connection.is_connected():
        connection.close()
        cursor.close()


itemList = []
for wish in wishing:

    requestproduct = requests.get(
        "https://www.bol.com/be/nl/s/?searchtext=" + wish).text
    productBS = BeautifulSoup(requestproduct, "html.parser")

    # product img
    productimg = productBS.find_all("div", {"class": "h-o-hidden"})

    Firstimg = productimg[0]

    for link in Firstimg('img'):
        productimageURL = link.get('src')
    # print(productimageURL)

    # product Naam
    productName = productBS.find_all("div", {"class": "product-title--inline"})
    productNameTxt = productName[0].text
    productNameTxt2 = productNameTxt.replace("\n", "")
    # print(productNameTxt)

    # product prijs
    productprijs = productBS.find_all("span", {"class": "promo-price"})
    productpr = productprijs[0].text.strip()
    prijsje = productpr.replace("  -", "")
    prpr = ""
    for lala in prijsje:
        if lala.isdigit() == True:
            prpr += lala
        else:
            prpr += ","

    prpr2 = ""

    for dup in prpr:
        if dup.isdigit() == True:
            prpr2 += dup

        if "," not in prpr2 and dup.isdigit() == False:
            prpr2 += dup

    # print(prpr2)

    xItem = productimageURL, productNameTxt2, prpr2

    # for burger in xItem:
    itemList.append(xItem)

    # [(productimageURL,productNameTxt,prpr2)
    # (productimageURL,productNameTxt,prpr2)
    # (productimageURL,productNameTxt,prpr2)]

    # for x in range(len(wishing)):
    urlItem = (itemList[len(itemList)-1][0])
    nameItemx = (itemList[len(itemList)-1][1])
    priceItem = (itemList[len(itemList)-1][2])

    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='letsurprise',
                                             user='root',
                                             password='root')
        insert_stmt = (
            "INSERT INTO scrapeditems(price, img_url, nameItem, searchName)"
            "VALUES (%s, %s, %s, %s)"
        )
        data = (priceItem, urlItem, nameItemx, wish)

        cursor = connection.cursor()
        cursor.execute(insert_stmt, data)
        connection.commit()
        print(cursor.rowcount, "Record inserted successfully")
        cursor.close()

    except mysql.connector.Error as error:
        print("Failed to insert record {}".format(error))

    finally:
        if connection.is_connected():
            connection.close()
            print("MySQL connection is closed")
