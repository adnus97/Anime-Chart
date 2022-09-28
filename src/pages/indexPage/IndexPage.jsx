import { Nav } from "../../components/nav";
import { Card } from "../../components/card";
import { useState, useEffect } from "react";
import { CardContainer, TvTitle } from "./index.style";
import { useParams } from "react-router-dom";
import { darkTheme } from "../../stiches.theme";

export const IndexPage = () => {
  const [currentSeason, setCurrentSeason] = useState([]);
  const [toggle, setToggle] = useState(false);
  const param = useParams();
  console.log(param);
  useEffect(() => {
    const onLoad = async () => {
      let animeData = [];
      let index = 1;
      let jsonRes;
      let res;
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      let command;
      do {
        if (!param.season) {
          command = `https://api.jikan.moe/v4/seasons/now?page=${index}`;
        } else if (param.season === "Winter" && month >= 9) {
          command = `https://api.jikan.moe/v4/seasons/${year + 1}/${
            param.season
          }?page=${index}`;
        } else if (
          ["Fall", "Spring", "Summer", "Winter"].includes(param.season)
        ) {
          command = `https://api.jikan.moe/v4/seasons/${year}/${param.season}?page=${index}`;
        }
        res = await fetch(command);
        jsonRes = await res.json();
        animeData.push(...jsonRes.data);
        index++;
      } while (jsonRes.pagination.has_next_page);
      setCurrentSeason(animeData);
    };
    onLoad();
  }, [param]);

  const arr = currentSeason.map((el) => {
    return (
      <Card
        img={el.images.jpg.image_url}
        key={el.mal_id}
        titleEng={el.title_english}
        titleJp={el.title}
        ep={el.episodes}
        aired={el.aired.string}
        studio={el.studios[0]?.name}
        trailerImg={el.trailer.images.image_url}
        trailer={el.trailer.embed_url}
        youId={el.trailer.youtube_id}
        synopsis={el.synopsis}
        genres={el.genres}
        url={el.url}
        score={el.score}
        toggle={toggle}
        setToggle={setToggle}
      />
    );
  });
  return (
    <>
      <Nav season={param.season} toggle={toggle} setToggle={setToggle} />
      <CardContainer
        className={toggle ? darkTheme : ""}
        size={{ "@initial": "1", "@bp4": "2" }}
      >
        <TvTitle>TV</TvTitle>
        {arr}
      </CardContainer>
    </>
  );
};
