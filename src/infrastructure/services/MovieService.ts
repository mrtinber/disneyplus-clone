import { API_KEY, MOVIE_BY_GENRE_URL } from "./constants";

export const getMoviesByGenre = async (id: number) => {
    const response = await fetch(`${MOVIE_BY_GENRE_URL}&with_genres=${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies by genre");
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

export const getMovieRecommendations = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch recommendations for this movie")
    }
    const data = await response.json()
    return data
}

export const getMovieCredits = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch credits for this movie")
    }
    const data = await response.json()
    return data
}