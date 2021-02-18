//api https://api.themoviedb.org/3/
//key a956fd1eaf496fb9a4ff63da9852114a
//  https://api.themoviedb.org/3/search/movie?api_key=a956fd1eaf496fb9a4ff63da9852114a&language=en-US&page=1&include_adult=false

import Search from "./models/Search";

const state = {

};

const searchController = async () => {
    const keyword = document.getElementById('txt-keyword').value;
    if (keyword) {
        state.search = new Search(keyword);
        await state.search.getResults();
        console.log(state.search.data);
    } else {
        alert("anahtar kelime giriniz.");
    }
}

document.getElementById('form-search').addEventListener('submit', function (e) {
    e.preventDefault();
    searchController();
    console.log("Form submitted");
});