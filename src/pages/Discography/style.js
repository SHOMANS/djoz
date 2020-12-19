import styled from "styled-components";

export const Wrapper = styled.section`
  padding-bottom: 40px;
  padding-top: 120px;
  overflow: hidden;
  text-align: center;
  & section {
    display: flex;
    flex-wrap: wrap;
    margin-top: 90px;
    .pages {
      text-align: center;
      padding-top: 10px;
      width: 100%;
    }
  }
`;
