import {genreToString} from '../../components/ContentGenreToString'

describe("Genre to string", () => {
    it("returns the genre in string format", () => {
        const genre_ids = [28];
        const output = "Action";

        expect(genreToString(genre_ids)).toEqual(output)
    })
})

describe("Genre to string", () => {
    it("returns the genre in string format", () => {
        const genre_ids = [10768];
        const output = "War & Politics";

        expect(genreToString(genre_ids)).toEqual(output)
    })
})

describe("Genre to string", () => {
    it("returns the genre in string format", () => {
        const genre_ids = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749,
                            878, 10402, 10770, 53, 10752, 37, 10759, 10762, 10763, 10764,
                            10765, 10766, 10767, 10768];
        const output = "Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, Music, TV Movie, Thriller, War, Western, Action & Adventure, Kids, News, Reality, Sci-Fi & Fantasy, Soap, Talk, War & Politics";

        expect(genreToString(genre_ids)).toEqual(output)
    })
})