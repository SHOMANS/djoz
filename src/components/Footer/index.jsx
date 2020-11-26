import FooterIcon from "../FooterIcon";
import Icons from "../Icons";
import ContactItem from "./ContactItem";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Wrapper>
      <div className="container">
        <article className="wrapper">
          <div>
            <ContactItem
              iconName="phone-alt"
              pContent="Phone"
              hContent="1-677-124-44227"
            />
            <ContactItem
              iconName="envelope"
              pContent="Email"
              hContent="DJ.Music@gmail.com"
            />
          </div>
          <div>
            <h2>DJoz</h2>
            <FooterIcon pointer iconName={["fab", "facebook-f"]} />
            <FooterIcon pointer iconName={["fab", "twitter"]} />
            <FooterIcon pointer iconName={["fab", "instagram"]} />
            <FooterIcon pointer iconName={["fab", "dribbble"]} />
          </div>
          <div>
            <h4>Stay With me</h4>
            <input />
            <button>
              <Icons iconName="paper-plane" />
            </button>
            {/* <I.InputWithBtn /> */}
          </div>
        </article>
        <div>
          <p className="footerCopy">
            Copyright &copy; 2020 All rights reserved | This template is made
            with
            <Icons iconName="heart" /> by <a>Colorlib</a>
          </p>
        </div>
      </div>
    </S.Wrapper>
  );
}
