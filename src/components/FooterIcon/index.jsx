import styled from "styled-components";
import Icons from "../Icons";

const Wrapper = styled.a`
  display: inline-block;
  font-size: 18px;
  color: #5c00ce;
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  animation: ${(props) =>
    props.toggleC === "open"
      ? "ToggleOpen 1s"
      : props.toggleC === "close"
      ? "ToggleClose 1s"
      : "none"};
`;

export default function Footericon(props) {
  const { iconName, pointer } = props;
  return (
    <Wrapper pointer={pointer}>
      <Icons iconName={iconName} />
    </Wrapper>
  );
}
