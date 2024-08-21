import { genreList } from "../../../infrastructure/data/GenreList";
import { MovieListByGenre } from "./MovieListByGenre";

export default function MovieGenresList() {
    return (
        <div className="bg-transparent overflow-y-visible">
            {genreList.map(
                (item, index) =>
                    index <= 4 && (
                        <div key={index} className="py-4 px-8 md:px-16">
                            <h2 className="text-white text-lg font-medium">
                                {item.name}
                            </h2>
                            <MovieListByGenre
                                genreId={item.id}
                                indexId={index}
                            />
                        </div>
                    )
            )}
        </div>
    );
}
