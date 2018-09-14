# db_management.py
from flask import Flask, render_template, jsonify, request

import json
from flask_cors import CORS, cross_origin
import datetime
import requests
import urllib3

from flaskext.mysql import MySQL
from config import  MYSQL_DATABASE_USER, MYSQL_DATABASE_PASSWORD, \
                    MYSQL_DATABASE_DB, MYSQL_DATABASE_HOST


app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
CORS(app)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = MYSQL_DATABASE_USER
app.config['MYSQL_DATABASE_PASSWORD'] = MYSQL_DATABASE_PASSWORD
app.config['MYSQL_DATABASE_DB'] = MYSQL_DATABASE_DB
app.config['MYSQL_DATABASE_HOST'] = MYSQL_DATABASE_HOST

mysql.init_app(app)

urllib3.disable_warnings()


"""
This function connect to the showrooms db and rertieve all requested data.
Possible requests: 'all', 'name'.
'all' request sends back showroom detals for all showrroms.
'name' request sends back particular showroom detals.
"""
def get_shops(req, name=''):
	#connect to db
	connect = mysql.connect()
	cursor = connect.cursor()

	#compose request 
	if req == 'all':
		request = "SELECT * FROM shop"
	if req == 'name':
		request = "SELECT * FROM shop WHERE name=\'" + name + "\'"

	#send request
	cursor.execute(request)
	data = cursor.fetchall()

	#parse response in accordance with GUI fild names
	result = []
	fields = ['shopID','name', 'displayName', 'address', 'displayAddress', \
	'addressDetails', 'linkPIC', 'tags', 'linkFB', 'linkInst', 'linkWEB', \
	'descriptionShort', 'descriptionFull', 'locationLat', 'locationLng', \
	'locationPlaceID', 'openMon', 'closeMon', 'openTue', 'closeTue', \
	'openWed', 'closeWed', 'openThu', 'closeThu', 'openFri', 'closeFri', \
	'openSat', 'closeSat', 'openSun', 'closeSun', 'email', 'phone', 'priceRange']

	if data is not None:
		
		for shop in data:
			temp = {}
			#print shop
			for i,item in enumerate(zip(fields,shop)):

				if isinstance(item[1], datetime.timedelta):
					temp[item[0]] = item[1].__str__()
				elif item[0] == 'tags':
					temp[item[0]] = item[1].split(',')
					#print temp[item[0]]
				elif item[0] == 'linkInst':
					#check if pic link is not expired
					try:
						request = requests.get(temp['linkPIC'], verify=False, timeout=3)
					except requests.Timeout:
						temp['linkPIC'] = get_new_pic_link(item[1])
						#update db record with a new link
						cursor.execute("""
							UPDATE shop 
							SET linkPIC=%s
							WHERE name=%s
							""", (temp['linkPIC'], temp['name']))
						connect.commit()

					temp[item[0]] = item[1]
				else:
					temp[item[0]] = item[1]
			result.append(temp)

		connect.close()
		return result
	else:
		return 'Error while connecting to the database'


"""
This function retrive a new showroom profile picture from the Instagram public page
"""
def get_new_pic_link(inst_link):
	#retrieve page profile picture from Instagram page
	response = requests.get(inst_link)

	html_data = response.content
	ind = html_data.find("og:image")
	ind = html_data[ind:].find("https")+ind
	ind_2 = html_data[ind:].find('\"')+ind

	return html_data[ind:ind_2]

