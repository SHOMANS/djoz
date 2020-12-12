import * as I from "../Icons";
import ContactItem from "./ContactItem";
import * as S from "./style";
import * as T from "../Typography";

export default function Footer({ home }) {
  return (
    <S.Wrapper home={home}>
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
            <T.H3 lColor>DJoz</T.H3>
            <I.Footericon curserp iconName={["fab", "facebook-f"]} />
            <I.Footericon curserp iconName={["fab", "twitter"]} />
            <I.Footericon curserp iconName={["fab", "instagram"]} />
            <I.Footericon curserp iconName={["fab", "dribbble"]} />
          </div>
          <div>
            <T.H4 lColor>Stay With me</T.H4>
            <form>
              <input placeholder="Email" />
              <button>
                <I.Icons iconName="paper-plane" />
              </button>
              {/* <I.InputWithBtn /> */}
            </form>
          </div>
        </article>
        <div>
          <p className="footerCopy">
            Copyright &copy; 2020 All rights reserved | This template is made
            with
            <I.Icons iconName="heart" /> by <a>Colorlib</a>
          </p>
        </div>
      </div>
    </S.Wrapper>
  );
}
