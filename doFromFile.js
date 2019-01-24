var get_movie = require('./movies.js').get_movie;
var getSong = require('./music.js').getSong;
var getConcert = require('./concerts.js').getConcert;

var fs = require('fs');
var dataArr = [];


function fromFile(){
    
    fs.readFile('random.txt', 'utf8',  function(err, data) {

        if (err) {
            return console.log(error);
        }

        dataArr = data.split(",");
        var command = dataArr[0];
        var parameter = dataArr[1]

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
                console.log(command + ' is a wrong command ! Please try again. ');
            break;
        }
        

    });
    return dataArr;
}



module.exports = {
    fromFile : fromFile
}