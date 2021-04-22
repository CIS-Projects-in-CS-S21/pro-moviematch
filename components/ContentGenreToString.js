export function genreToString(genre_ids) {
    var genre_strings = [];

    for (var i = 0; i < genre_ids.length; i++) {
        
        if(genre_ids[i] == 28) {
            genre_strings.push("Action");
        }

        else if(genre_ids[i] == 12) {
            genre_strings.push("Adventure");
        }

        else if(genre_ids[i] == 16) {
            genre_strings.push("Animation");
        }

        else if(genre_ids[i] == 35) {
            genre_strings.push("Comedy");
        }

        else if(genre_ids[i] == 80) {
            genre_strings.push("Crime");
        }

        else if(genre_ids[i] == 99) {
            genre_strings.push("Documentary");
        }

        else if(genre_ids[i] == 18) {
            genre_strings.push("Drama");
        }

        else if(genre_ids[i] == 10751) {
            genre_strings.push("Family")
        }

        else if(genre_ids[i] == 14) {
            genre_strings.push("Fantasy");
        }

        else if(genre_ids[i] == 36) {
            genre_strings.push("History");
        }

        else if(genre_ids[i] == 27) {
            genre_strings.push("Horror");
        }

        else if(genre_ids[i] == 10402) {
            genre_strings.push("Music");
        }

        else if(genre_ids[i] == 9648) {
            genre_strings.push("Mystery");
        }

        else if(genre_ids[i] == 10749) {
            genre_strings.push("Romance");
        }

        else if(genre_ids[i] == 878) {
            genre_strings.push("Science Fiction");
        }

        else if(genre_ids[i] == 10402) {
            genre_strings.push("Music");
        }

        else if(genre_ids[i] == 10770) {
            genre_strings.push("TV Movie");
        }

        else if(genre_ids[i] == 53) {
            genre_strings.push("Thriller");
        }

        else if(genre_ids[i] == 10752) {
            genre_strings.push("War");
        }

        else if(genre_ids[i] == 37) {
            genre_strings.push("Western");
        }

        else if(genre_ids[i] == 10759) {
            genre_strings.push("Action & Adventure");
        }

        else if(genre_ids[i] == 10762) {
            genre_strings.push("Kids");
        }

        else if(genre_ids[i] == 10763) {
            genre_strings.push("News");
        }

        else if(genre_ids[i] == 10764) {
            genre_strings.push("Reality");
        }

        else if(genre_ids[i] == 10765) {
            genre_strings.push("Sci-Fi & Fantasy");
        }

        else if(genre_ids[i] == 10766) {
            genre_strings.push("Soap");
        }

        else if(genre_ids[i] == 10767) {
            genre_strings.push("Talk");
        }

        else if(genre_ids[i] == 10768) {
            genre_strings.push("War & Politics");
        }
    }
    return genre_strings.join(", ");
}