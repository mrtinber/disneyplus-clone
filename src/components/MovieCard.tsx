import { PICTURE_BASE_URL } from "../services/ApiCall";
import { Movie } from "./types/Movie";

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    return (
        <section className="hover:scale-110 transition-all h-44">
            <img
                src={`${PICTURE_BASE_URL}${movie.backdrop_path}`}
                alt=""
                className="md:w[260px] rounded-lg hover:border-[3px] border-gray-300 cursor-pointer shadow-lg shadow-black transition-all"
            />
            <h2 className="text-white mt-2 w-[110px] md:w-[260px] font-sans  whitespace-nowrap text-ellipsis overflow-hidden">
                {movie.title}
            </h2>
        </section>
    );
};
