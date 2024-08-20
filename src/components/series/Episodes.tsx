import { useEffect, useState } from "react";
import { Episode } from "../../types/episode";
import { getSeriesDetails, getSeriesEpisodes } from "../../services/ApiCall";
import { Loader } from "../ui/Loader";
import { SeasonSelector } from "./SeasonSelector";
import { EpisodeList } from "./EpisodeList";

export const Episodes = ({ seriesId }: { seriesId: string | undefined }) => {
    const [episodesList, setEpisodesList] = useState<Episode[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [numberOfSeasons, setNumberOfSeasons] = useState(1);
    const [selectedSeason, setSelectedSeason] = useState(1);

    useEffect(() => {
        getSeasons();
    }, []);

    useEffect(() => {
        getEpisodes();
    }, [selectedSeason]);

    const getEpisodes = async () => {
        if (seriesId) {
            setIsLoading(true);
            try {
                const data = await getSeriesEpisodes(
                    parseInt(seriesId),
                    selectedSeason
                );
                setEpisodesList(data.episodes);
            } catch (error) {
                console.error("Failed to retrieve episodes.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const getSeasons = async () => {
        if (seriesId) {
            try {
                const data = await getSeriesDetails(parseInt(seriesId));
                setNumberOfSeasons(data.number_of_seasons);
            } catch (error) {
                console.error("Failed to retrieve the number of seasons");
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col gap-6 py-6 overflow-y-auto max-h-screen scrollbar-hide scroll-smooth">
            <SeasonSelector
                numberOfSeasons={numberOfSeasons}
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
            />
            <EpisodeList episodesList={episodesList} />
        </div>
    );
};
