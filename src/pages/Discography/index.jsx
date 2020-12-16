import Footer from "../../components/Footer";
import Links from "../../components/Links";
import * as T from "../../components/Typography";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import { pagesData, pagesArray, pages } from "./data";

import * as S from "./style";
import Card from "./Card";

export default function DiscographyPage() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(pagesData[0]);

  const handleClick = (e) => {
    e.preventDefault();
    setNumber(e.target.id - 1);
  };

  const nextPrev = (e) => {
    e.preventDefault();
    const click = e.target.id;
    click === "next" && setNumber(number + 1);
    click === "prev" && setNumber(number - 1);
  };

  useEffect(() => {
    setData(pagesData[number]);
  }, [number]);

  return (
    <div>
      <NavBar disco />
      <Links>Discography</Links>
      <div className="container">
        <S.Wrapper>
          <T.HWB BH="Discography">LATEST RELEASES</T.HWB>
          <section>
            {data.map((card) => (
              <Card
                key={card.id}
                imgSrc={card.imgSrc}
                imgAlt={card.imgAlt}
                appRef={card.appRef}
                googlrRef={card.googlrRef}
              >
                <span>{card.cost}</span>
                <T.H4>{card.description}</T.H4>
              </Card>
            ))}
            <div className="pages">
              {number !== 0 && (
                <a id="prev" href="" onClick={nextPrev}>
                  Prev
                </a>
              )}

              {pagesArray.map((page) => (
                <a
                  className={page === number + 1 && "active"}
                  id={page}
                  href=""
                  key={page}
                  onClick={handleClick}
                >
                  {page}
                </a>
              ))}
              {number !== pages - 1 && (
                <a id="next" href="" onClick={nextPrev}>
                  NEXT
                </a>
              )}
            </div>
          </section>
        </S.Wrapper>
      </div>
      <Footer />
    </div>
  );
}
