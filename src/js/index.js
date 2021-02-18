import Search from "./models/Search";
import { elements } from "./base";
import * as searchViews from "./views/searchViews"

const state = {

};

const searchController = async () => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        state.search = new Search(keyword);
        await state.search.getResults();
        searchViews.displayResults(state.search.data);
    } else {
        alert("anahtar kelime giriniz.");
    }
}

elements.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    searchController();
    console.log("Form submitted");
});