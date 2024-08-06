import { RiMovie2Fill } from "react-icons/ri";
import { DisneyPlusLogo } from "./icons/DisneyPlusLogo";
import { FaPlus, FaStar } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { PiTelevisionFill } from "react-icons/pi";
import { HiDotsVertical, HiHome } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const menu = [
    {
        name: "HOME",
        icon: HiHome,
    },
    {
        name: "SEARCH",
        icon: CgSearch,
    },
    {
        name: "WATCHLIST",
        icon: FaPlus,
    },
    {
        name: "ORIGINALS",
        icon: FaStar,
    },
    {
        name: "MOVIES",
        icon: RiMovie2Fill,
    },
    {
        name: "SERIES",
        icon: PiTelevisionFill,
    },
];

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black to-transparent z-[3000] fixed w-full">
                <div className="flex items-center gap-4">
                    <Link to={''}>
                        <DisneyPlusLogo height={40} />
                    </Link>
                    <div className="items-center gap-6 hidden lg:flex">
                        {menu.map((item) => (
                            <NavItem
                                key={item.name}
                                name={item.name}
                                Icon={item.icon}
                            />
                        ))}
                    </div>
                    <div
                        className="hidden sm:flex lg:hidden items-center gap-4"
                        onClick={toggleMenu}
                    >
                        {menu.map(
                            (item, index) =>
                                index < 3 && (
                                    <div className="relative group">
                                        <NavItem
                                            key={item.name}
                                            name={""}
                                            Icon={item.icon}
                                        />
                                        <span className="absolute -bottom-0 left-1 w-0 h-[2px] bg-white group-hover:w-[50%] transition-all duration-500 mt-8"></span>
                                    </div>
                                )
                        )}
                        <div className="relative">
                            <NavItem name="" Icon={HiDotsVertical} />
                            {menuOpen && (
                                <div className="absolute mt-3 z-[100] bg-[#060a12] border border-gray-800 px-6 py-3 flex flex-col rounded-md gap-3">
                                    {menu.map(
                                        (item, index) =>
                                            index >= 3 && (
                                                <NavItem
                                                    key={item.name}
                                                    name={item.name}
                                                    Icon={item.icon}
                                                />
                                            )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative sm:hidden" onClick={toggleMenu}>
                        <NavItem name="" Icon={FaBars} />
                        {menuOpen && (
                            <div className="absolute mt-3 z-[100] bg-[#060a12] border border-gray-800 px-6 py-3 flex flex-col rounded-md gap-3">
                                {menu.map((item) => (
                                    <NavItem
                                        key={item.name}
                                        name={item.name}
                                        Icon={item.icon}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2 font-light text-sm">
                    <p className="text-white font-sans">mrtinber</p>
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/JKkH3BQ6nBot5jtEMRsxLC.jpg"
                        alt="Photo de profil de l'utilisateur"
                        className="w-10 h-10 rounded-full cursor-pointer object-cover hover:scale-110 transition-all"
                    />
                </div>
            </div>
        </>
    );
};
