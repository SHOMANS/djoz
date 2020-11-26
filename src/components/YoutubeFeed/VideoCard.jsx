import * as P from "../PlayBtn";
import styled from "styled-components";

const Img = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 25px 30px 20px 20px;
  background: #ffffff;
  transition: all 0.3s;
  & h4 {
    font-size: 22px;
    color: #111111;
    line-height: 34px;
    font-weight: 700;
  }
`;

export default function VideoCard({ imgSrc, content }) {
  return (
    <article>
      <Img imgUrl={imgSrc}>
        <P.SmallestPlayBtn />
      </Img>
      <Content>
        <h4>{content}</h4>
      </Content>
    </article>
  );
}
