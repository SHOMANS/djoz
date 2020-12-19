import styled from "styled-components";

// export const Img = styled.div`
//   background-image: url(${Imgurl});
//   height: 385px;
//   position: relative;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: top center;
// `;

export const Section = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  & > div {
    width: 33.333%;
    & > div {
      text-align: left;
    }
    & span {
      color: #888888;
      font-size: 13px;
    }
  }
`;
