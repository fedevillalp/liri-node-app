var axios = require("axios");
var moment = require('moment');

function getConcert(concert){
    
    var url = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";

    axios.get(url).then(
        function(response) {
            
            response.data.forEach(element => {
                console.log('-------------------');
                console.log('Artist: '+ element.lineup[0]);
                console.log('Lineup: '+ element.lineup);
                console.log('Venue Name: ' + element.venue.name);
                console.log('Venue City: ' + element.venue.city);
                console.log('Venue State: ' + element.venue.region);
                console.log('Date: '+ moment(element.datetime).format('LLLL'));
                console.log('-------------------');
            });

            return response;
        }
    ); 
    
}

module.exports = {
    getConcert: getConcert
}