import shuffleArray from '../utils/shuffleArray'

export const SwipeableMovies = shuffleArray(getPopularMovies()
  /* [
  {
    pic: require('../assets/movieposters/boratposter.jpg'),
    title: 'Borat',
    description: 'Kazakh journalist Borat Sagdiyev travels to America to make a documentary. As he zigzags across the nation, Borat meets real people in real situations with hysterical consequences. His backwards behavior generates strong reactions around him exposing prejudices and hypocrisies in American culture.',
  },
  {
    pic: require('../assets/movieposters/airbudposter.jpg'),
    title: 'Air Bud',
    description: 'A lonely boy befriends a stray dog who has a natural talent for basketball and together they experience the highs and lows of life as their friendship remains solid through a series of escapades.',
  },
  {
    pic: require('../assets/movieposters/airbudposter.jpg'),
    title: 'Air Bud',
    description: 'A lonely boy befriends a stray dog who has a natural talent for basketball and together they experience the highs and lows of life as their friendship remains solid through a series of escapades.',
  },
  {
    pic: require('../assets/movieposters/airbudposter.jpg'),
    title: 'Air Bud',
    description: 'A lonely boy befriends a stray dog who has a natural talent for basketball and together they experience the highs and lows of life as their friendship remains solid through a series of escapades.',
  },
  {
    pic: require('../assets/movieposters/airbudposter.jpg'),
    title: 'Air Bud',
    description: 'A lonely boy befriends a stray dog who has a natural talent for basketball and together they experience the highs and lows of life as their friendship remains solid through a series of escapades.',
  },
  {
    pic: require('../assets/movieposters/airbudposter.jpg'),
    title: 'Air Bud',
    description: 'A lonely boy befriends a stray dog who has a natural talent for basketball and together they experience the highs and lows of life as their friendship remains solid through a series of escapades.',
  },
] */
)

function getPopularMovies() {
  let requestString = "https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1";
  var movies = [];

  fetch(requestString)
  .then(response => {
    return response.json();
  })
  .then(response => {
    movies = createMovieArr(response);
  })
  .catch(err => {
    console.error(err);
  });

  return movies;
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

function getPoster(id) {
  let requestString = "https://image.tmdb.org/t/p" + id;
  var poster = fetch(requestString);
  return poster;
}