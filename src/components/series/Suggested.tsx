import { useEffect, useState } from "react";
import { Series } from "../../types/series";
import { getSeriesRecommendations } from "../../services/ApiCall";
import { MovieCard } from "../shared/MovieCard";
import { Loader } from "../shared/Loader";

export const Suggested = ({ seriesId }: { seriesId: string | undefined }) => {
    const [recommendations, setRecommendations] = useState<Series[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRecommendations();
    }, []);

    const getRecommendations = async () => {
        if (seriesId) {
            setIsLoading(true);
            try {
                const data = await getSeriesRecommendations(parseInt(seriesId));
                setRecommendations(data.results);
                console.log(data.results);
            } catch (error) {
                console.error("Failed to retrieve recommendations.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-wrap justify-between gap-6 py-6 px-6 overflow-y-auto max-h-screen scrollbar-hide scroll-smooth">
            {recommendations.map((item, index) => (
                <MovieCard key={index} media={item} />
            ))}
        </div>
    );
};
