import { useEffect, useState } from "react";
import { Series } from "../../types/series";
import {
    getSeriesCredits,
    getSeriesDetails,
    PICTURE_BASE_URL,
} from "../../services/ApiCall";
import { Credits } from "../../types/Credits";

export const SeriesDetails = ({
    seriesId,
}: {
    seriesId: string | undefined;
}) => {
    const [details, setDetails] = useState<Series>();
    const [credits, setCredits] = useState<Credits>();

    useEffect(() => {
        getDetails();
        getCast();
    }, []);

    const getDetails = async () => {
        if (seriesId) {
            try {
                const data = await getSeriesDetails(parseInt(seriesId));
                setDetails(data);
            } catch (error) {
                console.error("Failed to retrieve details for this series");
            }
        }
    };

    const getCast = async () => {
        if (seriesId) {
            try {
                const data = await getSeriesCredits(parseInt(seriesId));
                setCredits(data);
            } catch (error) {
                console.error("Failed to retrieve credits from the API.");
            }
        }
    };

    return (
        <div className="text-white py-6">
            {details && (
                <div className="flex gap-16 w-full">
                    <div className="w-3/5 flex flex-col gap-2">
                        {/* <h2 className="text-2xl font-medium">
                            {details.original_name}
                        </h2> */}
                        <h3 className="text-xl text-white/50">Summary</h3>
                        <p className="text-md font-light text-justify">
                            {details.overview}
                        </p>
                    </div>

                    <div className="w-1/5 flex flex-col gap-2">
                        <h3 className="text-md text-white/50">
                            First Air Date
                        </h3>
                        <p className="text-md font-light">
                            {details.first_air_date}
                        </p>
                        <h3 className="text-md text-white/50">Last Air Date</h3>
                        <p className="text-md font-light">
                            {details.last_air_date}
                        </p>
                        <h3 className="text-md text-white/50">Created by</h3>
                        {details.created_by.map((item, index) => (
                            <p key={index} className="text-md font-light">
                                {item.name}
                            </p>
                        ))}
                        <h3 className="text-md text-white/50">From</h3>
                        {details.networks.map((item, index) =>
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
                    <div className="w-1/5 flex flex-col gap-2">
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
