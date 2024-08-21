import { useEffect, useState } from "react";
import { DetailsTab } from "./DetailsTab";
import { Episodes } from "./series/Episodes";
import { Suggested } from "./Suggested";
import { Series } from "../../../domain/types/series";
import { isSeries } from "../../../infrastructure/utils/typeGuards";
import { Movie } from "../../../domain/types/movie";

type TabButtons = "EPISODES" | "SUGGESTED" | "DETAILS" | "EXTRAS";

export const NavigationTabs = ({
    id,
    details,
}: {
    id: string;
    details: Series | Movie;
}) => {
    const [activeButton, setActiveButton] = useState<TabButtons>("DETAILS");

    useEffect(() => {
        const initialButton: TabButtons = isSeries(details)
            ? "EPISODES"
            : "DETAILS";
        setActiveButton(initialButton);
    }, []);

    return (
        <div className="w-full">
            <div className="flex gap-12 border-b-[3px] border-white/30 pb-1">
                {isSeries(details) && (
                    <button
                        className={`relative transition-all ${
                            activeButton === "EPISODES"
                                ? "text-white"
                                : "text-white/30"
                        }`}
                        onClick={() => setActiveButton("EPISODES")}
                    >
                        EPISODES
                        {activeButton === "EPISODES" && (
                            <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                        )}
                    </button>
                )}
                <button
                    className={`relative transition-all ${
                        activeButton === "SUGGESTED"
                            ? "text-white"
                            : "text-white/30"
                    }`}
                    onClick={() => setActiveButton("SUGGESTED")}
                >
                    SUGGESTED
                    {activeButton === "SUGGESTED" && (
                        <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                    )}
                </button>
                {!isSeries(details) && (
                    <button
                        className={`relative transition-all ${
                            activeButton === "EXTRAS"
                                ? "text-white"
                                : "text-white/30"
                        }`}
                        onClick={() => setActiveButton("EXTRAS")}
                    >
                        EXTRAS
                        {activeButton === "EXTRAS" && (
                            <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                        )}
                    </button>
                )}
                <button
                    className={`relative transition-all ${
                        activeButton === "DETAILS"
                            ? "text-white"
                            : "text-white/30"
                    }`}
                    onClick={() => setActiveButton("DETAILS")}
                >
                    DETAILS
                    {activeButton === "DETAILS" && (
                        <span className="absolute border-b-white border-b-[3px] bottom-[-6px] left-0 w-full"></span>
                    )}
                </button>
            </div>

            {activeButton === "EPISODES" ? (
                <Episodes seriesId={id} />
            ) : activeButton === "DETAILS" ? (
                <DetailsTab id={id}  details={details}/>
            ) : activeButton === "SUGGESTED" ? (
                <Suggested id={id} details={details} />
            ) : (
                <p className="text-white py-6 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, est, obcaecati qui voluptates recusandae cumque
                    dolore vel, pariatur quibusdam veniam veritatis! At ex
                    delectus quo aliquam. Sit porro reprehenderit sint itaque
                    eligendi, ratione adipisci repellendus mollitia commodi
                    ipsum amet dignissimos cumque doloremque quod sapiente ipsa
                    natus maxime magnam eos voluptatum voluptatibus nobis omnis
                    optio? Magni quo ad corrupti distinctio eligendi ullam!
                    Iusto autem velit repellendus quis! In nemo rem ipsam
                    temporibus consequatur nisi odio inventore ex officiis
                    voluptatibus architecto sunt, quisquam autem voluptatum
                    deleniti sapiente quibusdam eligendi expedita vel. Quisquam
                    ab modi porro esse et! Esse enim sed sint illum voluptas.
                    Sapiente voluptas, error voluptate totam aspernatur
                    eligendi. Magni laborum eligendi consectetur ratione ea sit
                    sapiente illo veritatis obcaecati! Unde molestias qui,
                    tempore cupiditate sapiente nam quaerat hic illum, saepe est
                    dicta fuga sint quas ut laborum veritatis quo dolorem,
                    corrupti dolore sit distinctio ipsum iste sunt repellat!
                    Sed, eos.
                </p>
            )}
        </div>
    );
};
