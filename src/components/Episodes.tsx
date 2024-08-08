import { useEffect, useState } from "react";
import { Episode } from "./types/Episode";
import { getSeriesEpisodes, PICTURE_BASE_URL } from "../services/ApiCall";
import { Loader } from "./ui/Loader";
import { FaChevronDown } from "react-icons/fa6";

export const Episodes = ({ seriesId }: { seriesId: string | undefined }) => {
    const [episodesList, setEpisodesList] = useState<Episode[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEpisodes();
    }, []);

    const getEpisodes = async () => {
        if (seriesId) {
            setIsLoading(true);
            try {
                const data = await getSeriesEpisodes(parseInt(seriesId));
                console.log(data.episodes);
                setEpisodesList(data.episodes);
            } catch (error) {
                console.error("Failed to retrieve episodes.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div  className="flex flex-col gap-6 py-6 overflow-y-auto max-h-screen scrollbar-hide scroll-smooth">
            <button className="text-white flex items-center justify-center gap-2 bg-white/30 hover:bg-white hover:text-[#292c36] rounded-full py-2 px-4 transition-all max-w-fit">
                <p>Season 1</p>
                <FaChevronDown />
            </button>
            <div className="flex flex-col gap-4">
                {episodesList.map((item, index) => (
                    <div className="flex gap-4 w-full h-36">
                        <img
                            src={`${PICTURE_BASE_URL}${item.still_path}`}
                            alt={item.name}
                            className="w-64 rounded-md object-cover"
                        />
                        <div
                            key={index}
                            className="text-white flex flex-col gap-4 py-1"
                        >
                            <div className="flex gap-3">
                                <p className="font-medium">
                                    {index + 1}. {item.name}
                                </p>
                                <span className="text-white/50 font-light">
                                    {item.runtime}m
                                </span>
                            </div>
                            <p className="font-light text-ellipsis overflow-hidden line-clamp-3 text-white/80 text-justify">
                                {item.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
