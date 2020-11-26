import styled from "styled-components";
import FooterImg from "./footer-bg.png";

export const Wrapper = styled.footer`
  background-image: url(${FooterImg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding-top: 300px;
  padding-bottom: 60px;
  margin-top: -547px;
  height: 549px;
  & article > div:not(:nth-child(2)) {
    width: 25%;
  }
  & article > div:nth-child(2) {
    width: 50%;
  }
  & article > div {
    position: relative;
    &:not(:first-child)::before {
      position: absolute;
      left: -46px;
      /* left: 0px; */
      top: 3px;
      width: 1px;
      height: 130px;
      background: rgba(255, 255, 255, 0.2);
      content: "";
    }
  }
  & .footerCopy {
    margin: auto;
    text-align: center;
    & svg {
      color: red;
    }
    a {
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #123;
      }
    }
  }
`;
