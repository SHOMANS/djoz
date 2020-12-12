import styled from "styled-components";
import Img from "./countdown-bg.jpg";
import * as T from "../Typography";
import * as B from "../Btn";

const Wrapper = styled.section`
  background-image: url(${Img});
  padding-bottom: 560px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  text-align: center;
  & > h2 {
    font-size: 90px;
    color: #ffffff;
    font-family: "Rockville Solid Regular";
    color: #ffffff;
    margin-bottom: 25px;
  }
  & h4 {
    font-size: 26px;
    font-family: "Now Regular";
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: -20px;
    padding-bottom: 30px;
  }
  & article {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  & div {
    display: inline-block;
    margin-right: 80px;
    margin-bottom: 30px;
  }
  & span {
    font-size: 90px;
    font-family: "Rajdhani", sans-serif;
    font-weight: 700;
    color: #ffffff;
    display: block;
    line-height: 100px;
  }
  p {
    color: #ffffff;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;

export default function FestivalTimer() {
  return (
    <Wrapper>
      <T.H2>Tomorrowland 2020</T.H2>
      <T.H4 lColor>MUSIC FESTIVAL START IN</T.H4>
      <article>
        <div>
          <T.Span>29</T.Span>
          <T.P lColor>DAYS</T.P>
        </div>
        <div>
          <T.Span>09</T.Span>
          <T.P lColor>Hours</T.P>
        </div>
        <div>
          <T.Span>02</T.Span>
          <T.P lColor>Minutes</T.P>
        </div>
        <div>
          <T.Span>59</T.Span>
          <T.P lColor>Seconds</T.P>
        </div>
      </article>
      <B.Btn btnContent="Buy tickets" />
    </Wrapper>
  );
}
