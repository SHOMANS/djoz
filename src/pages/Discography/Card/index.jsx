import * as S from "./style";
// import * as T from "../../../components/Typography";
import Link1 from "../Assets/link-1.jpg";
import Link2 from "../Assets/link-2.jpg";

export default function Card({ imgSrc, imgAlt, appRef, googlrRef, children }) {
  return (
    <S.Wrapper>
      <div>
        <article className="img">
          <img src={imgSrc} alt={imgAlt} />
        </article>
        <article className="content">
          {/* <T.Span></T.Span>
          <T.H4></T.H4> */}
          {children}
          <div className="links">
            <a href={appRef}>
              <img src={Link1} alt="App Store" />
            </a>
            <a href={googlrRef}>
              <img src={Link2} alt="Google Play" />
            </a>
          </div>
        </article>
      </div>
    </S.Wrapper>
  );
}
