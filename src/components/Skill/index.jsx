import styled from "styled-components";
import * as T from "../Typography";

const Wrapper = styled.div`
  margin-bottom: 20px;
  .bigBar {
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    .perBar {
      background: rgb(255, 255, 255);
      height: 5px;
      width: ${(props) => props.scillPer || "0"};
      /* transition: width 1s ease-in-out 0s; */
    }
    & span {
      margin-top: -32px;
      padding: 0;
      font-size: 15px;
      color: #fff;
      background: transparent;
      left: 392.141px;
      /* transition: left 1s ease-in-out 0s; */
      position: absolute;
      z-index: 2;
    }
  }
`;

export default function Skill({ skillName, scillPer }) {
  return (
    <Wrapper scillPer={scillPer}>
      <T.P lColor>{skillName}</T.P>
      <div className="bigBar">
        <div className="perBar" />
        <span>{scillPer}</span>
      </div>
    </Wrapper>
  );
}
