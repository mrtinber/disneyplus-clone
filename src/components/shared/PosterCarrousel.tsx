import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PosterCard } from "./PosterCard";
import { useRef } from "react";
import { Movie } from "../../types/movie";
import { Series } from "../../types/series";

const widthSlider = window.innerWidth;

export const PosterCarrousel = ({
    mediaList,
    header,
}: {
    mediaList: Movie[] | Series[];
    header: string;
}) => {
    const elementRef = useRef<HTMLDivElement | null>(null);

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
        <div className="py-4 px-8 md:px-16">
            <h2 className="text-white text-lg font-medium">{header}</h2>
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
                    {mediaList.map((item, index) => (
                        <PosterCard key={index} media={item} />
                    ))}
                </div>
                <IoIosArrowForward
                    onClick={() => slideRight(elementRef.current)}
                    className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute right-0 top-1/2 transform -translate-y-1/2"
                    aria-label="Slide right"
                />
            </div>
        </div>
    );
};
