import Header from "../../components/Header";
import UncomingEvents from "../../components/UncomingEvents";
import Info from "../../components/Info";
import Features from "../../components/Features";
import LastestTracks from "../../components/LastestTracks";
import YoutubeFeed from "../../components/YoutubeFeed";
import FestivalTimer from "../../components/FestivalTimer";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <UncomingEvents />
      <Info />
      <Features />
      <LastestTracks />
      <YoutubeFeed />
      <FestivalTimer />
      <Footer />
    </div>
  );
}
