import { useState } from "react";
import { DetailsTab } from "./DetailsTab";
import { Episodes } from "./Episodes";
import { Suggested } from "./Suggested";

type TabButtons = "EPISODES" | "SUGGESTED" | "DETAILS";

export const NavigationTabs = ({id} : {id: string}) => {
    const [activeButton, setActiveButton] = useState<TabButtons>("EPISODES");

    return (
        <div className="w-full">
            <div className="flex gap-12 border-b-[3px] border-white/30 pb-1">
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
                <DetailsTab seriesId={id} />
            ) : (
                <Suggested seriesId={id} />
            )}
        </div>
    );
};
