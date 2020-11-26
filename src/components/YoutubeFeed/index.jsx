import VideoCard from "./VideoCard";
import Img1 from "./youtube-1.jpg";
import Img2 from "./youtube-2.jpg";
import Img3 from "./youtube-3.jpg";
import styled from "styled-components";

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
    <section>
      <div className="container">
        <h2>Latest videos</h2>
        <h3>YOUTUBE FEED</h3>
        <Wrapper>
          <VideoCard
            imgSrc={Img1}
            content="David Guetta Miami Ultra Music Festival 2019"
          />
          <VideoCard
            imgSrc={Img2}
            content="Martin Garrix (Full live-set) | SLAM!Koningsdag"
          />
          <VideoCard
            imgSrc={Img3}
            content="Dimitri Vegas, Steve Aoki &amp; Like Mike’s “3 Are Legend”"
          />
        </Wrapper>
      </div>
    </section>
  );
}
