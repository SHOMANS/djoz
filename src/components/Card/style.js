import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 33.333333%;
  padding-right: 15px;
  padding-left: 15px;
  &:hover {
    box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
  }
`;
export const Article = styled.div`
  width: 390px;
  padding-left: 15px;
  padding-right: 15px;

  & .imgcontainer {
    width: 100%;
    height: 360px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.imgUrl});
  }
  & .content {
    text-align: center;
    padding: 45px 10px 25px;
    box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
    & svg {
      color: #5c00ce;
      margin-right: 8px;
    }
  }
  & .dateBox {
    position: absolute;
    left: 0;
    bottom: -21px;
    width: 100%;
    text-align: center;
    & span {
      font-size: 15px;
      color: #ffffff;
      display: inline-block;
      background: #5c00ce;
      padding: 12px 8px 9px 20px;
    }
  }
`;

export const Img = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  padding: 25px 30px 20px 20px;
  background: #ffffff;
  transition: all 0.3s;
  & h4 {
    font-size: 22px;
    color: #111111;
    line-height: 34px;
    font-weight: 700;
  }
`;

export const SmallImg = styled.div`
  height: 50px;
  width: 50px;
  background: #5c00ce;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -25px;
  & img {
    max-width: 65%;
    vertical-align: middle;
    line-height: 50px;
    text-align: center;
  }
`;
