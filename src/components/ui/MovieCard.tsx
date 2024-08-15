import { Link } from "react-router-dom";
import { PICTURE_BASE_URL } from "../../services/ApiCall";
import { Movie } from "../types/Movie";
import { useState } from "react";

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Link
            to={`movie/details/${movie.id}`}
            className="hover:scale-110 transition-all h-44"
        >
            {!isLoaded && (
                <div className="text-white text-center content-center bg-slate-700 rounded-lg cursor-pointer w-[110px] h-[146px] md:w-[260px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all">
                    {movie.title}
                </div>
            )}
            <img
                src={`${PICTURE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title || "Poster"}
                onLoad={handleImageLoad}
                className={`md:w[260px] rounded-lg hover:border-[3px] border-gray-300 cursor-pointer shadow-lg shadow-black transition-all ${
                    isLoaded ? "opacity-100" : "opacity-0 h-0"
                }`}
            />
            <h2 className="text-white mt-2 w-[110px] md:w-[260px] font-sans  whitespace-nowrap text-ellipsis overflow-hidden">
                {movie.title}
            </h2>
        </Link>
    );
};
