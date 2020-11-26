import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  & .fullPlayerBar {
    display: flex;
    & .playerBar {
      width: 245px;
      height: 5px;
      background: #e1e1e1;
      cursor: pointer;
      & div {
        position: relative;
        height: 100%;
        background: #5c00ce;
        overflow: visible !important;
        width: 50%;
      }
    }
  }
  & .volumeBox {
    display: flex;
    & .volumeWraper {
      width: 70px;
      height: 5px;
      background: #e1e1e1;
      cursor: pointer;
      & div {
        position: relative;
        height: 100%;
        background: #5c00ce;
        overflow: visible !important;
        width: 50%;
      }
    }
  }
`;
