import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, PICTURE_BASE_URL } from "../services/ApiCall";
import { Movie } from "../components/types/Movie";
import { PlayButton } from "../components/PlayButton";
import { Button } from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

export const Details = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Movie>();

    useEffect(() => {
        getDetails();
    }, [id]);

    const getDetails = async () => {
        if (id) {
            try {
                const data = await getMovieDetails(parseInt(id));
                setDetails(data);
            } catch (error) {
                console.error("Failed to get details from this id");
            }
        }
    };

    return (
        <div>
                {details && (
                    <div className="relative">
                        <img
                            src={`${PICTURE_BASE_URL}${details.backdrop_path}`}
                            alt={details.title}
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent to-30%"></div>
                    </div>
                )}
            <div className="flex flex-col gap-4 px-5 md:px-16 p-2 bg-transparent">
                <h2 className="text-white text-4xl font-bold">{details?.title}</h2>
                <div>
                    <p className="flex gap-2 text-white items-center">
                        {details?.release_date}
                        <GoDotFill className="text-sm" />
                        {details?.runtime}
                        <GoDotFill className="text-sm" />
                        {details?.genres.map((item) => <p>{item.name}</p>)}
                    </p>
                    <p className="flex gap-2 text-white items-center">
                        4K Ultra HD
                        <GoDotFill className="text-sm" />
                        5.1
                    </p>
                </div>
                <div className="flex gap-4">
                    <PlayButton label="PLAY" />
                    <PlayButton label="TRAILER" />
                    <Button label={<FaPlus className="font-bold text-lg" />} />
                    <Button
                        label={<HiMiniUserGroup className="font-bold text-2xl" />}
                    />
                </div>
                <p className="text-white font-light">{details?.overview}</p>
                <div className="w-full">
                    <div className="flex gap-12 border-b-[3px] border-white/50 pb-1">
                        <button className="text-white/50 hover:text-white transition-all">EPISODES</button>
                        <button className="text-white/50 hover:text-white transition-all">SUGGESTED</button>
                        <button className="text-white/50 hover:text-white transition-all">DETAILS</button>
                    </div>
                    <p className="text-white p-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, est, obcaecati qui voluptates recusandae cumque dolore vel, pariatur quibusdam veniam veritatis! At ex delectus quo aliquam. Sit porro reprehenderit sint itaque eligendi, ratione adipisci repellendus mollitia commodi ipsum amet dignissimos cumque doloremque quod sapiente ipsa natus maxime magnam eos voluptatum voluptatibus nobis omnis optio? Magni quo ad corrupti distinctio eligendi ullam! Iusto autem velit repellendus quis! In nemo rem ipsam temporibus consequatur nisi odio inventore ex officiis voluptatibus architecto sunt, quisquam autem voluptatum deleniti sapiente quibusdam eligendi expedita vel. Quisquam ab modi porro esse et! Esse enim sed sint illum voluptas. Sapiente voluptas, error voluptate totam aspernatur eligendi. Magni laborum eligendi consectetur ratione ea sit sapiente illo veritatis obcaecati! Unde molestias qui, tempore cupiditate sapiente nam quaerat hic illum, saepe est dicta fuga sint quas ut laborum veritatis quo dolorem, corrupti dolore sit distinctio ipsum iste sunt repellat! Sed, eos.</p>
                </div>
            </div>
        </div>
    );
};
