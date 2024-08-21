import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import { getMoviesByCompany, getSeries } from "../services/ApiCall";
import { useParams } from "react-router-dom";
import { Loader } from "../components/shared/Loader";
import { PosterCarrousel } from "../components/shared/PosterCarrousel";
import { BackdropVideo } from "../components/studio/BackdropVideo";
import { getConfigValues } from "../components/studio/StudioConfig";

export const StudioPage = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [seriesList, setSeriesList] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { backdropVideo, seriesCompanyId } = companyId
        ? getConfigValues(companyId)
        : { backdropVideo: "", seriesCompanyId: 0 };

    useEffect(() => {
        fetchData();
    }, [companyId]);

    const fetchData = async () => {
        if (companyId) {
            setIsLoading(true);
            try {
                const [movieData, seriesData] = await Promise.all([
                    getMoviesByCompany(parseInt(companyId)),
                    getSeries(seriesCompanyId),
                ]);
                setMovieList(movieData.results);
                setSeriesList(seriesData.results);
            } catch (error) {
                console.error("Failed to fetch data by company id.", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="z-0">
            <BackdropVideo backdropVideo={backdropVideo} />

            <div className="bg-gradient-to-t from-transparent from-65% to-black">
                <PosterCarrousel mediaList={movieList} header="Movies" />
                <PosterCarrousel mediaList={seriesList} header="Series" />
            </div>
        </div>
    );
};
