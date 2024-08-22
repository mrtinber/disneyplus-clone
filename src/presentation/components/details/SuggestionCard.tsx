import { Link } from "react-router-dom";
import { PICTURE_BASE_URL } from "../../../infrastructure/services/constants";
import { Movie } from "../../../domain/types/movie";
import { useState } from "react";
import { Series } from "../../../domain/types/series";

export const SuggestionCard: React.FC<{ media: Movie | Series }> = ({
    media,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Link
            to={`../${"first_air_date" in media ? "tv" : "movie"}/details/${
                media.id
            }`}
            className="hover:scale-110 transition-all flex flex-col gap-2 md:gap-0 w-full md:w-[275px] lg:w-[250px] xl:w-[280px] 2xl:w-[300px]"
        >
            {!isLoaded && (
                <div className="text-white text-center content-center bg-slate-700 rounded-lg cursor-pointer h-[190px] hover:scale-110 shadow-lg shadow-black transition-all">
                    {media.title || media.name}
                </div>
            )}
            <img
                src={`${PICTURE_BASE_URL}${media.backdrop_path}`}
                alt={media.title || "Poster"}
                onLoad={handleImageLoad}
                className={`rounded-lg  cursor-pointer shadow-lg shadow-black transition-all ${
                    isLoaded ? "opacity-100" : "opacity-0 h-0"
                }`}
            />
            <h2 className="text-white mt-2 font-sans whitespace-nowrap text-ellipsis overflow-hidden">
                {media.title || media.name}
            </h2>
        </Link>
    );
};
