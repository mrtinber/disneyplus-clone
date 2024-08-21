import DisneyLogo from "../../assets/images/viewers-disney.png";
import MarvelLogo from "../../assets/images/viewers-marvel.png";
import NationalGeographicLogo from "../../assets/images/viewers-national.png";
import PixarLogo from "../../assets/images/viewers-pixar.png";
import StarWarsLogo from "../../assets/images/viewers-starwars.png";

import DisneyVideo from "../../assets/videos/1564674844-disney.mp4";
import MarvelVideo from "../../assets/videos/1564676115-marvel.mp4";
import NationalGeographicVideo from "../../assets/videos/1564676296-national-geographic.mp4";
import PixarVideo from "../../assets/videos/1564676714-pixar.mp4";
import StarWarsVideo from "../../assets/videos/1608229455-star-wars.mp4";

export const CategoryList = [
    {
        id: 1,
        logo: DisneyLogo,
        video: DisneyVideo,
        alt: "Logo Disney",
        companyId: 2,
    },
    {
        id: 2,
        logo: MarvelLogo,
        video: MarvelVideo,
        alt: "Logo Marvel",
        companyId: 420,
    },
    {
        id: 3,
        logo: NationalGeographicLogo,
        video: NationalGeographicVideo,
        alt: "Logo National Geographic",
        companyId: 7521,
    },
    {
        id: 4,
        logo: PixarLogo,
        video: PixarVideo,
        alt: "Logo Pixar",
        companyId: 3,
    },
    {
        id: 5,
        logo: StarWarsLogo,
        video: StarWarsVideo,
        alt: "Logo Star Wars",
        companyId: 1,
    },
];
