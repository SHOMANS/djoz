import styled from "styled-components";
import Img from "./countdown-bg.jpg";

const Wrapper = styled.section`
  background-image: url(${Img});
  padding-bottom: 560px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

export default function FestivalTimer() {
  return (
    <Wrapper>
      <h2>Tomorrowland 2020</h2>
      <h4>MUSIC FESTIVAL START IN</h4>
      <article>
        <div>
          <span>29</span>
          <p>DAYS</p>
        </div>
        <div>
          <span>09</span>
          <p>Hours</p>
        </div>
        <div>
          <span>02</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>59</span>
          <p>Seconds</p>
        </div>
      </article>
    </Wrapper>
  );
}
