import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../infrastructure/services/MovieService";
import { Movie } from "../../domain/types/movie";
import { Loader } from "../components/shared/Loader";
import { BackdropImage } from "../components/details/BackdropImage";
import { NavigationTabs } from "../components/details/NavigationTabs";
import { MediaOverview } from "../components/details/MediaOverview";

export const MoviePage = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails();
    }, [id]);

    const getDetails = async () => {
        if (id) {
            setIsLoading(true);
            try {
                const data = await getMovieDetails(parseInt(id));
                setDetails(data);
            } catch (error) {
                console.error("Failed to get details from this id.", error);
                navigate("/error");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="relative min-h-screen">
            {details && <BackdropImage details={details} />}
            <div className="relative z-10 pt-96 flex flex-col gap-10 px-5 md:px-16 p-2 bg-transparent">
                {details && <MediaOverview details={details} />}
                {id && details && <NavigationTabs id={id} details={details} />}
            </div>
        </div>
    );
};
