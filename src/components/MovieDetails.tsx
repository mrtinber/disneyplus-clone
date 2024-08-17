import { useEffect, useState } from "react";
import { getMovieDetails, PICTURE_BASE_URL } from "../services/ApiCall";
import { Movie } from "./types/Movie";

export const MovieDetails = ({
    seriesId,
}: {
    seriesId: string | undefined;
}) => {
    const [details, setDetails] = useState<Movie>();

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        if (seriesId) {
            try {
                const data = await getMovieDetails(parseInt(seriesId));
                setDetails(data);
            } catch (error) {
                console.error("Failed to retrieve details for this series");
            }
        }
    };

    return (
        <div className="text-white py-6">
            {details && (
                <div className="flex gap-16 w-full">
                    <div className="w-3/4 flex flex-col gap-2">
                        <h2 className="text-2xl font-medium">
                            {details.tagline}
                        </h2>
                        {/* <h3 className="text-xl text-white/50">Summary</h3> */}
                        <p className="text-md font-light text-justify">
                            {details.overview}
                        </p>
                    </div>

                    <div className="w-1/4 flex flex-col gap-2">
                        <h3 className="text-md text-white/50">Release date </h3>
                        <p className="text-md font-light">
                            {details.release_date}
                        </p>
                        <h3 className="text-md text-white/50">Duration</h3>
                        <p className="text-md font-light">
                            {details.runtime} minutes
                        </p>
                        <h3 className="text-md text-white/50">Countries</h3>
                        {details.production_countries.map((item, index) => (
                            <p key={index} className="text-md font-light">
                                {item.name}
                            </p>
                        ))}
                        <h3 className="text-md text-white/50">From</h3>
                        {details.production_companies.map((item, index) =>
                            item.logo_path === null ? (
                                <p>{item.name}</p>
                            ) : (
                                <img
                                    key={index}
                                    src={`${PICTURE_BASE_URL}${item.logo_path}`}
                                    alt={`Logo of ${item.name}`}
                                    className="w-12"
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
