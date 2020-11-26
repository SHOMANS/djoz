//Wedding
import Feature from "./Feature";
import * as P from "../PlayBtn";

import Feat1 from "./Feat1.webp";
import Feat2 from "./Feat2.png";
import Feat3 from "./Feat3.webp";
import Feat4 from "./Feat4.webp";
import * as S from "./style";

export default function features() {
  return (
    <S.Wrapper>
      <div className="featuresImg">
        <P.PlayBtn bgColor />
      </div>
      <div className="features">
        <Feature
          darck
          featImg={Feat1}
          featTitle="Wedding"
          featContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <Feature
          featImg={Feat2}
          featTitle="Clubs and bar"
          featContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <Feature
          featImg={Feat3}
          featTitle="Corporate events"
          featContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <Feature
          darck
          featImg={Feat4}
          featTitle="DJ lessons"
          featContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
      </div>
    </S.Wrapper>
  );
}
