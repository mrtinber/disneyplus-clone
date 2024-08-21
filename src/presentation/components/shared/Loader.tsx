export const Loader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-transparent">
            <svg
                version="1.1"
                id="L9"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 0 0"
                className="animate-spin"
                width={72}
            >
                <defs>
                    <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            style={{ stopColor: "#171724", stopOpacity: 0.5 }}
                        />
                        <stop
                            offset="40%"
                            style={{ stopColor: "#003471", stopOpacity: 1 }}
                        />
                        <stop
                            offset="90%"
                            style={{ stopColor: "#4EC5CB", stopOpacity: 1 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: "white", stopOpacity: 1 }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient1)"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                ></path>
            </svg>
        </div>
    );
}
