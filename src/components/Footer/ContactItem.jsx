import * as I from "../Icons";
import styled from "styled-components";
import * as T from "../Typography";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 70px;
  margin-bottom: 30px;
  & a {
    /* padding-right: 20px; */

    font-size: 18px;
    color: #5c00ce;
    height: 50px;
    width: 50px;
    background: #ffffff;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
  & > div > p {
    opacity: 0.7;
    margin-bottom: 8px;
  }
`;

export default function ContactItem(props) {
  const { iconName, pContent, hContent } = props;
  return (
    <Wrapper>
      <I.Footericon iconName={iconName} />
      <div>
        <T.P lColor>{pContent}</T.P>
        <T.H6>{hContent}</T.H6>
      </div>
    </Wrapper>
  );
}
