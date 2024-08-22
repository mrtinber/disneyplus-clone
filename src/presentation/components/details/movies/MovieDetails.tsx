import { PICTURE_BASE_URL } from "../../../../infrastructure/services/constants";
import { Movie } from "../../../../domain/types/movie";

export const MovieDetails = ({ details }: { details: Movie }) => {
    return (
        <>
            <div className="w-full md:w-3/5 flex flex-col gap-2">
                <h2 className="text-2xl font-medium">{details.tagline}</h2>
                <p className="text-md font-light text-justify">
                    {details.overview}
                </p>
            </div>

            <div className="w-full md:w-1/5 flex flex-col gap-2">
                <h3 className="text-md text-white/50">Release date </h3>
                <p className="text-md font-light">{details.release_date}</p>
                <h3 className="text-md text-white/50">Duration</h3>
                <p className="text-md font-light">{details.runtime} minutes</p>
                <h3 className="text-md text-white/50">Countries</h3>
                {details.production_countries.map((item, index) => (
                    <p key={index} className="text-md font-light">
                        {item.name}
                    </p>
                ))}
                <h3 className="text-md text-white/50">From</h3>
                <div className="flex flex-col gap-2">
                    {details.production_companies.map((item, index) =>
                        item.logo_path === null ? (
                            <p>{item.name}</p>
                        ) : (
                            <img
                                key={index}
                                src={`${PICTURE_BASE_URL}${item.logo_path}`}
                                alt={`Logo of ${item.name}`}
                                className="w-12 object-contain"
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};
