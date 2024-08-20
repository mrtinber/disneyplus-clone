import DisneyPlusWhiteLogo from "../assets/images/disney-plus-white.png";
import TMDBLogo from "../assets/images/tmdb-logo.png"

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-8 pb-8 bg-transparent">
            <div className="flex gap-6">
                <img src={DisneyPlusWhiteLogo} alt="Logo Disney Plus" className="w-24 object-contain" />
                <img src={TMDBLogo} alt="Logo The Movie DataBase" className="w-20 object-contain" />
            </div>
            <p className="text-white font-light text-xs">
                Content on this clone is subject to availability. © 2024 Disney, TMDB and
                its related entities. All Rights Reserved.
            </p>
        </div>
    );
};
