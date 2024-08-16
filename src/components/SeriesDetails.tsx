import { useEffect, useState } from "react";
import { Series } from "./types/Series";
import { getSeriesDetails, PICTURE_BASE_URL } from "../services/ApiCall";

export const SeriesDetails = ({
    seriesId,
}: {
    seriesId: string | undefined;
}) => {
    const [details, setDetails] = useState<Series>();

    useEffect(() => {
        getDetails();
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

    return (
        <div className="text-white py-6">
            {details && (
                <div className="flex gap-16 w-full">
                    <div className="w-3/4 flex flex-col gap-2">
                        {/* <h2 className="text-2xl font-medium">
                            {details.original_name}
                        </h2> */}
                        <h3 className="text-xl text-white/50">Summary</h3>
                        <p className="text-md font-light text-justify">
                            {details.overview}
                        </p>
                    </div>

                    <div className="w-1/4 flex flex-col gap-2">
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
                        {details.networks.map((item, index) => (
                            <img
                                key={index}
                                src={`${PICTURE_BASE_URL}${item.logo_path}`}
                                alt={`Logo of ${item.name}`}
                                className="w-12"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
