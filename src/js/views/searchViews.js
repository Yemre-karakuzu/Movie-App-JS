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
                        <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" alt="${movie.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.overview}.</p>
                        </div>
                    </div>
                </div>
        </div>
        `;

        elements.searchResults.insertAdjacentHTML("beforeend", html)
    });
}