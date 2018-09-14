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

![MainPage](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2012-21-30.png?raw=true)

Each react-google-map *Marker* has an *InfoWindow* with showrt shop details. Some parts of details contain Ukrainian or Russian language along with English interface as an authentic brand information taken from oficial sources. (Google translate API to be added.)

![InfoWindow](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2012-49-02.png?raw=true)

The list below contains a filter for provided tags.

![Tags](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2012-57-37.png?raw=true)

Also each brand item is callapsable with it's short details inside.

![Expand](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Screen%20Shot%202018-09-14%20at%202.53.51%20PM%202018-09-14%2014-54-47.png?raw=true)

Both Showroom details sources have links to the full page. Full showroom page contains more detailed description with contacts, social media links and a little sneak peak into it's Instagram page.

![ShowroomPage](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2015-35-15.png?raw=true)

If the brand has a showroom place, it's page contains working hours information with current open state in accordance to shop local time and a collaplsable schedule.

![ShowroomHours](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2015-40-45.png?raw=true)

In the botton of the page there are also brand's social media links and a map with the only marker of this shop location.

![ShowroomPageBottom](https://github.com/MarHelen/Showroom-react/blob/master/documentation/Showroom-react%202018-09-14%2015-37-22.png?raw=true)



#### Technical details

This is a web service with Python backend, implemented with Flask framework.

Showrooms details information inquires from MySQL db. DB has only one table (NoSQL may be also used).

Connection with the db set with Flask *flaskext.mysql* using direct inquries. (*SQLAlchemy* may be used instead, although it is quite slower.)

GUI implemented as a React web server.





