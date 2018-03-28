# server.py
from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

showrooms : [
			{id: 1, name: 'shop1', address: 'address1', pic: "pic_url", tags: ['women','decor'], details: '', social: {
		        	fb_link: 'http://no.no',
		        	insta_link: 'http://'
		        }},
			{id: 2, name: 'shop2', address: 'address2', pic: "pic_url2", tags: ['men', 'shoes'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			{id: 3, name: 'shop3', address: 'address3', pic: "pic_url3", tags: ['women', 'accessories'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/showrooms/'+showroom[1].id):
    return jsonify(showroom[1])


if __name__ == '__main__':
    app.run()
