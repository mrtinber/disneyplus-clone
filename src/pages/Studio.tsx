import { useEffect, useState } from "react";
import { Movie } from "../components/types/Movie";
import { PICTURE_BASE_URL } from "../services/ApiCall";

export const Studio = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=fee1a33a20dbcc5e6960ef45c6fe4193&with_companies=2"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch movies by genre");
            }
            const data = await response.json();
            console.log(data);
            setMovieList(data.results);
        } catch (error) {
            console.error("Failed to fetch movies", error);
        }
    };

    return (
        <div className="flex justify-around gap-10 flex-wrap items-center px-5 md:px-16 w-full">
            {movieList.map((item, index) => (
                <div
                    key={index}
                    className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all"
                >
                    <img
                        className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all"
                        src={`${PICTURE_BASE_URL}${item.poster_path}`}
                        alt={item.title}
                    />
                </div>
            ))}
        </div>
    );
};
