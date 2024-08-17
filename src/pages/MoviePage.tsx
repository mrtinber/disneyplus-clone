import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, PICTURE_BASE_URL } from "../services/ApiCall";
import { Movie } from "../components/types/Movie";
import { PlayButton } from "../components/ui/PlayButton";
import { Button } from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { Loader } from "../components/ui/Loader";
import { MovieDetails } from "../components/MovieDetails";
import { MovieSuggested } from "../components/MovieSuggested";

export const MoviePage = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Movie>();
    const [activeButton, setActiveButton] = useState<
        "SUGGESTED" | "EXTRAS" | "DETAILS"
    >("SUGGESTED");
    const [isLoading, setIsLoading] = useState(true);
    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)

    useEffect(() => {
        getDetails();
    }, [id]);

    const getDetails = async () => {
        if (id) {
            setIsLoading(true);
            try {
                const data = await getMovieDetails(parseInt(id));
                setDetails(data);
            } catch (error) {
                console.error("Failed to get details from this id");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }
    
    const handleBackgroundLoad = () => {
        setIsBackgroundLoaded(true)
    }

    return (
        <div className="relative">
            {details && (
                <div className="relative">
                    <img
                        src={`${PICTURE_BASE_URL}${details.backdrop_path}`}
                        alt={details.title}
                        onLoad={handleBackgroundLoad}
                        className={`w-full h-screen object-cover ${ isBackgroundLoaded ? "opacity-100" : "opacity-0"} duration-500 ease-in-out`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent to-20%"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#282B35] from-30%"></div>
                </div>
            )}
            <div className="absolute top-[320px] flex flex-col gap-10 px-5 md:px-16 p-2 bg-transparent">
                <h2 className="text-white text-5xl font-bold">
                    {details?.title}
                </h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="flex gap-2 text-white items-center">
                            {details?.release_date.substring(0, 4)}
                            <GoDotFill className="text-sm" />
                            {details?.runtime} minutes
                            <GoDotFill className="text-sm" />
                            {details?.genres.map((item) => (
                                <p>{item.name}</p>
                            ))}
                        </p>
                        <p className="flex gap-2 text-white items-center">
                            4K Ultra HD
                            <GoDotFill className="text-sm" />
                            5.1
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <PlayButton label="PLAY" />
                        <PlayButton label="TRAILER" />
                        <Button
                            label={<FaPlus className="font-bold text-lg" />}
                        />
                        <Button
                            label={
                                <HiMiniUserGroup className="font-bold text-2xl" />
                            }
                        />
                    </div>
                    <p className="text-white font-light">{details?.overview}</p>
                </div>
                <div className="w-full">
                    <div className="flex gap-12 border-b-[3px] border-white/30 pb-1">
                        <button
                            className={`relative transition-all ${
                                activeButton === "SUGGESTED"
                                    ? "text-white"
                                    : "text-white/30"
                            }`}
                            onClick={() => setActiveButton("SUGGESTED")}
                        >
                            SUGGESTED
                            {activeButton === "SUGGESTED" && (
                                <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                            )}
                        </button>
                        <button
                            className={`relative transition-all ${
                                activeButton === "EXTRAS"
                                    ? "text-white"
                                    : "text-white/30"
                            }`}
                            onClick={() => setActiveButton("EXTRAS")}
                        >
                            EXTRAS
                            {activeButton === "EXTRAS" && (
                                <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                            )}
                        </button>
                        <button
                            className={`relative transition-all ${
                                activeButton === "DETAILS"
                                    ? "text-white"
                                    : "text-white/30"
                            }`}
                            onClick={() => setActiveButton("DETAILS")}
                        >
                            DETAILS
                            {activeButton === "DETAILS" && (
                                <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                            )}
                        </button>
                    </div>

                    {activeButton === "SUGGESTED" ? (
                        <MovieSuggested seriesId={id} />
                    ) : activeButton === "DETAILS" ? (
                        <MovieDetails seriesId={id} />
                    ) : (
                        <p className="text-white py-6 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum, est, obcaecati qui voluptates
                            recusandae cumque dolore vel, pariatur quibusdam
                            veniam veritatis! At ex delectus quo aliquam. Sit
                            porro reprehenderit sint itaque eligendi, ratione
                            adipisci repellendus mollitia commodi ipsum amet
                            dignissimos cumque doloremque quod sapiente ipsa
                            natus maxime magnam eos voluptatum voluptatibus
                            nobis omnis optio? Magni quo ad corrupti distinctio
                            eligendi ullam! Iusto autem velit repellendus quis!
                            In nemo rem ipsam temporibus consequatur nisi odio
                            inventore ex officiis voluptatibus architecto sunt,
                            quisquam autem voluptatum deleniti sapiente
                            quibusdam eligendi expedita vel. Quisquam ab modi
                            porro esse et! Esse enim sed sint illum voluptas.
                            Sapiente voluptas, error voluptate totam aspernatur
                            eligendi. Magni laborum eligendi consectetur ratione
                            ea sit sapiente illo veritatis obcaecati! Unde
                            molestias qui, tempore cupiditate sapiente nam
                            quaerat hic illum, saepe est dicta fuga sint quas ut
                            laborum veritatis quo dolorem, corrupti dolore sit
                            distinctio ipsum iste sunt repellat! Sed, eos.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
