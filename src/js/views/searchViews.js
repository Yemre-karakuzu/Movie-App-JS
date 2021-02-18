import { elements } from "../base"

export const clearInput = () => {
    elements.searchInput.value = "";
}
export const clearResults = () => {
    elements.searchResults.innerHTML = "";
}


export const displayResults = data => {
    data.results.forEach(movie => {
        const html = `
        <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" alt="${movie.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">
                                <span class="badge badge-primary" style="background:cadetblue">${movie.vote_average}</span> 
                                <a href="#${movie.id}">${movie.title}</a>
                            </h5>
                            <p class="card-text">${movie.overview}.</p>
                        </div>
                    </div>
                </div>
        </div>
        `;
        elements.searchResults.insertAdjacentHTML("beforeend", html)
    });
}