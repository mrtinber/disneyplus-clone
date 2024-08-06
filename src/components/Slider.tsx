import { useEffect, useRef, useState } from "react";
import { getVideos, PICTURE_BASE_URL } from "../services/ApiCall";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Movie } from "./types/Movie";

const widthSlider = window.innerWidth;

export const Slider = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const imageSliderRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            slideRight(imageSliderRef.current);
        }, 7500);

        return () => clearInterval(intervalId);
    }, [movieList]);

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= widthSlider - 125;
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        }
    };
    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += widthSlider - 125;
            setCurrentIndex((prevIndex) =>
                prevIndex < movieList.length - 1
                    ? prevIndex + 1
                    : movieList.length - 1
            );
        }
    };

    const handleDotClick = (index: number) => {
        if (imageSliderRef.current) {
            imageSliderRef.current.scrollLeft = index * (widthSlider - 125);
            setCurrentIndex(index);
        }
    };

    const getMovies = async () => {
        try {
            const data = await getVideos();
            setMovieList(data.results);
        } catch (error) {
            console.error("Failed to fetch movies", error);
        }
    };

    return (
        <>
            <div className="relative z-[60]">
                <IoIosArrowBack
                    onClick={() => slideLeft(imageSliderRef.current)}
                    className="hidden md:block text-white text-[25px] absolute mx-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
                    aria-label="Slide left"
                />
                <IoIosArrowForward
                    onClick={() => slideRight(imageSliderRef.current)}
                    className="hidden md:block text-white text-[25px] absolute mx-8  cursor-pointer top-1/2 transform -translate-y-1/2 right-0 z-50"
                    aria-label="Slide right"
                />

                <div
                    className="flex overflow-x-auto overflow-y-visible w-full px-16 pt-4 pb-8 scrollbar-hide scroll-smooth"
                    ref={imageSliderRef}
                >
                    {movieList.map((item, index) => (
                        <div
                            key={index}
                            className="relative min-w-full md:h-[350px] mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all shadow-lg shadow-black"
                        >
                            <img
                                className="w-full h-full object-cover rounded-md "
                                src={`${PICTURE_BASE_URL}${item.backdrop_path}`}
                                alt={item.title}
                            />
                            <h2 className="font-bold text-white text-4xl absolute bottom-8 left-4">
                                {item.title ? item.title : item.name}
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 absolute bottom-12 right-24">
                    {movieList.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full bg-gray-400 cursor-pointer transition-all ${
                                index === currentIndex
                                    ? "scale-150 bg-slate-200"
                                    : ""
                            }`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};
