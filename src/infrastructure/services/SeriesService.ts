import { API_KEY } from "./constants";

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

export const getSeriesDetails = async (id: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch series details");
    }
    const data = await response.json();
    return data;
};

export const getSeriesEpisodes = async (id: number, seasonNumber: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch series episodes");
    }
    const data = await response.json();
    return data;
};

export const getSeriesRecommendations = async (id: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch recommendations for this series");
    }
    const data = await response.json();
    return data;
};

export const getSeriesCredits = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`)
    if(!response.ok) {
        throw new Error("Failed to fetch credits for this movie")
    }
    const data = await response.json()
    return data
}