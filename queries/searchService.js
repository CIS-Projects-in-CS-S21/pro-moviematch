var unirest = require("unirest");

var req = unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup");

req.query({
	"source_id": "tv/63926",
	"source": "tmdb",
	"country": "us"
});

req.headers({
	"x-rapidapi-key": "789443045cmshc58307b0d55a069p13f50cjsn36b252d16006",
	"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});