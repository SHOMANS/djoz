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
  faPaperPlane
);

export default function Icons(props) {
  const { iconName } = props;
  return <FontAwesomeIcon pointer icon={iconName} />;
}
