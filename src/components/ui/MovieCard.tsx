import { Link } from "react-router-dom";
import { PICTURE_BASE_URL } from "../../services/ApiCall";
import { Movie } from "../types/Movie";
import { useState } from "react";
import { Series } from "../types/Series";

export const MovieCard: React.FC<{ media: Movie | Series }> = ({ media }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Link
            to={`../${"first_air_date" in media ? "tv" : "movie"}/details/${
                media.id
            }`}
            className="hover:scale-110 transition-all h-44"
        >
            {!isLoaded && (
                <div className="text-white text-center content-center bg-slate-700 rounded-lg cursor-pointer w-[110px] h-[146px] md:w-[260px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all">
                    {media.title}
                </div>
            )}
            <img
                src={`${PICTURE_BASE_URL}${media.backdrop_path}`}
                alt={media.title || "Poster"}
                onLoad={handleImageLoad}
                className={`md:w-[260px] rounded-lg hover:border-[3px] border-gray-300 cursor-pointer shadow-lg shadow-black transition-all ${
                    isLoaded ? "opacity-100" : "opacity-0 h-0"
                }`}
            />
            <h2 className="text-white mt-2 w-[110px] md:w-[260px] font-sans  whitespace-nowrap text-ellipsis overflow-hidden">
                {media.title || media.name}
            </h2>
        </Link>
    );
};
