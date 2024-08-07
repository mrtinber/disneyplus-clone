import { FaPlay } from "react-icons/fa";

export const PlayButton = ({label}: {label: string}) => {
    return (
        <button className="text-white flex items-center justify-center gap-2 bg-white/30 hover:bg-white hover:text-[#292c36] px-6 py-2 rounded-sm transition-all">
            <FaPlay className="text-sm" />
            <p className="text-sm font-sans font-normal">{label}</p>
        </button>
    );
};
