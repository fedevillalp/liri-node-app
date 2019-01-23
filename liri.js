require("dotenv").config();
var axios = require("axios");

var get_movie = require('./movies.js').get_movie;

var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
//console.log(keys.spotify.secret);
//console.log(process.env.SPOTIFY_ID);

var command = process.argv[2];
var parameter = process.argv[3];

switch (command) {
    
    case 'movie-this':
        console.log('-------------------');
        get_movie(parameter);
    break;

    case 'movie-this':
        console.log('-----------');
        console.log('command: ' + command)
    break;
    
    case 'movie-this':
        console.log('-----------');
        console.log('command: ' + command)
    break;

    default:
        console.log('-----------');
        console.log(command + ' is a wrong command ! ');
    break;
}

