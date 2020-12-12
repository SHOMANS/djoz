import styled from "styled-components";

const Wrapper = styled.section`
  width: 50%;
  flex-basis: 41.6667%;
  position: relative;
  & div {
    position: relative;
    z-index: 1;
    & img {
      position: relative;
      top: -50px;
      width: calc(100% - 40px);
      margin-left: 40px;
      height: 502px;
    }
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #f5f5f5;
      content: "";
      z-index: -1;
    }
  }
`;

// const Wrapper = styled.section`
//   width: 50%;
//   flex-basis: 41.6667%;
//   position: relative;
//   flex-basis: 50%;
//   & div {
//     position: relative;
//     z-index: 1;
//     padding-right: 50px;
//     margin-bottom: 110px;
//     padding-left: 30px;
//     & img {
//       position: relative;
//       top: -50px;
//       width: 100%;
//       margin-left: 40px;
//       height: 502px;
//     }
//     &::after {
//       position: absolute;
//       left: 50px;
//       top: -50px;
//       width: calc(100% - 50px);
//       height: 100%;
//       border: 20px solid rgba(9, 53, 247, 0.1);
//       content: "";
//       z-index: -1;
//     }
//   }
// `;

export default function FramedImg({ imgSrc, imgAlt }) {
  return (
    <Wrapper>
      <div className="imgBox">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </Wrapper>
  );
}
