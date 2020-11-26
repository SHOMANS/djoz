import NavBar from "../NavBar";
import * as S from "./style";
import * as P from "../PlayBtn";
import Icons from "../Icons";

export default function Header() {
  return (
    <>
      <S.Wrapper>
        <NavBar />
        <div className="HeaderContent">
          <span>NEW SINGLE</span>
          <h2 className="upNormalText">Feel the heart beats</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <P.PlayBtn />
        </div>
        <Icons iconName="angle-double-down" />
      </S.Wrapper>
    </>
  );
}
