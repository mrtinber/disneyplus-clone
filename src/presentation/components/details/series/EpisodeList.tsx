import { useState } from "react";
import { PICTURE_BASE_URL } from "../../../../infrastructure/services/ApiCall";
import { Episode } from "../../../../domain/types/episode";

export const EpisodeList = ({ episodesList }: { episodesList: Episode[] }) => {
    const [loadedImages, setLoadedImages] = useState<{
        [key: number]: boolean;
    }>({});

    const handleThumbnailLoading = (index: number) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <div className="flex flex-col gap-4">
            {episodesList.map((item, index) => (
                <div key={index} className="flex gap-4 w-full h-36">
                    {/* {!isThumbnailLoaded && (
                            <div className="w-64 text-white text-center content-center bg-slate-700 rounded-md">
                            </div>
                        )} */}
                    <img
                        src={`${PICTURE_BASE_URL}${item.still_path}`}
                        alt={item.name}
                        onLoad={() => handleThumbnailLoading(index)}
                        className={`w-64 rounded-md object-cover ${
                            loadedImages[index] ? "opacity-100" : "opacity-0"
                        } duration-500 ease-in-out cursor-pointer`}
                    />
                    <div
                        className="text-white flex flex-col gap-4 py-1"
                        style={{ width: `calc(100% - 256px)` }}
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
    );
};
