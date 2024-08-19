import DisneyIntroVideo from "../assets/videos/disney_intro.mp4";
import StarWarsIntroVideo from "../assets/videos/starwars_intro.mp4";
import NationalGeographicIntro from "../assets/videos/national_geographic_intro.mp4";
import PixarIntroVideo from "../assets/videos/pixar_intro.mp4";
import MarvelIntroVideo from "../assets/videos/marvel_intro.mp4";

interface Config {
    [key: string]: {
        backdropVideo: string;
        seriesCompanyId: number;
    };
}

const config: Config = {
    "2": {
        backdropVideo: DisneyIntroVideo,
        seriesCompanyId: 6125,
    },
    "420": {
        backdropVideo: MarvelIntroVideo,
        seriesCompanyId: 420,
    },
    "7521": {
        backdropVideo: NationalGeographicIntro,
        seriesCompanyId: 7521,
    },
    "3": {
        backdropVideo: PixarIntroVideo,
        seriesCompanyId: 3,
    },
    "1": {
        backdropVideo: StarWarsIntroVideo,
        seriesCompanyId: 1,
    },
};

export const getConfigValues = (companyId: string) => {
    const backdropVideo = config[companyId]?.backdropVideo || "";
    const seriesCompanyId = config[companyId]?.seriesCompanyId || 0;

    return { backdropVideo, seriesCompanyId };
};