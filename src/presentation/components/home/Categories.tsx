import { Link } from "react-router-dom";
import { CategoryList } from "../../../infrastructure/data/CategoryList";

export const Categories = () => {
    return (
        <div className="flex items-center gap-5 px-5 md:px-16 p-2 bg-transparent">
            {CategoryList.map((item) => (
                <Link
                    to={`studio/${item.companyId}`}
                    key={item.id}
                    className="relative bg-gradient-to-b from-transparent to-[#171724] border-2 border-gray-200 rounded-md cursor-pointer hover:scale-110 transition-all shadow-xl shadow-black"
                >
                    <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        src={item.video}
                        className="w-full h-full absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
                    />
                    <img
                        src={item.logo}
                        alt={item.alt}
                        className="w-full z-10"
                    />
                </Link>
            ))}
        </div>
    );
};
