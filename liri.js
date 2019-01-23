require("dotenv").config();

var get_movie = require('./movies.js').get_movie;
var getSong = require('./music.js').getSong;
var getConcert = require('./concerts.js').getConcert;

var command = process.argv[2];
var parameter = process.argv[3];


switch (command) {
    
    case 'movie-this':
        console.log('-------------------');
        get_movie(parameter);
    break;

    case 'spotify-this-song':
        console.log('-----------');
        getSong(parameter);
    break;
    
    case 'concert-this':
        console.log('-----------');
        getConcert(parameter);
    break;

    default:
        console.log('-----------');
        console.log(command + ' is a wrong command ! ');
    break;
}

