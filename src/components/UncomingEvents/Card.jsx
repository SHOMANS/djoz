import styled from "styled-components";
import Icons from "../Icons";
import * as B from "../Btn";

const Wrapper = styled.div`
  width: 290px;
`;

export default function Card() {
  return (
    <Wrapper>
      <div></div>
      <B.Btn btnContent="Dec 15, 2019" />
      <div>
        <h4>David Guetta Miami Ultra</h4>
        <p>
          <Icons iconName="map-marker-alt" />
          Funkhaus Berlin, Berlin, Germany
        </p>
      </div>
    </Wrapper>
  );
}
