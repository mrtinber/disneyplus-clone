import { useEffect, useRef, useState } from "react";
import { Movie } from "../components/types/Movie";
import {
    getMoviesByCompany,
    getSeries,
    PICTURE_BASE_URL,
} from "../services/ApiCall";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import DisneyIntroVideo from '../assets/videos/disney_intro.mp4';
import StarWarsIntroVideo from '../assets/videos/starwars_intro.mp4';
import NationalGeographicIntro from '../assets/videos/national_geographic_intro.mp4';
import PixarIntroVideo from '../assets/videos/pixar_intro.mp4';
import MarvelIntroVideo from '../assets/videos/marvel_intro.mp4';

const widthSlider = window.innerWidth;

interface Config {
    [key: string]: {
        backdropVideo: string;
        seriesCompanyId: number;
        thirdListId?: number;
    };
}

const config: Config = {
    "2": {
        backdropVideo: DisneyIntroVideo,
        seriesCompanyId: 6125,
        thirdListId: 670,
    },
    "420": {
        backdropVideo: MarvelIntroVideo,
        seriesCompanyId: 420,
    },
    "7521": {
        backdropVideo: NationalGeographicIntro,
        seriesCompanyId: 7521,
    },
    "3": {
        backdropVideo: PixarIntroVideo,
        seriesCompanyId: 3,
    },
    "1": {
        backdropVideo: StarWarsIntroVideo,
        seriesCompanyId: 1,
    },
};

const getConfigValues = (companyId: string) => {
    const backdropVideo = config[companyId]?.backdropVideo || "";
    const seriesCompanyId = config[companyId]?.seriesCompanyId || 0;
    const thirdListId = config[companyId]?.thirdListId || 0;

    return { backdropVideo, seriesCompanyId, thirdListId };
};

export const Studio = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [seriesList, setSeriesList] = useState<Movie[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const movieListRef = useRef<HTMLDivElement | null>(null);
    const seriesListRef = useRef<HTMLDivElement | null>(null);

    const { backdropVideo, seriesCompanyId } = companyId
        ? getConfigValues(companyId)
        : { backdropVideo: "", seriesCompanyId: 0 };

    useEffect(() => {
        if (companyId) {
            getMovies();
        }
        getSeriesList();

        const video = videoRef.current;
        if (video) {
            const handleTimeUpdate = () => {
                if (video.currentTime >= 29) {
                    // Mettre en pause, ajustez selon votre besoin
                    video.pause();
                }
            };

            video.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                video.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    }, [companyId]);

    const getMovies = async () => {
        if (companyId) {
            try {
                const data = await getMoviesByCompany(parseInt(companyId));
                setMovieList(data.results);
            } catch (error) {
                console.error("Failed to fetch movies by company id", error);
            }
        }
    };

    const getSeriesList = async () => {
        try {
            const data = await getSeries(seriesCompanyId);
            setSeriesList(data.results);
        } catch (error) {
            console.error("Failed to fetch series", error);
        }
    };

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= widthSlider - 150;
        }
    };
    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += widthSlider - 150;
        }
    };

    return (
        <div className="z-0">
            <div className="relative">
                <video
                    ref={videoRef}
                    muted
                    loop
                    autoPlay
                    playsInline
                    src={backdropVideo}
                    className="w-full h-screen object-cover"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-15%"></div>
            </div>

            <div className=" bg-gradient-to-t from-transparent from-65% to-black">
                <div className="py-4 px-8 md:px-16">
                    <h2 className="text-white text-lg font-medium">Movies</h2>
                    <div className="relative">
                        <IoIosArrowBack
                            onClick={() => slideLeft(movieListRef.current)}
                            className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute top-1/2 transform -translate-y-1/2"
                            aria-label="Slide left"
                        />
                        <div
                            ref={movieListRef}
                            className="flex overflow-x-auto overflow-visible h-full gap-8 scrollbar-hide scroll-smooth py-4 px-3 z-20"
                        >
                            {movieList.map((item, index) => (
                                <Link to={`../details/${item.id}`} key={index} className="shrink-0">
                                    <img
                                        className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all z-40"
                                        src={`${PICTURE_BASE_URL}${
                                            item.poster_path
                                                ? item.poster_path
                                                : item.backdrop_path
                                        }`}
                                        alt={item.title}
                                    />
                                </Link>
                            ))}
                        </div>
                        <IoIosArrowForward
                            onClick={() => slideRight(movieListRef.current)}
                            className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute right-0 top-1/2 transform -translate-y-1/2"
                            aria-label="Slide right"
                        />
                    </div>
                </div>
                <div className="py-4 px-8 md:px-16">
                    <h2 className="text-white text-lg font-medium">
                        TV Series
                    </h2>
                    <div className="relative">
                        <IoIosArrowBack
                            onClick={() => slideLeft(seriesListRef.current)}
                            className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute top-1/2 transform -translate-y-1/2"
                            aria-label="Slide left"
                        />
                        <div
                            ref={seriesListRef}
                            className="flex overflow-x-auto overflow-visible h-full gap-8 scrollbar-hide scroll-smooth py-4 px-3 z-20"
                        >
                            {seriesList.map((item, index) => (
                                <div key={index} className="shrink-0">
                                    <img
                                        className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all z-40"
                                        src={`${PICTURE_BASE_URL}${item.poster_path}`}
                                        alt={item.title}
                                    />
                                </div>
                            ))}
                        </div>
                        <IoIosArrowForward
                            onClick={() => slideRight(seriesListRef.current)}
                            className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute right-0 top-1/2 transform -translate-y-1/2"
                            aria-label="Slide right"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
