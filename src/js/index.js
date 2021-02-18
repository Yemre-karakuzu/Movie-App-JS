import Search from "./models/Search";
import { elements } from "./base";
import * as searchViews from "./views/searchViews"
import * as movieView from "./views/movieViews"
import { Movie } from "./models/Movie";

const state = {};

//Search Controller
const searchController = async() => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        state.search = new Search(keyword);
        await state.search.getResults();
        searchViews.clearResults()
        searchViews.clearInput()
        searchViews.displayResults(state.search.data);
    } else {
        alert("anahtar kelime giriniz.");
    }
}

elements.searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    searchController();
});

//Movie Controller

const movieController = async() => {
    const id = window.location.hash.replace("#", "");
    if (id) {
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
}

window.addEventListener("hashchange", movieController)