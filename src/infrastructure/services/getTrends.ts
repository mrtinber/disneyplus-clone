import { API_KEY, MOVIE_BASE_URL } from "./constants";

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