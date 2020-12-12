import { Link } from "react-router-dom";
import * as I from "../Icons";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 35px;
  & a {
    font-size: 15px;
    color: #111111;
    margin-right: 18px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    & svg {
      margin-right: 5px;
      font-size: 15px;
      position: relative;
    }
    &::after {
      position: absolute;
      right: -14px;
      top: 0;
      content: "|";
      color: #888888;
    }
  }
  & > div > span {
    font-size: 15px;
    color: #888888;
    display: inline-block;
  }
`;

export default function Links(props) {
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">
          <I.Icons iconName="home" />
          <span>Home</span>
        </Link>
        <span>{props.children}</span>
      </div>
    </Wrapper>
  );
}
