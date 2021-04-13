import {contentMovieOrTV, movieGenresFilter, tvGenresFilter, genreToArr} from "../../components/Filters"


describe("URL:", () => {
    it("returns url base on contentType, offset, genres", () => {
        const contentType = true;
        const offset = 0;
        const genres = null;

        const output = "https://api.themoviedb.org/3/discover/tv?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" + "&with_genres=" + genres;
        
        expect(contentMovieOrTV(contentType, 0, genres)).not.toEqual(output)
    })
})


describe("URL:", () => {
    it("returns url base on contentType, offset, genres", () => {
        const contentType = true;
        const offset = 0;
        const genres = null;

        const output = "https://api.themoviedb.org/3/discover/tv?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0" + "&with_genres=" + genres;
        
        expect(contentMovieOrTV(contentType, offset, genres)).toEqual(output)
    })
})

describe("URL:", () => {
    it("returns url base on contentType, offset, genres", () => {
        const contentType = false;
        const offset = 0;
        const genres = null;

        const output = "https://api.themoviedb.org/3/discover/tv?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0" + "&with_genres=" + genres;
        
        expect(contentMovieOrTV(contentType, offset, genres)).not.toEqual(output)
    })
})

describe("Movie Filter", () => {
    it("returns the filter(s) for movies", () => {
        var output = [28]
        const contentGenre = [true, false, false, false, false, false, false,
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false,
            false, false, false, false, false, false, false]

        
        expect(movieGenresFilter(contentGenre)).toEqual(output)
    })

    
})

describe("TV Filter", () => {
    it("returns the filter(s) for TV", () => {
        var output = [37]
        const contentGenre = [false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false,
            false, false, false, false, false, false, true]

        
        expect(tvGenresFilter(contentGenre)).toEqual(output)
    })

    
})

describe("Overall TV Filter", () => {
    it("returns the filter(s) for TV", () => {
        var output = [37]

        const contentType = true

        const contentGenre = [false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false,
            false, false, false, false, false, false, true]

        
        expect(genreToArr(contentGenre, contentType)).toEqual(output)
    })

    
})

describe("Overall TV Filter", () => {
    it("returns the filter(s) for TV", () => {
        var output = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764,
                        10765, 10766, 10767, 10768, 37]

        const contentType = true

        const contentGenre = [true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, 
            true, true, true, true, true, true, true, 
            true, true, true, true, true, true, true,
            true, true, true, true, true, true, true]

        
        expect(genreToArr(contentGenre, contentType)).toEqual(output)
    })

    
})

describe("Overall Movie Filter", () => {
    it("returns the filter(s) for TV", () => {
        var output = [28]

        const contentType = false

        const contentGenre = [true, false, false, false, false, false, false,
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false,
            false, false, false, false, false, false, false]

        
        expect(genreToArr(contentGenre, contentType)).toEqual(output)
    })

    
})


describe("Overall Movie Filter", () => {
    it("returns the filter(s) for TV", () => {
        var output = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648,
                        10749, 878, 10770, 53, 10752, 37]

        const contentType = false

        const contentGenre = [true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, 
            true, true, true, true, true, true, true, 
            true, true, true, true, true, true, true,
            true, true, true, true, true, true, true]

        
        expect(genreToArr(contentGenre, contentType)).toEqual(output)
    })

    
})