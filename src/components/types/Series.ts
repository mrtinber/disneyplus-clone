export interface Series {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number | number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    last_air_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number;
    number_of_seasons: number;
    genres: [
        {
            id: number;
            name: string;
        }
    ];
}
