const request = require('request');
var sourceID = 399566

var mode = 'movie'

var finalID = mode + '/' + sourceID

const options = {
  method: 'GET',
  url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup',
  qs: {source_id: finalID, source: 'tmdb', country: 'us'},
  headers: {
    'x-rapidapi-key': '939203f5d9msh8669d0a65c92f36p1977dfjsn088d46e4370a',
    'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});