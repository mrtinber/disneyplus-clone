import DisneyPlusWhiteLogo from "../../assets/images/disney-plus-white.png";
import TMDBLogo from "../../assets/images/tmdb-logo.png";

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-8 pb-8 bg-transparent">
            <div className="flex gap-6">
                <img
                    src={DisneyPlusWhiteLogo}
                    alt="Logo Disney Plus"
                    className="w-24 object-contain"
                />
                <img
                    src={TMDBLogo}
                    alt="Logo The Movie DataBase"
                    className="w-20 object-contain"
                />
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="text-white font-light text-xs text-center w-[700px]">
                    This is a fan-made project and is not affiliated with Disney,
                    The Movie Database (TMDb), or any of their affiliates. All
                    logos, trademarks, and images are property of their respective
                    owners. The content and data presented on this site are for
                    educational and non-commercial purposes only.
                </p>
                <p className="text-white font-light text-xs">
                    © 2024 Disney, TMDb, and their related entities. All Rights
                    Reserved.
                </p>
            </div>
        </div>
    );
};
