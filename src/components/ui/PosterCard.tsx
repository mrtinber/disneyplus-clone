import { Link } from "react-router-dom";
import { PICTURE_BASE_URL } from "../../services/ApiCall";
import { Movie } from "../types/Movie";

export const PosterCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    return (
        <Link to={`movie/details/${movie.id}`} className="shrink-0">
            <img
                src={`${PICTURE_BASE_URL}${movie.poster_path}`}
                alt=""
                className="rounded-lg cursor-pointer w-[110px] md:w-[200px] hover:border-[3px] border-gray-300 hover:scale-110 shadow-lg shadow-black transition-all"
            />
        </Link>
    );
};
