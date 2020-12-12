import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPlay,
  faPhoneAlt,
  faEnvelope,
  faAngleDoubleDown,
  faAngleRight,
  faAngleLeft,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faMapMarkerAlt,
  faHeart,
  faPaperPlane,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

library.add(
  faPlay,
  faPhoneAlt,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
  faAngleDoubleDown,
  faAngleRight,
  faAngleLeft,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faMapMarkerAlt,
  faHeart,
  faPaperPlane,
  faHome
);

const Wrapper = styled.a`
  display: inline-block;
  font-size: 18px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  cursor: ${(props) => (props.curserp ? "pointer" : "auto")};
  ${(props) =>
    props.white
      ? "color: #111111; background: #f2f2f2;"
      : "background: #fff; color: #5c00ce;"};
`;

const CWrapper = styled.li`
  padding-left: 100px;
  position: relative;
  margin-bottom: 30px;
  /* display: flex; */
  & h5 {
    font-size: 20px;
    color: #111111;
    font-weight: 700;
    margin-bottom: 10px;
  }

  & .iconWrapper {
    font-size: 30px;
    height: 70px;
    width: 70px;
    background: #f5f5f5;
    border-radius: 50%;
    line-height: 70px;
    text-align: center;
    color: #5c00ce;
    position: absolute;
    left: 0;
    top: -4px;
  }
`;

export function Icons(props) {
  const { iconName } = props;
  return <FontAwesomeIcon curserp icon={iconName} />;
}

export function Footericon(props) {
  const { iconName, curserp, white } = props;
  return (
    <Wrapper curserp={curserp} white={white}>
      <Icons iconName={iconName} />
    </Wrapper>
  );
}

export function ContactIcon(props) {
  const { iconName, curserp, white, headen, children } = props;
  return (
    <CWrapper curserp={curserp} white={white}>
      <div className="iconWrapper">
        <Icons iconName={iconName} />
      </div>
      <div>
        <h5>{headen}</h5>
        {children}
      </div>
    </CWrapper>
  );
}
