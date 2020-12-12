import * as C from "../Card";
import * as T from "../Typography";
import Img1 from "./youtube-1.jpg";
import Img2 from "./youtube-2.jpg";
import Img3 from "./youtube-3.jpg";
import styled from "styled-components";
// import axios from "axios";

const Section = styled.section`
  text-align: center;
  padding-bottom: 50px;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  & article {
    width: 33.333%;
    padding: 0 15px;
    &:hover > div:last-of-type {
      box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
    }
  }
`;
export default function YoutubeFeed() {
  return (
    <Section>
      <div className="container">
        <T.HWB BH="Latest videos">{"YOUTUBE FEED"}</T.HWB>
        <Wrapper>
          <C.Card
            cardImg={Img1}
            content="David Guetta Miami Ultra Music Festival 2019"
          />
          <C.Card
            cardImg={Img2}
            content="Martin Garrix (Full live-set) | SLAM!Koningsdag"
          />
          <C.Card
            cardImg={Img3}
            content="Dimitri Vegas, Steve Aoki &amp; Like Mike’s “3 Are Legend”"
          />
        </Wrapper>
      </div>
    </Section>
  );
}
