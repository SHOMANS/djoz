import * as T from "../Typography";
import * as P from "../PlayBtn";
import * as S from "./style.js";
import Skill from "../Skill";

export default function Skills() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="Wrapper">
          <div className="skillsContant">
            <T.HWB lColor BH="DJ’s skill">
              DJ ALEXANDRA RUD
            </T.HWB>
            <T.P lColor>
              DJ Rainflow knows how to move your mind, body and soul by
              delivering tracks that stand out from the norm.
            </T.P>
            <Skill skillName="Perform" scillPer="95%" />
            <Skill skillName="Use Midi" scillPer="85%" />
            <Skill skillName="Remix and mash up" scillPer="98%" />
          </div>
          <div className="imgBox">
            <P.PlayBtn />
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
}
