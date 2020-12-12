import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 60px;
  padding-top: 100px;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  & ::after {
    position: absolute;
    right: 46px;
    top: 25px;
    height: 2px;
    width: 775px;
    background: rgba(225, 225, 225, 0.3);
    content: "";
    z-index: -1;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 40px;
  .sliderControl {
    position: absolute;
    right: -5px;
    top: -36px;
    & button {
      font-size: 22px;
      color: #111111;
      opacity: 0.5;
      margin-right: 10px;
      background: initial;
      border: none;
      cursor: pointer;
    }
  }
  .slider {
    overflow: hidden;
    padding-bottom: 20px;
    .cards {
      width: 3900px;
      transform: ${(props) => props.translateX};
      transition: transform 1.2s ease;
      display: flex;
      justify-content: space-between;
    }
  }
`;
