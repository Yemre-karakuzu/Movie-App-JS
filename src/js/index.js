//api https://api.themoviedb.org/3/
//key a956fd1eaf496fb9a4ff63da9852114a
//  https://api.themoviedb.org/3/search/movie?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US&page=1&include_adult=false

async function getResults(keyword) {
    const api_key = "a956fd1eaf496fb9a4ff63da9852114a";
    const base_url = "https://api.themoviedb.org/3";
    const response = await fetch(base_url + "/search/movie?api_key=" + api_key + "&page=1&query=" + keyword);
    const data = await response.json();
    console.log(data.results)
}

getResults('abc');