import { useState, useEffect } from "react";
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
    margin-right: -80px;
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
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(30);

  const timer = () => {
    if (seconds === 0) {
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    if (seconds === 59) {
      if (minutes === 0) {
        setMinutes(59);
      } else {
        setMinutes(minutes - 1);
      }
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 59) {
      if (hours === 0) {
        setHours(59);
      } else {
        setHours(hours - 1);
      }
    }
  }, [minutes]);

  useEffect(() => {
    if (hours === 23) {
      if (days === 0) {
        setDays(59);
      } else {
        setDays(days - 1);
      }
    }
  }, [hours]);

  useEffect(() => {
    const timeDown = setInterval(timer, 1000);
    return () => clearInterval(timeDown);
  }, [seconds]);

  return (
    <Wrapper>
      <T.H2>Tomorrowland 2020</T.H2>
      <T.H4 lColor>MUSIC FESTIVAL START IN</T.H4>
      <article>
        <div>
          <T.Span>{days}</T.Span>
          <T.P lColor>Days</T.P>
        </div>
        <div>
          <T.Span>{hours}</T.Span>
          <T.P lColor>Hours</T.P>
        </div>
        <div>
          <T.Span>{minutes}</T.Span>
          <T.P lColor>Minutes</T.P>
        </div>
        <div>
          <T.Span>{seconds}</T.Span>
          <T.P lColor>Seconds</T.P>
        </div>
      </article>
      <B.Btn btnContent="Buy tickets" />
    </Wrapper>
  );
}
