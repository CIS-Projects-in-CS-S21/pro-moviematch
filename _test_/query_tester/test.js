var exportArray = [];

async function fetchMoviesJSON() {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1');
  const movies = await response.json();
  return parseMovies(movies.results);
}

function parseMovies(movieArray) {
  var parsedMovies = [];
  var i;
  var imgurl= "https://image.tmdb.org/t/p/original";
  for (i = 0; i < movieArray.length; i++) {
    parsedMovies[i] =
    {
        pic: imgurl.concat(movieArray[i].poster_path),
        title: movieArray[i].title,
        caption: movieArray[i].overview,
    }
  }
  return parsedMovies
}
fetchMoviesJSON().then(data => {
  //console.log(data);
  exportArray = data;
});
exportArray = await fetchMoviesJSON()
export default exportArray;

// export default fetchMoviesJSON().then(movies => {
//   movies; // fetched movies
//   console.log(movies.results);
// });



// async function getPopularMovies() {
//     let requestString = "https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1"
//     var movies = [];
//     var imgurl= "https://image.tmdb.org/t/p/original";
//     var data;
  
//     fetch(requestString).then(async (response) => {
//       const data = await response.json();
//       console.log(data.results)
//     })
//     for (i = 0; i < data.results.length; i++) {
//       movies[i] = 
//       {
//         pic: imgurl.concat(data.results[i].poster_path),
//         title: data.results[i].title,
//         caption: data.results[i].overview,
//       }
//     }
//     console.log(movies);
//     return movies;
//   }
// const movies = await getPopularMovies();
// console.log("AHHHHHHHH");
// console.log(movies);