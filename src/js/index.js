//api https://api.themoviedb.org/3/
//key a956fd1eaf496fb9a4ff63da9852114a
//  https://api.themoviedb.org/3/search/movie?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US&page=1&include_adult=false

import Search from "./models/Search"
const search = new Search('abc')
console.log(search)
search.getResults();