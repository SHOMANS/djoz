import styled from "styled-components";
import Icons from "../Icons";

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  ${(props) =>
    props.bgColor
      ? "background-color: rgba(42, 1, 74, 0.5);"
      : "background-color: rgba(255, 255, 255, 0.3);"}
  border-radius: 50%;
  color: #123654;
  cursor: pointer;
  & div {
    display: inline-block;
    height: 60px;
    width: 60px;
    ${(props) =>
      props.bgColor
        ? "background: linear-gradient(to right, #7e00ad, #5c00ce); color: #ffffff;"
        : "background-color: #ffffff; color: #5c00ce    ;"}
    border-radius: 50%;
    position: relative;
    & svg {
      top: 17px;
      left: 21px;
      position: absolute;
      font-size: 26px;
    }
  }
`;

const SmallWrapper = styled.a`
  position: relative;
  height: 50px;
  width: 50px;
  background: transparent;
  border: 2px solid #e1e1e1;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  color: #5c00ce;
  & svg {
    top: 13px;
    left: 17px;
    position: absolute;
    font-size: 20px;
  }
`;
const SmallestWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  ${(props) =>
    props.bgColor
      ? "background-color: rgba(42, 1, 74, 0.5);"
      : "background-color: rgba(255, 255, 255, 0.3);"}
  border-radius: 50%;
  color: #123654;
  cursor: pointer;
  & div {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    color: #5c00ce;
    border-radius: 50%;
    position: relative;
    & svg {
      top: 14px;
      left: 16px;
      position: absolute;
      font-size: 13px;
    }
  }
`;

export function PlayBtn(props) {
  const { bgColor, hrefLink } = props;
  return (
    <Wrapper bgColor={bgColor} href={hrefLink}>
      <div>
        <Icons iconName="play" />
      </div>
    </Wrapper>
  );
}
export function SmallPlayBtn(props) {
  const { bgColor, hrefLink } = props;
  return (
    <SmallWrapper bgColor={bgColor} href={hrefLink}>
      <Icons iconName="play" />
    </SmallWrapper>
  );
}
export function SmallestPlayBtn(props) {
  const { bgColor, hrefLink } = props;
  return (
    <SmallestWrapper bgColor={bgColor} href={hrefLink}>
      <div>
        <Icons iconName="play" />
      </div>
    </SmallestWrapper>
  );
}
