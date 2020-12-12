import * as C from "../Card";
import * as S from "./style";
import * as T from "../Typography";
import Img1 from "./event-1.jpg";
import Img2 from "./event-2.jpg";
import Img3 from "./event-3.jpg";
import * as I from "../Icons";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    url: Img1,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 2,
    url: Img2,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 3,
    url: Img3,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 4,
    url: Img1,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 5,
    url: Img2,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 6,
    url: Img3,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 7,
    url: Img1,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 8,
    url: Img2,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 9,
    url: Img3,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 10,
    url: Img1,
    date: "Des 15, 2019",
    title: "David Guetta Miami Ultra",
    content: " Funkhaus Berlin, Berlin, Germany",
  },
];

// const width = data.length * 390;

export default function UncomingEvents() {
  const [translateX, setTranslateX] = useState(-1170);
  const [tTranslateX, setTTranslateX] = useState("translateX(-1170px)");

  const goRight = () => {
    setTranslateX(translateX - 390);
    if (translateX === -2730) {
      setTranslateX(0);
    }
  };
  const goLeft = () => {
    setTranslateX(translateX + 390);
    if (translateX === 0) {
      setTranslateX(-2730);
    }
  };

  const timer = () => {
    setTranslateX(translateX - 390);
    if (translateX === -2730) {
      setTranslateX(0);
    }
  };

  useEffect(() => {
    const slide = setInterval(timer, 3000);
    return () => clearInterval(slide);
  }, [translateX]);

  useEffect(() => {
    setTTranslateX(`translateX(${translateX}px)`);
  }, [translateX]);

  return (
    <S.Section>
      <div className="container">
        <S.Header>
          <T.H3>UPCOMING EVENTS</T.H3>
        </S.Header>
        <S.Wrapper translateX={tTranslateX}>
          <div className="sliderControl">
            <button onClick={goLeft}>
              <I.Icons iconName="angle-left" />
            </button>
            <button onClick={goRight}>
              <I.Icons iconName="angle-right" />
            </button>
          </div>
          <div className="slider">
            <div className="cards">
              {data.map((card) => (
                <C.SCard
                  cardImg={card.url}
                  cardDate={card.date}
                  cardTitle={card.title}
                  cardContent={card.content}
                  key={card.id}
                />
              ))}
            </div>
          </div>
        </S.Wrapper>
      </div>
    </S.Section>
  );
}
