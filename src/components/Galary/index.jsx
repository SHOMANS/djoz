import Img1 from "./GalaryImgs/ap-1.jpg";
import Img2 from "./GalaryImgs/ap-2.jpg";
import Img3 from "./GalaryImgs/ap-3.jpg";
import Img4 from "./GalaryImgs/ap-4.jpg";
import Img5 from "./GalaryImgs/ap-5.jpg";
import Img6 from "./GalaryImgs/ap-6.jpg";
import Img7 from "./GalaryImgs/ap-7.jpg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  & img {
    margin-bottom: 10px;
    padding-right: 10px;
  }
  & > div:nth-child(1) {
    display: flex;
  }
`;

export const Div = styled.div`
  width: ${(props) => props.width};
`;
export const Img = styled.img`
  width: ${(props) => props.width};
  &:nth-child(2),
  :nth-child(3) {
    margin-bottom: 18px;
  }
`;

export default function Galary() {
  return (
    <Wrapper>
      <Div width="50%">
        <Div width="33.333%">
          <Img src={Img1} alt="" width="100%" />
          <Img src={Img2} alt="" width="100%" />
        </Div>
        <Div width="66.666%">
          <Img src={Img3} alt="" width="100%" />
        </Div>
      </Div>
      <Div width="50%">
        <Img src={Img4} alt="" width="66.666%" />
        <Img src={Img5} alt="" width="33.333%" />
        <Img src={Img6} alt="" width="33.333%" />
        <Img src={Img7} alt="" width="66.666%" />
      </Div>
    </Wrapper>
  );
}
