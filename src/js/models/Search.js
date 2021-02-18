export default class Search {
    constructor(keyword) {
        this.keyword = keyword
    }
    async getResults() {
        const api_key = "a956fd1eaf496fb9a4ff63da9852114a";
        const base_url = "https://api.themoviedb.org/3";
        const response = await fetch(base_url + "/search/movie?api_key=" + api_key + "&page=1&query=" + this.keyword);
        this.data = await response.json();
        console.log(data.results)
    }
}