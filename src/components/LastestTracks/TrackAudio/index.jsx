import * as I from "../../Icons";
import * as P from "../../PlayBtn";
import * as S from "./style";
import * as T from "../../Typography";

export default function TrackAudio(props) {
  const { trackName } = props;
  return (
    <S.Article>
      <T.H4>{trackName}</T.H4>
      <S.Wrapper>
        <P.SmallPlayBtn />
        <div className="fullPlayerBar">
          <span>00:00</span>
          <div className="playerBar">
            <div className="player" />
          </div>
          <span>00:00</span>
        </div>
        <div className="volumeBox">
          <I.Icons iconName="volume-down" />
          {/* <Icons iconName="volume-mute" />
          <Icons iconName="volume-off" />
          <Icons iconName="volume-up" /> */}
          <div className="volumeWraper">
            <div className="volume" />
          </div>
        </div>
      </S.Wrapper>
    </S.Article>
  );
}
