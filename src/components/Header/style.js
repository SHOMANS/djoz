import styled from "styled-components";
import HeaderImg from "./HeaderImg.png";

export const Wrapper = styled.header`
  background-image: url(${HeaderImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  padding-bottom: 295px;
  padding-top: 400px;
  position: relative;
  color: #ffffff;
  & .HeaderContent {
    height: 360px;
    margin: auto;
    text-align: center;
    & .upNormalText {
      font-family: "Rockville Solid Regular";
    }
    & a {
      margin: auto;
    }
  }
  .icon-wrapper {
    position: absolute;
    background-color: inherit;
    height: 50px;
    width: 100%;
    bottom: 0;
    text-align: center;
    & > svg {
      /* position: absolute; */
      font-size: 50px;
      color: #5c00ce;
      /* top: 0; */
      /* left: 935px; */
      animation: Down 0.5s infinite alternate;
    }
  }

  @keyframes Down {
    0% {
      margin-top: 0;
    }
    100% {
      margin-top: 10px;
    }
  }
`;
