import { useEffect, useRef, useState } from "react";
import { Movie } from "../types/movie";
import { getMoviesByCompany, getSeries } from "../services/ApiCall";
import { useParams } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { PosterCarrousel } from "../components/ui/PosterCarrousel";
import { BackdropVideo } from "../components/studio/BackdropVideo";
import { getConfigValues } from "../components/studio/StudioConfig";

export const Studio = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [seriesList, setSeriesList] = useState<Movie[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    const { backdropVideo, seriesCompanyId } = companyId
        ? getConfigValues(companyId)
        : { backdropVideo: "", seriesCompanyId: 0 };

    useEffect(() => {
        if (companyId) {
            getMovies();
            getSeriesList();
        }
    }, [companyId]);

    const getMovies = async () => {
        if (companyId) {
            setIsLoading(true);
            try {
                const data = await getMoviesByCompany(parseInt(companyId));
                setMovieList(data.results);
            } catch (error) {
                console.error("Failed to fetch movies by company id", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const getSeriesList = async () => {
        setIsLoading(true);
        try {
            const data = await getSeries(seriesCompanyId);
            setSeriesList(data.results);
        } catch (error) {
            console.error("Failed to fetch series", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="z-0">
            <BackdropVideo videoRef={videoRef} backdropVideo={backdropVideo} />

            <div className=" bg-gradient-to-t from-transparent from-65% to-black">
                <PosterCarrousel mediaList={movieList} header="Movies" />
                <PosterCarrousel mediaList={seriesList} header="Series" />
            </div>
        </div>
    );
};
