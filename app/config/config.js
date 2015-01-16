var config = {};

config.mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/timetracker';
config.port = process.env.PORT || 8080;

module.exports = config;