import styled from "styled-components";

const Wrapper = styled.a`
  display: inline-block;
  text-transform: uppercase;
  padding: 14px 25px 12px;
  color: #fff;
  background: #5c00ce;
  letter-spacing: 2px;
  cursor: pointer;
`;
const White = styled(Wrapper)`
  background: transparent;
  border: 2px solid #5c00ce;
  color: #111;
`;

export function Btn(props) {
  const { bgColor, btnContent } = props;
  return <Wrapper bgColor={bgColor}>{btnContent}</Wrapper>;
}

export function WBtn(props) {
  const { bgColor, btnContent } = props;
  return <White bgColor={bgColor}>{btnContent}</White>;
}
