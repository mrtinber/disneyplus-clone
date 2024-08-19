export interface Movie {
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
    release_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number;
    genres: [
        {
            id: number;
            name: string;
        }
    ];
    production_companies: [
        {
            id: number;
            logo_path: string;
            name: string;
        }
    ];
    production_countries: [
        {
            name: string;
            iso_3166_1: string;
        }
    ]
    tagline: string;
}
