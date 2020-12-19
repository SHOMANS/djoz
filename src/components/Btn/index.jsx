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
const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  padding: 14px 25px 12px;
  color: #fff;
  background: #5c00ce;
  letter-spacing: 2px;
  cursor: pointer;
  height: 50px;
  width: 100%;
`;
const White = styled(Wrapper)`
  background: transparent;
  border: 2px solid #5c00ce;
  color: #111;
`;
const Page = styled.a`
  display: inline-block;
  font-size: 15px;
  color: #111111;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: #f2f2f2;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 14px 22px 12px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #290849;
    color: #ffffff;
  }
  &.active {
    background: #290849;
    color: #ffffff;
    transform: scale(1.1);
  }
`;

export function Btn(props) {
  const { bgColor, btnContent } = props;
  return <Wrapper bgColor={bgColor}>{btnContent}</Wrapper>;
}
export function NBtn(props) {
  const { bgColor, btnContent } = props;
  return <Button bgColor={bgColor}>{btnContent}</Button>;
}

export function WBtn(props) {
  const { bgColor, btnContent } = props;
  return <White bgColor={bgColor}>{btnContent}</White>;
}

export function PageBtn(props) {
  const { children, onClick, id, className } = props;
  return (
    <Page className={className} id={id} onClick={onClick}>
      {children}
    </Page>
  );
}
