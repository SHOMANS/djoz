import Header from "../../components/Header";
import UncomingEvents from "../../components/UncomingEvents";
import Info from "../../components/Info";
import Features from "../../components/Features";
import LastestTracks from "../../components/LastestTracks";
import YoutubeFeed from "../../components/YoutubeFeed";
import FestivalTimer from "../../components/FestivalTimer";
import Footer from "../../components/Footer";
import * as T from "../../components/Typography";
import * as B from "../../components/Btn";
export default function Home() {
  return (
    <div>
      <Header />
      <UncomingEvents />
      <Info>
        <T.HWB BH="About me">{"DJ ALEXANDRA RUD"}</T.HWB>
        <T.P>
          DJ Rainflow knows how to move your mind, body and soul by delivering
          tracks that stand out from the norm. As if this impressive succession
          of high impact, floor-filling bombs wasn’t enough to sustain.
        </T.P>
        <B.Btn btnContent="Contact Me" disable />
      </Info>
      <Features />
      <LastestTracks />
      <YoutubeFeed />
      <FestivalTimer />
      <Footer home />
    </div>
  );
}
