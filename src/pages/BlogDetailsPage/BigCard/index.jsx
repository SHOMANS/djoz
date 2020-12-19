// import * as C from "../../../components/Card";
import { PageBtn } from "../../../components/Btn";
import { VCard } from "../../../components/Card";
import { Icons } from "../../../components/Icons";
import * as T from "../../../components/Typography";
import * as S from "./style";
import Img from "./br-1.jpg";
// import Img from "./details-pic.jpg";

export default function BigCard() {
  return (
    <>
      <S.Img>{/* <Icons /> */}</S.Img>
      <S.Content>
        <S.Span>MUSIC FESTIVAL</S.Span>
        <T.H4>
          Guidelines for music festival event organisers: music festival harm
          reduction - December 2019
        </T.H4>
        <T.P>
          Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt ut
          labore et dolore
        </T.P>
        <S.Wrapper className="post-info">
          <ul>
            <li>
              By <span>ERNA O’CONNER</span>
            </li>
            <li>Dec 17, 2019</li>
          </ul>
          <ul>
            <li>230 Views</li>
            <li>18 Comments</li>
          </ul>
        </S.Wrapper>
      </S.Content>
      <div>
        <T.P>
          I feel as though a lot of people who read my articles are under the
          impression that I am suggesting eventually someone is going to come
          into their life and every puzzle piece will simply pop into place.
          Doves will fly out from behind you, a chorus will follow you around on
          every date, you will find a bag with 10 million dollars in the street,
          which you will use to move to Pleasantville, USA.
        </T.P>
        <T.P>
          You need mutual respect, compromise, sacrifice, understanding, the
          willingness to work at it and stand by him or her when times get
          rough. You need to be willing to be by their side not only during the
          bright days but also during the dark ones that Love is not all you
          need.
        </T.P>
        <S.MiddleContent>
          <T.P>
            None of them will tell you that they will stay together forever
            because it’s easy. None of them will tell you that they pledged
            their life.
          </T.P>
          <T.H6>OSCAR HUDSPETH</T.H6>
          <Icons iconName="quote-right" />
        </S.MiddleContent>
        <T.P>
          You are committing to someone’s whole self. You are not just
          committing to them under the condition that they stay young and
          beautiful — because they will not. And neither will you. You are not
          just committing to them until someone better comes along while neither
          they nor your relationship is perfect.
        </T.P>
        <T.P>
          This is the person you want to be with. You are committing to their
          very being. To the idea that the two of you are
        </T.P>
        <br />
        <br />
        <br />
        <PageBtn>Music</PageBtn>
        <PageBtn>Festival</PageBtn>
        <PageBtn>Tinternatianal</PageBtn>
        <PageBtn>Event</PageBtn>
        <div className="prevNext displayFlex" style={{ margin: "25px 0" }}>
          <T.H6>
            <Icons iconName="angle-left" /> Previous posts
          </T.H6>
          <T.H6>
            Next posts <Icons iconName="angle-right" />
          </T.H6>
        </div>
        <div className="displayFlex">
          <VCard
            cardImg={Img}
            content="2020 Bendigo Blues and Roots Music Festival…"
            date="Dec 17, 2019"
          />
          <VCard
            cardImg={Img}
            content="2020 Bendigo Blues and Roots Music Festival…"
            date="Dec 17, 2019"
            inverse
          />
        </div>
      </div>
    </>
  );
}
