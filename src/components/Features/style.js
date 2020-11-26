import styled from "styled-components";
import FeaturesOmg from "./FeaturesOmg.jpg";

export const Wrapper = styled.section`
  display: flex;
  & .featuresImg {
    background-image: url(${FeaturesOmg});
    width: 50%;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
  & .features {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    color: #ffffff;
  }
`;
