import { useEffect, useState } from "react";
import { Series } from "../../types/series";
import { getSeriesRecommendations } from "../../services/ApiCall";
import { MovieCard } from "../ui/MovieCard";

export const Suggested = ({ seriesId }: { seriesId: string | undefined }) => {
    const [recommendations, setRecommendations] = useState<Series[]>([]);

    useEffect(() => {
        getRecommendations();
    }, []);

    const getRecommendations = async () => {
        if (seriesId) {
            try {
                const data = await getSeriesRecommendations(parseInt(seriesId));
                setRecommendations(data.results);
                console.log(data.results);
            } catch (error) {
                console.error("Failed to retrieve recommendations.");
            }
        }
    };

    return (
        <div className="flex flex-wrap justify-between gap-6 py-6 px-6 overflow-y-auto max-h-screen scrollbar-hide scroll-smooth">
            {recommendations.map((item, index) => (
                <MovieCard key={index} media={item} />
            ))}
        </div>
    );
};
