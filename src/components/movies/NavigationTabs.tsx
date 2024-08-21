import { useState } from "react";
import { MovieSuggested } from "./MovieSuggested";
import { MovieDetails } from "./MovieDetails";

type TabButtons = "SUGGESTED" | "EXTRAS" | "DETAILS";

export const NavigationTabs = ({id} : {id: string}) => {
    const [activeButton, setActiveButton] = useState<TabButtons>("SUGGESTED");

    return (
        <div className="w-full">
            <div className="flex gap-12 border-b-[3px] border-white/30 pb-1">
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

            {activeButton === "SUGGESTED" ? (
                <MovieSuggested seriesId={id} />
            ) : activeButton === "DETAILS" ? (
                <MovieDetails seriesId={id} />
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
