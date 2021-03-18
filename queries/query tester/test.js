async function getPopularMovies() {
    let requestString = "https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1"
    var movies = [];
    var data;
  
    await fetch(requestString)
      .then(res => res.json())
      .then(res => data = res);
  
    for (i = 0; i < data.results.length; i++) {
      movies[i] = 
      {
        pic: '',
        title: data.results[i].title,
        caption: data.results[i].overview,
      }
    }
    return movies;
  }
  
  
  var arr = getPopularMovies();
  console.log(arr);