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
  & > svg {
    position: absolute;
    font-size: 50px;
    color: #5c00ce;
    top: 995px;
    left: 935px;
    animation: Down 0.5s infinite alternate;
  }

  @keyframes Down {
    0% {
      top: 995px;
    }
    100% {
      top: 1005px;
    }
  }
`;
