function getPopularMovies() {
    let requestString = "https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1"
    //var movies = [];

    fetch(requestString)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      console.log(createMovieArr(response));
      movieArr = createMovieArr(response).slice();
      console.log("movieArr");
      console.log(movieArr);
    })
}

function createMovieArr(response) {
    var movies = [];
  
    for (i = 0; i < response.results.length; i++) {
      movies[i] = 
      {
        pic: getPoster(response.results[i].poster_path),
        title: response.results[i].title,
        description: response.results[i].overview,
      }
    }
  
    return movies;
}