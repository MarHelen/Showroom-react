# parsePageHtml.py

import requests
from BeautifulSoup import BeautifulSoup


"""
This is a function for parsing html of the showroom public Instagram page.
It is an ugly solution, but the only possible way to retrieve public page posts
for development stage project after the last Instagram API rule changes.
"""
def parse(link):
	post_amount = 12

	response = requests.get(link)
	response.encoding = 'utf-8'
	html_data = response.content
	
	#Create the soup object from the HTML data
	soup = BeautifulSoup(html_data)

	fooId = soup.findAll('script')

	di = []

	ind = html_data.find('edge_owner_to_timeline_media')

	for i in range(post_amount):
		curr = {}

		ind1 = html_data[ind:].find('text') + 7
		ind2 = html_data[ind+ind1:].find('\"')

		curr_text = html_data[ind+ind1:ind2+ind+ind1]

		ind = ind + ind2 + ind1

		ind1 = html_data[ind:].find('display_url') + 14
		ind2 = html_data[ind+ind1:].find('\"')

		curr_pic = html_data[ind+ind1:ind2+ind+ind1]

		ind += ind2 + ind1

		curr['img'] = curr_pic
		curr['text'] = curr_text
		curr['link'] = ''

		di.append(curr)

	return di