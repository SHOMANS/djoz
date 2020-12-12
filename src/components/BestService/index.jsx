import * as T from "../../components/Typography";
import * as C from "../../components/Card";
import * as S from "./style";
import Img1 from "./as-1.jpg";
import Img2 from "./as-2.jpg";
import Img3 from "./as-3.jpg";
import SmallImg1 from "./xservice-1.png.pagespeed.ic.mfAZwLibfF.webp";
import SmallImg2 from "./xservice-3.png.pagespeed.ic.OqwJNfiye_.webp";
import SmallImg3 from "./Feat2.png";

export default function BestService() {
  return (
    <S.Section>
      <div className="container">
        <T.HWB BH="Best Service">WHERE DO I PLAY</T.HWB>
        <S.Wrapper>
          <C.ACard cardImg={Img1} smallImg={SmallImg1}>
            <T.H4>Wedding</T.H4>
            <T.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </T.P>
          </C.ACard>
          <C.ACard cardImg={Img2} smallImg={SmallImg2}>
            <T.H4>Clubs and bar</T.H4>
            <T.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </T.P>
          </C.ACard>
          <C.ACard cardImg={Img3} smallImg={SmallImg3}>
            <T.H4>Corporate events</T.H4>
            <T.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </T.P>
          </C.ACard>
        </S.Wrapper>
      </div>
    </S.Section>
  );
}
