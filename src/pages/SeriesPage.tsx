import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSeriesDetails } from "../services/ApiCall";
import { Series } from "../types/series";
import { Loader } from "../components/shared/Loader";
import { MediaOverview } from "../components/shared/MediaOverview";
import { BackdropImage } from "../components/shared/BackdropImage";
import { NavigationTabs } from "../components/series/NavigationTabs";

export const SeriesPage = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Series>();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails();
    }, [id]);

    const getDetails = async () => {
        if (id) {
            setIsLoading(true);
            try {
                const data = await getSeriesDetails(parseInt(id));
                setDetails(data);
            } catch (error) {
                console.error("Failed to get details from this id.");
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
            <div className="flex flex-col pt-96 gap-10 px-5 md:px-16 p-2 bg-transparent relative z-10">
                {details && <MediaOverview details={details} />}
                {id && <NavigationTabs id={id} />}
            </div>
        </div>
    );
};
