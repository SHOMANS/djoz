import styled from "styled-components";

import Imgurl from "./details-pic.jpg";

export const Wrapper = styled.section`
  border-top: 1px solid #f2f2f2;
  padding: 15px 0 20px;
  text-align: left;
  margin: 0 30px;
  display: flex;

  & ul {
    display: flex;
    width: 50%;
    & li {
      font-size: 13px;
      color: #888888;
      display: inline-block;
      list-style: none;
      margin-right: 20px;
      position: relative;
    }
    & li:first-child::after {
      position: absolute;
      right: -14px;
      top: -2px;
      content: "|";
    }
  }
  & ul:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Img = styled.div`
  background-image: url(${Imgurl});
  height: 385px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;
export const Span = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  color: #5c00ce;
`;
export const Content = styled.div`
  background: #ffffff;
  padding-top: 30px;
`;
export const MiddleContent = styled.div`
  border: 1px solid #e1e1e1;
  padding: 35px 40px 35px 40px;
  position: relative;
  margin-bottom: 35px;
  & p {
    font-size: 18px;
    color: #111111;
    line-height: 31px;
  }
  & h6 {
    font-size: 15px;
    color: #888888;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Rajdhani", sans-serif;
  }
  & svg {
    font-size: 36px;
    color: #5c00ce;
    position: absolute;
    right: 40px;
    bottom: 35px;
  }
`;
