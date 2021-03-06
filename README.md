# Time Logger API

[![Build Status](https://travis-ci.org/tloger/express-mongo-api.svg?branch=master)](https://travis-ci.org/tloger/express-mongo-api)

API for time tracker project using:-
* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Express 4](http://expressjs.com/)
* [Moongoose](http://mongoosejs.com/index.html)

Documentation for the API:- http://docs.tloger.apiary.io/#

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [MongoDB](https://www.mongodb.com/) installed and running.

```sh
git clone https://github.com/tloger/express-mongo-api.git # or clone your own fork
cd express-mongo-api
npm install
node server.js
```

Your app should now be running on [http://localhost:8080](http://localhost:8080/)

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this button.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Heroku, check out https://devcenter.heroku.com/
