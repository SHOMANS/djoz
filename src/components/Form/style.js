import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  & div {
    display: flex;
    margin-right: -28px;
    overflow: hidden;
    & input {
      height: 50px;
      font-size: 13px;
      color: #666666;
      padding-left: 20px;
      border: 1px solid #e1e1e1;
      width: calc(33.33% - 20px);
      margin-bottom: 20px;
      margin-right: 16px;
      overflow: visible;
      /* padding: 1px 2px; */
    }
  }
  & textarea {
    width: 100%;
    resize: none;
    height: 120px;
    /* font-size: 13px; */
    color: #666666;
    padding-left: 20px;
    padding-top: 12px;
    border: 1px solid #e1e1e1;
    margin-bottom: 14px;
    overflow: auto;
    font-family: inherit;
  }
`;
