import { useEffect, useRef, useState } from "react";
import { Movie } from "../components/types/Movie";
import { PICTURE_BASE_URL } from "../services/ApiCall";
import DisneyIntroVideo from "../assets/videos/disney_intro.mp4";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const widthSlider = window.innerWidth;

export const Studio = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getMovies();

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
                    src={DisneyIntroVideo}
                    className="w-full h-screen object-cover"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-10%"></div>
            </div>

            <div className="py-4 px-8 md:px-16 bg-gradient-to-t from-transparent from-75% to-black">
                <h2 className="text-white text-lg font-medium">Movies</h2>

                <div className="relative">
                    <IoIosArrowBack
                        onClick={() => slideLeft(elementRef.current)}
                        className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute top-1/2 transform -translate-y-1/2"
                        aria-label="Slide left"
                    />
                    <div
                        ref={elementRef}
                        className="flex overflow-x-auto overflow-visible h-full gap-8 scrollbar-hide scroll-smooth py-4 px-3 z-20"
                    >
                        {movieList.map((item, index) => (
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
                        onClick={() => slideRight(elementRef.current)}
                        className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute right-0 top-1/2 transform -translate-y-1/2"
                        aria-label="Slide right"
                    />
                </div>
            </div>
        </div>
    );
};
