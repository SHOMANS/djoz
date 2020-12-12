import Form from "../../components/Form";
import * as T from "../../components/Typography";
import * as I from "../Icons";
import * as S from "./style.js";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  & span {
    color: #111;
    display: block;
    font-size: 15px;
    font-family: "Now Regular";
    letter-spacing: 0;
  }
`;

export default function ContactInfo() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="contactInfo">
            <T.H3>Contact info</T.H3>
            <T.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </T.P>
            <Wrapper>
              <li>
                <I.ContactIcon iconName="map-marker-alt" headen="Address">
                  <T.P>Los Angeles Gournadi, 1230 Bariasl</T.P>
                </I.ContactIcon>
              </li>
              <li>
                <I.ContactIcon iconName="phone-alt" headen="Hotline">
                  <T.Span>1-677-124-44227</T.Span>
                  <T.Span>1-688-356-66889</T.Span>
                </I.ContactIcon>
              </li>
              <li>
                <I.ContactIcon iconName="envelope" headen="Email">
                  <T.P>Support@gamail.com</T.P>
                </I.ContactIcon>
              </li>
            </Wrapper>
          </div>
          <Form>
            <T.H3>Get in touch</T.H3>
            <T.P>
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </T.P>
          </Form>
        </div>
      </div>
    </S.Wrapper>
  );
}
