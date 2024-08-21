import { HiMiniUserGroup } from "react-icons/hi2";
import { PlayButton } from "../shared/PlayButton";
import { GoDotFill } from "react-icons/go";
import { Button } from "../shared/Button";
import { FaPlus } from "react-icons/fa6";
import { Series } from "../../../domain/types/series";
import { Movie } from "../../../domain/types/movie";

export const MediaOverview = ({ details }: { details: Series | Movie }) => {
    const isSeries = (details: Movie | Series): details is Series => {
        return (details as Series).first_air_date !== undefined;
    };

    return (
        <>
            <h2 className="text-white text-5xl font-bold">
                {isSeries(details) ? details.name : details.title}
            </h2>
            <div className="flex flex-col gap-4">
                <div>
                    <div className="hidden md:flex gap-2 text-white items-center">
                        {isSeries(details)
                            ? details.number_of_seasons === 1
                                ? `${details.first_air_date.substring(0, 4)}`
                                : `${details.first_air_date.substring(
                                      0,
                                      4
                                  )} - ${details?.last_air_date.substring(
                                      0,
                                      4
                                  )}`
                            : details.release_date.substring(0, 4)}
                        <GoDotFill className="text-sm" />
                        {isSeries(details)
                            ? `${details.number_of_seasons} ${
                                  details.number_of_seasons &&
                                  details.number_of_seasons >= 2
                                      ? "seasons"
                                      : "season"
                              }`
                            : `${details.runtime} minutes`}
                        <GoDotFill className="text-sm" />
                        {details.genres.map((item, index) => (
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
                    <Button label={<FaPlus className="font-bold text-lg" />} />
                    <Button
                        label={
                            <HiMiniUserGroup className="font-bold text-2xl" />
                        }
                    />
                </div>
                <p className="text-white font-light text-justify">{details.overview}</p>
            </div>
        </>
    );
};
