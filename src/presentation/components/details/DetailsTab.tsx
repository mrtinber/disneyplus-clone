import { useEffect, useState } from "react";
import { Series } from "../../../domain/types/series";
import { getMovieCredits } from "../../../infrastructure/services/MovieService";
import { Credits } from "../../../domain/types/credits";
import { Movie } from "../../../domain/types/movie";
import { isSeries } from "../../../infrastructure/utils/typeGuards";
import { SeriesDetails } from "./series/SeriesDetails";
import { MovieDetails } from "./movies/MovieDetails";
import { getSeriesCredits } from "../../../infrastructure/services/SeriesService";

export const DetailsTab = ({
    id,
    details,
}: {
    id: string | undefined;
    details: Movie | Series;
}) => {
    const [credits, setCredits] = useState<Credits>();

    useEffect(() => {
        getCast();
    }, []);

    const getCast = async () => {
        if (id) {
            try {
                let data;
                if (isSeries(details)) {
                    data = await getSeriesCredits(parseInt(id));
                } else {
                    data = await getMovieCredits(parseInt(id));
                }
                setCredits(data);
            } catch (error) {
                console.error("Failed to retrieve credits from the API.");
            }
        }
    };

    return (
        <div className=" text-white py-6">
            {details && (
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
                    {isSeries(details) ? (
                        <SeriesDetails details={details} />
                    ) : (
                        <MovieDetails details={details} />
                    )}
                    <div className="w-full md:w-1/5 flex flex-col gap-2">
                        <h3 className="text-md text-white/50">Cast</h3>
                        {credits?.cast.map(
                            (item, index) =>
                                index < 10 && (
                                    <p
                                        key={index}
                                        className="text-md font-light"
                                    >
                                        {item.name}
                                    </p>
                                )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
