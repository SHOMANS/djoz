import styled from "styled-components";
import Img from "./skill-video.jpg";

export const Wrapper = styled.div`
  padding-bottom: 0;
  padding-top: 80px;
  .container {
    padding: 0;
  }
  .Wrapper {
    display: flex;
  }
  .skillsContant {
    background: #5c00ce;
    height: 500px;
    padding: 100px 70px 60px;
    width: 50%;
  }
  .imgBox {
    background-image: url(${Img});
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
