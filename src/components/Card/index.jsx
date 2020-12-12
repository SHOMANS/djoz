import * as S from "./style";
import * as P from "../PlayBtn";
import * as T from "../Typography";
import { Icons } from "../Icons";
// import * as B from "../Btn";

// export function Card() {
//   return (
//     <S.Wrapper>
//       <div></div>
//       <B.Btn btnContent="Dec 15, 2019" />
//       <div>
//         <h4>David Guetta Miami Ultra</h4>
//         <p>
//           <Icons iconName="map-marker-alt" />
//           Funkhaus Berlin, Berlin, Germany
//         </p>
//       </div>
//     </S.Wrapper>
//   );
// }

export function SCard({ cardImg, cardDate, cardTitle, cardContent }) {
  return (
    <S.Article imgUrl={cardImg}>
      <div className="imgcontainer">
        <div className="dateBox">
          <span>{cardDate}</span>
        </div>
      </div>
      <div className="content">
        <h4>{cardTitle}</h4>
        <T.P>
          <Icons iconName="map-marker-alt" />
          {cardContent}
        </T.P>
      </div>
    </S.Article>
  );
}
export function Card({ cardImg, content }) {
  return (
    <article>
      <S.Img imgUrl={cardImg}>
        <P.SmallestPlayBtn />
      </S.Img>
      <S.Content>
        <h4>{content}</h4>
      </S.Content>
    </article>
  );
}
export function ACard({ cardImg, children, smallImg }) {
  return (
    <S.Wrapper>
      <S.Img imgUrl={cardImg}>
        {" "}
        <S.SmallImg>
          <img src={smallImg} alt="" />
        </S.SmallImg>
      </S.Img>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
export function VCard({ cardImg, content, children }) {
  return (
    <article>
      <S.Img imgUrl={cardImg}>
        <P.SmallestPlayBtn />
      </S.Img>
      <S.Content>
        <h4>{content}</h4>
      </S.Content>
    </article>
  );
}
