import { useEffect, useState } from "react";
import { Series } from "../../../domain/types/series";
import { getMovieRecommendations } from "../../../infrastructure/services/MovieService";
import { Loader } from "../shared/Loader";
import { Movie } from "../../../domain/types/movie";
import { isSeries } from "../../../infrastructure/utils/typeGuards";
import { SuggestionCard } from "./SuggestionCard";
import { getSeriesRecommendations } from "../../../infrastructure/services/SeriesService";

interface RecommendationsResponse<T> {
    results: T[];
}

export const Suggested = ({
    id,
    details,
}: {
    id: string | undefined;
    details: Movie | Series;
}) => {
    const [recommendations, setRecommendations] = useState<(Series | Movie)[]>(
        []
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRecommendations();
    }, []);

    const getRecommendations = async () => {
        if (id) {
            setIsLoading(true);
            try {
                if (isSeries(details)) {
                    const data = await getSeriesRecommendations(parseInt(id));
                    setRecommendations(
                        (data as RecommendationsResponse<Series>).results
                    );
                } else {
                    const data = await getMovieRecommendations(parseInt(id));
                    setRecommendations(
                        (data as RecommendationsResponse<Movie>).results
                    );
                }
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
        <div className="flex flex-wrap justify-start gap-6 md:gap-10 pt-6 pb-16 md:py-6 px-6 overflow-y-auto max-h-screen scrollbar-hide scroll-smooth">
            {recommendations.map((item, index) => (
                <SuggestionCard key={index} media={item} />
            ))}
        </div>
    );
};
