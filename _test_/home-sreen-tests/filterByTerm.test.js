import testStringInput from './screens/HomeScreen'
const contentMovieOrTv = require("./pro-moviematch/screens/homeScreen");


function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }
  
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
    });
  });

  describe("Switch Mode for Movie or TV", () => {
      test("it should switch mode if boolean is true for TV else movies for false", () => {
        const input = "Hi";

        const output = "Hi";

        expect(testStringInput(input).expect.stringMatching(output))
      });
  });