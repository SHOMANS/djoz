import React from "react";
import Footericon from "../FooterIcon";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

export default function ContactItem(props) {
  const { iconName, pContent, hContent } = props;
  return (
    <Wrapper>
      <Footericon iconName={iconName} />
      <div>
        <p>{pContent}</p>
        <h6>{hContent}</h6>
      </div>
    </Wrapper>
  );
}
