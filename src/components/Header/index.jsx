import NavBar from "../NavBar";
import * as S from "./style";
import * as P from "../PlayBtn";
import * as T from "../Typography";
import * as I from "../Icons";

export default function Header() {
  return (
    <>
      <S.Wrapper>
        <NavBar headerNav home />
        <div className="HeaderContent">
          <T.Span>NEW SINGLE</T.Span>
          <T.H2 className="upNormalText">Feel the heart beats</T.H2>
          <T.P lColor>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </T.P>
          <P.PlayBtn />
        </div>
        <div className="icon-wrapper">
          <I.Icons iconName="angle-double-down" />
        </div>
      </S.Wrapper>
    </>
  );
}
