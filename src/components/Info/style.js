import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    padding-right: 15px;
    padding-left: 15px;
    width: 50%;
    & h3 {
      font-size: 42px;
      color: #111111;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 55px;
    }
    & p {
      font-size: 15px;
      font-family: "Now Regular";
      color: #444444;
      font-weight: 400;
      line-height: 26px;
      margin: 0 0 15px 0;
      margin-bottom: 35px;
    }
    &img {
      margin: 15px;
    }
  }
`;

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;
