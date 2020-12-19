import * as C from "../../../components/Card";
import * as T from "../../../components/Typography";
import * as B from "../../../components/Btn";
import * as S from "./style";
import Img from "./assets/large-item.jpg";

import { useState, useEffect } from "react";
import { pagesData, pagesArray, pages } from "./data";

export default function LastestPosts() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(pagesData[0]);

  const handleClick = (e) => {
    e.preventDefault();
    const click = e.target.id;
    console.log(click);
    if (isNaN(click) === true) {
      console.log("not number");
      click === "next" && setNumber(number + 1);
      click === "prev" && setNumber(number - 1);
    } else {
      console.log("number");
      setNumber(click - 1);
    }
  };

  useEffect(() => {
    setData(pagesData[number]);
  }, [number]);
  return (
    <S.Section>
      <T.HWB BH="Music blog">LATEST POSTS</T.HWB>
      <C.ACard staticCard cardImg={Img} imgSize={"370px"}>
        <T.H4>
          Guidelines for music festival event organisers: music festival harm
          reduction - December 2019
        </T.H4>
        <T.P>
          Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt ut
          labore et dolore
        </T.P>
        <div className="post-info">
          <ul>
            <li>
              By <span>ERNA O’CONNER</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
          <ul>
            <li>230 Views</li>
            <li>18 Comments</li>
          </ul>
        </div>
      </C.ACard>
      <S.Wrapper>
        <div className="cards">
          {data.map((card) => (
            <div className="cardBox">
              <C.ACard
                staticCard
                key={card.id}
                cardImg={card.imgSrc}
                imgAlt={card.imgAlt}
              >
                <span>{card.span}</span>
                <T.H4>{card.description}</T.H4>
                <ul>
                  <li>
                    By <span>{card.by}</span>
                  </li>
                  <li>{card.date}</li>
                </ul>
              </C.ACard>
            </div>
          ))}
        </div>
        <div className="pages">
          {number !== 0 && (
            <B.PageBtn id="prev" onClick={handleClick}>
              Prev
            </B.PageBtn>
          )}
          {pagesArray.map((page) => (
            <B.PageBtn
              className={page === number + 1 && "active"}
              id={page}
              href=""
              key={page}
              onClick={handleClick}
            >
              {page}
            </B.PageBtn>
          ))}
          {number !== pages - 1 && (
            <B.PageBtn id="next" onClick={handleClick}>
              NEXT
            </B.PageBtn>
          )}
        </div>
      </S.Wrapper>
    </S.Section>
  );
}
