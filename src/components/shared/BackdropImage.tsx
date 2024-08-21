import { useState } from "react";
import { Series } from "../../types/series";
import { Movie } from "../../types/movie";
import { PICTURE_BASE_URL } from "../../services/ApiCall";

export const BackdropImage = ({details} : {details: Series | Movie}) => {
    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

    const handleBackgroundLoad = () => {
        setIsBackgroundLoaded(true);
    };

    return (
        <div className="absolute w-full z-0">
            <img
                src={`${PICTURE_BASE_URL}${details.backdrop_path}`}
                alt={details.name || details.title}
                onLoad={handleBackgroundLoad}
                className={`w-full h-screen object-cover ${
                    isBackgroundLoaded ? "opacity-100" : "opacity-0"
                } duration-500 ease-in-out`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent to-20%"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#181925] from-30%"></div>
        </div>
    );
};
