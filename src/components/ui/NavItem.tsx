import { IconType } from "react-icons";
import { Link } from "react-router-dom";

export const NavItem = ({ name, Icon, className }: { name: string; Icon: IconType; className?: string }) => {
    return (
        <button className={`group flex items-center gap-4 text-white underline-offset-8 font-sans font-normal ${className}`}>
            <Link to={''} className="flex items-center gap-4 p-2">
                <Icon />
                <div className="relative">
                    <p>{name}</p>
                    <span className="absolute -bottom-[3px] left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-500 mt-8"></span>
                </div>
            </Link>
        </button>
    );
};
