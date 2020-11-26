import TrackAudio from "./TrackAudio";
import TrackImg from "./xtrack-right.jpg.pagespeed.ic.vlepPoZ-yo.webp";
import * as B from "../Btn";
import * as S from "./style";

export default function LastestTracks() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="header">
          <h2>Music podcast</h2>
          <h3>LATEST TRACKS</h3>
          <B.WBtn />
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
          <article>
            <div className="imgBox">
              <img src={TrackImg} alt="Latest" />
            </div>
          </article>
        </div>
      </div>
    </S.Wrapper>
  );
}
