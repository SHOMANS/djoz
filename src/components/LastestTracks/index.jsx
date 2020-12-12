import TrackAudio from "./TrackAudio";
import TrackImg from "./xtrack-right.jpg.pagespeed.ic.vlepPoZ-yo.webp";
import * as B from "../Btn";
import * as S from "./style";
import * as T from "../Typography";
import FramedImg from "../FramedImg";

export default function LastestTracks() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="header">
          <T.HWB BH="Music podcast">LATEST TRACKS</T.HWB>
          <div>
            <B.WBtn btnContent="View all tracks" />
          </div>
        </div>
        <div className="contentBox">
          <article>
            <div className="tracks">
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
              <TrackAudio trackName="DAVID GUETTA MIAMI ULTRA" />
            </div>
          </article>
          <FramedImg imgSrc={TrackImg} imgAlt="Latest tracks" />
        </div>
      </div>
    </S.Wrapper>
  );
}
