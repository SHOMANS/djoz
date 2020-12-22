import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Links from "../../components/Links";
import { SmallPlayBtn } from "../../components/PlayBtn";
import { H4, H5, HWB } from "../../components/Typography";
import { Card } from "../../components/Card";
import * as S from "./style";

const data = [
  { imgSrc: "", id: 1, content: "", date: "", time: "" },
  { imgSrc: "", id: 2, content: "", date: "", time: "" },
  { imgSrc: "", id: 3, content: "", date: "", time: "" },
  { imgSrc: "", id: 4, content: "", date: "", time: "" },
  { imgSrc: "", id: 5, content: "", date: "", time: "" },
  { imgSrc: "", id: 6, content: "", date: "", time: "" },
];

export default function VideosPage() {
  return (
    <div>
      <NavBar videos />
      <Links>Videos</Links>
      <div className="container">
        <S.Wrapper>
          <HWB BH="Latest videos">YOUTUBE FEED</HWB>
          <div className="img">
            <SmallPlayBtn bgColor />
            <div className="content">
              <H4>
                Martin Garrix &amp; Pierce Fulton feat. Mike Shinoda - Waiting
                For Tomorrow {"("}Official Video{")"}
                <ul>
                  <li>02:35:18</li>
                  <li> Dec 17, 2019</li>
                </ul>
              </H4>
            </div>
          </div>

          <div className="slider">
            <div className="slides">
              {data.map((slide) => (
                <Card>
                  <H5>{slide.content}</H5>
                  <ul>
                    <li>{slide.time}</li>
                    <li>{slide.date}</li>
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </S.Wrapper>
      </div>
      <Footer />
    </div>
  );
}
