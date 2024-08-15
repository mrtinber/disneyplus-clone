export const MOVIE_BASE_URL = "https://api.themoviedb.org/3";
export const PICTURE_BASE_URL = "http://image.tmdb.org/t/p/original";
export const API_KEY = "fee1a33a20dbcc5e6960ef45c6fe4193";

export const getTrends = async () => {
    const response = await fetch(
        `${MOVIE_BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data;
};

export const MOVIE_BY_GENRE_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=fee1a33a20dbcc5e6960ef45c6fe4193";

export const getMoviesByGenre = async (id: number) => {
    const response = await fetch(`${MOVIE_BY_GENRE_URL}&with_genres=${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies by genre");
    }
    const data = await response.json();
    return data;
};

export const getSeries = async (companyId: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_companies=${companyId}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch series by company id");
    }
    const data = await response.json();
    return data;
};

export const getMoviesByCompany = async (companyId: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${companyId}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch movies by company id");
    }
    const data = await response.json();
    return data;
};

export const getMovieDetails = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch movie details")
    }
    const data = await response.json()
    return data
}

export const getSeriesDetails = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch series details")
    }
    const data = await response.json()
    return data
}

export const getSeriesEpisodes = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch series episodes")
    }
    const data = await response.json()
    return data
}