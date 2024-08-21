import { Link } from "react-router-dom";
import { PICTURE_BASE_URL } from "../../../infrastructure/services/ApiCall";
import { Movie } from "../../../domain/types/movie";
import { useState } from "react";
import { Series } from "../../../domain/types/series";

export const PosterCard: React.FC<{ media: Movie | Series }> = ({ media }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Link
            to={`../${"first_air_date" in media ? "tv" : "movie"}/details/${
                media.id
            }`}
            className="shrink-0"
        >
            {!isLoaded && (
                <div className="text-white text-center content-center bg-slate-700 rounded-lg cursor-pointer w-[110px] h-[165px] md:h-[300px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all">
                    {media.name || media.title}
                </div>
            )}
            <img
                src={`${PICTURE_BASE_URL}${media.poster_path}`}
                alt={media.name || "Poster"}
                onLoad={handleImageLoad}
                className={`rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all ${
                    isLoaded ? "opacity-100" : "opacity-0 h-0"
                }`}
            />
        </Link>
    );
};
