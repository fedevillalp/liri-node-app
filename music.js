var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});


function getSong(song_name){

    if(!song_name){
        var song_name = 'Ace of Base';
    }

    spotify
            .search({ type: 'track', query: song_name })
            .then(function(response) {
                console.log('* Artist Name: ' + response.tracks.items[0].artists[0].name);
                console.log('* Song Name: ' + response.tracks.items[0].name);
                console.log('* Album Name: ' +response.tracks.items[0].album.name);
                console.log('* Preview Link: ' + response.tracks.items[0].href);
            })
            .catch(function(err) {
                console.log(err);
            });
}

module.exports = {
    getSong: getSong
}