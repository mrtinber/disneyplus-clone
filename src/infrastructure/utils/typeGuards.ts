import { Movie } from "../../domain/types/movie";
import { Series } from "../../domain/types/series";

export const isSeries = (details: Movie | Series): details is Series => {
    return (details as Series).first_air_date !== undefined;
};
