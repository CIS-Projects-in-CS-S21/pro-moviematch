/*
  TMDB Movie Genre IDs:
    Action          28
    Adventure       12
    Animation       16
    Comedy          35
    Crime           80
    Documentary     99
    Drama           18
    Family          10751
    Fantasy         14
    History         36
    Horror          27
    Music           10402
    Mystery         9648
    Romance         10749
    Science Fiction 878
    TV Movie        10770
    Thriller        53
    War             10752
    Western         37

  TMDB TV Genre IDs:
    Action & Adventure  10759
    Animation           16
    Comedy              35
    Crime               80
    Documentary         99
    Drama               18
    Family              10751
    Kids                10762
    Mystery             9648
    News                10763
    Reality             10764
    Sci-Fi & Fantasy    10765
    Soap                10766
    Talk                10767
    War & Politics      10768
    Western             37
*/

/** Switches the queue to load in TV shows or movies. Carried out by a toggle in settings page.
*   @param  {boolean)        contentType boolean used to determine if content is tv on true or movies on false
*   @param  {number}         offset used to track page from which movie or tv queue is pulled from
*   @param  {Array[boolean]} genres tracks the genres from which the user has selected in the settings page
*   @return {string}         returns string to fetch() in order to pull appropriate content base on parameters
*/
export function contentMovieOrTV(contentType, offset, genres) {

    var fetchThis;

    if(contentType == true) {

      return fetchThis = "https://api.themoviedb.org/3/discover/tv?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false" + "&page=" + offset + "&with_genres=" + genres;
    
    }
     
    return fetchThis = "https://api.themoviedb.org/3/discover/movie?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false" + "&page=" + offset + "&with_genres=" + genres;
  }

/** Filters the queue base on movie genres. This is taken from settings and selection of genres
*   under the Movie Genres.
*   @param  {Array[boolean]} contentGenre passes an array of booleans that indicate if genre was selected
*                            by user
*   @return {Array[number]}  returns an array of the genres selected
*/
function movieGenresFilter(contentGenre) {
    
    var arr = [];

    // Action
    if (contentGenre[0]) {
        arr.push(28);
      }

      // Adventure
      if (contentGenre[1]) {
        arr.push(12);
      }

      // Animation
      if (contentGenre[2]) {
        arr.push(16);
      }

      // Comedy
      if (contentGenre[3]) {
        arr.push(35);
      }

      // Crime
      if (contentGenre[4]) {
        arr.push(80);
      }

      // Documentary
      if (contentGenre[5]) {
        arr.push(99);
      }

      // Drama
      if(contentGenre[6]) {
        arr.push(18);
      }

      // Family
      if(contentGenre[7]) {
        arr.push(10751);
      }

      // Fantasy
      if(contentGenre[8]) {
        arr.push(14);
      }

      // History
      if(contentGenre[9]) {
        arr.push(36);
      }

      // Horror
      if(contentGenre[10]) {
        arr.push(27);
      }

      // Music
      if(contentGenre[11]) {
        arr.push(10402);
      }

      // Mystery
      if(contentGenre[12]) {
        arr.push(9648);
      }

      // Romance
      if(contentGenre[13]) {
        arr.push(10749);
      }

      // Science Fiction
      if(contentGenre[14]) {
        arr.push(878);
      }

      // TV Movie
      if(contentGenre[15]) {
        arr.push(10770);
      }

      // Thriller
      if(contentGenre[16]) {
        arr.push(53);
      }

      // War
      if(contentGenre[17]) {
        arr.push(10752);
      }

      // Western
      if(contentGenre[18]) {
        arr.push(37);
      }
      
    return arr;
}

/** Filters the queue base on TV genres. This is taken from settings and selection of genres
*   under the TV Genres.
*   @param {Array[boolean]} contentGenre passes an array of booleans that indicate if genre was selected
*                           by user
*   @return {Array[number}  returns an array of the genres selected
*/
function tvGenresFilter(contentGenre) {
    
    var arr = [];

    //TV Genres 
      
      // Action & Adventure
      if (contentGenre[19]) {
        
        arr.push(10759);
      
      }

      // Animation
      if (contentGenre[20]) {
        
        arr.push(16);
      
      }
      
      // Comedy
      if (contentGenre[21]) {
        
        arr.push(35);
      
      }

      // Crime
      if (contentGenre[22]) {
        
        arr.push(80);
      
      }

      // Documentary
      if (contentGenre[23]) {
        
        arr.push(99);
      
      }

      // Drama
      if (contentGenre[24]) {
        
        arr.push(18);
      
      }

      // Family
      if (contentGenre[25]) {
        
        arr.push(10751);
      
      }

      // Kids
      if (contentGenre[26]) {
        
        arr.push(10762);
      
      }

      // Mystery
      if (contentGenre[27]) {
        
        arr.push(9648);
      
      }

      // News
      if (contentGenre[28]) {
        
        arr.push(10763);
      
      }

      // Reality
      if (contentGenre[29]) {
        
        arr.push(10764);
      
      }

      // Sci-Fi & Fantasy
      if (contentGenre[30]) {
        
        arr.push(10765);
      
      }

      // Soap
      if (contentGenre[31]) {
        
        arr.push(10766);
      
      }

      // Talk
      if (contentGenre[32]) {
        
        arr.push(10767);
      
      }

      // War & Politics
      if (contentGenre[33]) {
        
        arr.push(10768);
      
      }

      // Western
      if (contentGenre[34]) {
        
        arr.push(37);
      
      }

    return arr;
}


/** Turns content genre array into an array of TMDB genre ids for queries
*   @param  {Array[boolean]} contentGenre passes a list of content user whats to queue through
*   @param  {boolean}        contentType  tells if user wish to go thorugh movie or tv shows
*   @return {Array[number]}  returns the appropiate url for fetch()
*/
export function genreToArr(contentGenre, contentType) {
    
    if (contentType == true) {
      return tvGenresFilter(contentGenre)
    
    }

    return movieGenresFilter(contentGenre);

  }
