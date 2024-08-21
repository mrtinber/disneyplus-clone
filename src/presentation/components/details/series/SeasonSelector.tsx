import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface SeasonSelectorProps {
    selectedSeason: number;
    setSelectedSeason: (season: number) => void;
    numberOfSeasons: number;
}

export const SeasonSelector = ({numberOfSeasons, setSelectedSeason, selectedSeason}: SeasonSelectorProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const seasons = Array.from({ length: numberOfSeasons }, (_, i) => i + 1);

    const handleSeasonChange = (season: number) => {
        setSelectedSeason(season);
        setIsDropdownOpen(false)
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-[136px] relative" ref={dropdownRef}>
            <button
                value={selectedSeason}
                onClick={toggleDropdown}
                className={`text-white w-full flex items-center justify-between gap-2 bg-white/30 hover:bg-white hover:text-[#292c36] ${
                    isDropdownOpen
                        ? "rounded-b-none rounded-t-xl"
                        : "rounded-full"
                } py-2 px-4 transition-all`}
            >
                Season {selectedSeason}{" "}
                <FaChevronDown
                    className={`${
                        isDropdownOpen ? "rotate-180" : ""
                    } transition-transform duration-300`}
                />
            </button>
            {isDropdownOpen && (
                <div className="bg-[#696B72]/90 w-full rounded-b-xl overflow-hidden absolute top-full left-0">
                    <ul>
                        {seasons.map((season) => (
                            <li
                                key={season}
                                value={season}
                                onClick={() => handleSeasonChange(season)}
                                className="text-white hover:bg-white hover:text-[#292c36] py-2 px-4 cursor-pointer transition-all"
                            >
                                Season {season}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
