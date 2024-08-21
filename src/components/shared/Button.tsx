import { ReactNode } from "react";

export const Button = ({label}: {label: ReactNode}) => {
    return (
        <button className="text-white flex items-center justify-center gap-2 bg-white/30 hover:bg-white hover:text-[#292c36] hover:scale-110 w-10 rounded-full aspect-square transition-all">
            {label}
        </button>
    );
};
