## Kyiv-showrooms react web service

This repository contains sources for a web service for advertizing Kyiv (Ukraine) fashion industry brands.

#### Technologies and key words

- Python Flask
- MySQL/flaskext.mysql
- JavaScript
- Reactjs
- axios
- react-router
- react-bootstrap
- react-google-maps

#### Content

The service idea is to show a list of brands with all it's contacts/social/direction details.

There 2 pages: main page and showroom page.

The main page contains mentioned before list and a map with all shop locations.

![MainPage](https://monosnap.com/file/JqtcGZsSBKepuTRxaRIT2RfNzec8nW)

Each react-google-map *Marker* has an *InfoWindow* with showrt shop details. Some parts of details contain Ukrainian or Russian language along with English interface as an authentic brand information taken from oficial sources. (Google translate API to be added.)

![InfoWindow](https://monosnap.com/file/7SZbzRHJl35p5Cx8hc2C0xIVraJaNa)

The list below contains a filter for provided tags.

![](https://monosnap.com/file/4f47MWmFWQGc8f2aQhZD8RuYJnBXT4)

Also each brand item can be expanded for checking it's short details as on Map.

![](https://monosnap.com/file/PWlpIkBjkTLYAzYCBBOwaL6E9ZxENP)

Both Showroom details sources have links to the full page. Full showroom page contains more detailed description with contacts, social media links and a little sneak peak into it's Instagram page.

![ShowroomPage](https://monosnap.com/file/pLhapDuD5zlSPVPI8eVTZtYAXNn6LV)

If the brand has a showroom place, it's page contains working hours information with current open state in accordance to shop local time and a collaplsable schedule.

![ShowroomHours](https://monosnap.com/file/IRQG2Od0eRral6NfmucJGoVdM3fJgl)

In the botton of the page there are also brand's social media links and a map with the only marker of this shop location.

![ShowroomPageBottom](https://monosnap.com/file/wMTNjLP6La5DstnE290N5WJOuEF5Yb)



#### Technical details

This is a web service with Python backend, implemented with Flask framework.

Showrooms details information inquires from MySQL db. DB has only one table (NoSQL may be also used).

Connection with the db set with Flask *flaskext.mysql* using direct inquries. (*SQLAlchemy* may be used instead, although it is quite slower.)

GUI implemented as a React web server.





