import Icons from "../../Icons";
import * as P from "../../PlayBtn";
import * as S from "./style";

export default function TrackAudio(props) {
  const { trackName } = props;
  return (
    <>
      <h4>{trackName}</h4>
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
          <Icons iconName="volume-down" />
          {/* <Icons iconName="volume-mute" />
          <Icons iconName="volume-off" />
          <Icons iconName="volume-up" /> */}
          <div className="volumeWraper">
            <div className="volume" />
          </div>
        </div>
      </S.Wrapper>
    </>
  );
}
