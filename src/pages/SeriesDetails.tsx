import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeriesDetails, PICTURE_BASE_URL } from "../services/ApiCall";
import { PlayButton } from "../components/ui/PlayButton";
import { Button } from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { Series } from "../components/types/Series";
import { Loader } from "../components/ui/Loader";
import { Episodes } from "../components/Episodes";

export const SeriesDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Series>();
    const [activeButton, setActiveButton] = useState<
        "EPISODES" | "SUGGESTED" | "DETAILS"
    >("EPISODES");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDetails();
    }, [id]);

    const getDetails = async () => {
        if (id) {
            setIsLoading(true);
            try {
                const data = await getSeriesDetails(parseInt(id));
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

    return (
        <div className="relative">
            {details && (
                <div className="relative">
                    <img
                        src={`${PICTURE_BASE_URL}${details.backdrop_path}`}
                        alt={details.name}
                        className="w-full h-screen object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent to-20%"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#282B35] from-30%"></div>
                </div>
            )}
            <div className="flex flex-col absolute top-[320px] gap-10 px-5 md:px-16 p-2 bg-transparent">
                <h2 className="text-white text-5xl font-bold">
                    {details?.name}
                </h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="flex gap-2 text-white items-center">
                            {details?.number_of_seasons === 1
                                ? `${details?.first_air_date.substring(0, 4)}`
                                : `${details?.first_air_date.substring(
                                      0,
                                      4
                                  )} - ${details?.last_air_date.substring(
                                      0,
                                      4
                                  )}`}
                            <GoDotFill className="text-sm" />
                            {`${details?.number_of_seasons} ${
                                details?.number_of_seasons &&
                                details.number_of_seasons >= 2
                                    ? "seasons"
                                    : "season"
                            }`}
                            <GoDotFill className="text-sm" />
                            {details?.genres.map((item, index) => (
                                <p key={index}>{item.name}</p>
                            ))}
                        </div>
                        <div className="flex gap-2 text-white items-center">
                            4K Ultra HD
                            <GoDotFill className="text-sm" />
                            5.1
                        </div>
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
                                activeButton === "EPISODES"
                                    ? "text-white"
                                    : "text-white/30"
                            }`}
                            onClick={() => setActiveButton("EPISODES")}
                        >
                            EPISODES
                            {activeButton === "EPISODES" && (
                                <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                            )}
                        </button>
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
                    <Episodes seriesId={id}/>
                </div>
            </div>
        </div>
    );
};
