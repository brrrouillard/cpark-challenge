# cPark Challenge

## Prerequisites
- NodeJS
- An Android or iOS phone

## Installing and Running
You can already play with the API server live on [Heroku](https://cpark-reports.herokuapp.com/report/).
The client is still in development.

## Purpose
I built this app for my internship at cPark. The goal was to create an app that displays the last and closest reports sent by the community to an API server.

The client is written using React Native. It allows the user to send reports to the server and display the list of those reports, filtered by time and/or distance.

## API
| Path                | Method  | Desciption                  |
|---------------------|---------|-----------------------------|
| `/report`           | POST    | Register a new report in DB |
| `/report/:lat/:long`| GET     | Get the list of reports     |

The list of reports depends on the position: `lat` is the latitude and `long` the longitude. It only shows reports in a 10km distance.

## Built With
* React Native
* Express (nodeJS)
* MongoDB
* [Visual Studio Code](https://code.visualstudio.com/) 

## Authors

* **Matthieu Brouillard** - [brrrouillard](https://twitter.com/brrrouillard)
