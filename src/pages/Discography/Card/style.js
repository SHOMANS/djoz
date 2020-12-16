import styled from "styled-components";

export const Wrapper = styled.div`
  width: 33.3333%;
  padding-right: 15px;
  padding-left: 15px;
  height: 599px;
  & > div {
    box-shadow: 0px 5px 10px rgba(22, 41, 124, 0.1);
    .img img {
      min-width: 100%;
    }
    .content {
      padding: 25px 30px 35px;
      text-align: center;
      & span {
        font-size: 18px;
        color: #5c00ce;
        font-weight: 700;
      }
      & h4 {
        font-size: 22px;
        text-transform: uppercase;
        color: #111111;
        margin-top: 10px;
        margin-bottom: 25px;
        font-weight: 400;
        font-family: "Rajdhani", sans-serif;
        line-height: 1.2;
      }
      .links {
        display: flex;
      }
      & a {
        display: inline-block;
        margin-right: 10px;
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        & img {
          vertical-align: middle;
          border-style: none;
        }
      }
    }
  }
`;
