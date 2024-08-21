import { Series } from "../../../../domain/types/series";
import { PICTURE_BASE_URL } from "../../../../infrastructure/services/ApiCall";

export const SeriesDetails = ({details} :  {details: Series}) => {
    return (
        <>
            <div className="w-full md:w-3/5 flex flex-col gap-2">
                <h3 className="text-xl text-white/50">Summary</h3>
                <p className="text-md font-light text-justify">
                    {details.overview}
                </p>
            </div>

            <div className="w-full md:w-1/5 flex flex-col gap-2">
                <h3 className="text-md text-white/50">First Air Date</h3>
                <p className="text-md font-light">{details.first_air_date}</p>
                <h3 className="text-md text-white/50">Last Air Date</h3>
                <p className="text-md font-light">{details.last_air_date}</p>
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
        </>
    );
};
