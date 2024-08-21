import { useEffect, useRef } from "react";

export const BackdropVideo = ({ backdropVideo }: { backdropVideo: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleTimeUpdate = () => {
                if (video.currentTime >= 29) {
                    // Mettre en pause, ajustez selon votre besoin
                    video.pause();
                }
            };

            video.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                video.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    });

    return (
        <div className="relative">
            <video
                ref={videoRef}
                muted
                loop
                autoPlay
                playsInline
                src={backdropVideo}
                className="w-full h-96 md:h-screen object-cover"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-25% md:to-15%"></div>
        </div>
    );
};
