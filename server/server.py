# server.py
from flask import Flask, render_template, jsonify, request

import json
from flask_cors import CORS, cross_origin

from flaskext.mysql import MySQL

from db_management import get_shops
from parsePageHtml import parse

import sys

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


"""
This is a rout function for sending detals for all showrooms.
"""
@app.route("/get_showroom_list", methods=["POST","GET"])
def showroom_list():
	showrooms = get_shops('all')

	return jsonify(showrooms)


"""
This is a route function for sending particular showrooms details 
from db records.
"""
@app.route('/showrooms/<showroom_name>')
def showroom_page(showroom_name=''):

	showroom = get_shops('name',showroom_name)

	return showroom


"""
This is a route fuction for sending social page posts to the GUI.
"""
@app.route("/get_posts/<showroom_name>", methods=["POST","GET"])
def get_posts(showroom_name):
	showroom = get_shops('name', showroom_name)[0]
	inst_link = showroom['linkInst']

	di = parse(inst_link)

	return jsonify(di)


if __name__ == '__main__':
    app.run(debug=True)
