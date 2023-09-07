import { Filmes } from "../shared/filmes.module";

export class FilmesService {
  public filmes: Array<Filmes> = [
    {
          "adult": false,
          "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
          "genre_ids": [
            28,
            878,
            27
          ],
          "id": 615656,
          "original_language": "en",
          "original_title": "Meg 2: The Trench",
          "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
          "popularity": 4314.106,
          "poster_path": "/drCySAAAvegq1vQRGRqPKN9f00w.jpg",
          "release_date": "2023-08-02",
          "title": "Meg 2: The Trench",
          "video": false,
          "vote_average": 7,
          "vote_count": 1463
        },
        {
          "adult": false,
          "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
          "genre_ids": [
            35,
            12,
            14
          ],
          "id": 346698,
          "original_language": "en",
          "original_title": "Barbie",
          "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
          "popularity": 3733.791,
          "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          "release_date": "2023-07-19",
          "title": "Barbie",
          "video": false,
          "vote_average": 7.4,
          "vote_count": 3854
        },
        {
          "adult": false,
          "backdrop_path": "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
          "genre_ids": [
            12,
            28,
            14
          ],
          "id": 335977,
          "original_language": "en",
          "original_title": "Indiana Jones and the Dial of Destiny",
          "overview": "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
          "popularity": 2271.242,
          "poster_path": "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
          "release_date": "2023-06-28",
          "title": "Indiana Jones and the Dial of Destiny",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 1394
        },
        {
          "adult": false,
          "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
          "genre_ids": [
            16,
            35,
            10751,
            14,
            10749
          ],
          "id": 976573,
          "original_language": "en",
          "original_title": "Elemental",
          "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
          "popularity": 1353.757,
          "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
          "release_date": "2023-06-14",
          "title": "Elemental",
          "video": false,
          "vote_average": 7.8,
          "vote_count": 1765
        },
        {
          "adult": false,
          "backdrop_path": "/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg",
          "genre_ids": [
            27,
            14
          ],
          "id": 635910,
          "original_language": "en",
          "original_title": "The Last Voyage of the Demeter",
          "overview": "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
          "popularity": 1190.606,
          "poster_path": "/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg",
          "release_date": "2023-08-09",
          "title": "The Last Voyage of the Demeter",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 423
        },
        {
          "adult": false,
          "backdrop_path": "/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
          "genre_ids": [
            28,
            18
          ],
          "id": 678512,
          "original_language": "en",
          "original_title": "Sound of Freedom",
          "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
          "popularity": 1125.528,
          "poster_path": "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
          "release_date": "2023-07-03",
          "title": "Sound of Freedom",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 410
        },
  ]

  public getFilmes(): Array<Filmes> {
    return this.filmes;
}
}
