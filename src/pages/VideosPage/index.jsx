import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Links from "../../components/Links";
import { SmallPlayBtn } from "../../components/PlayBtn";
import { H4, HWB } from "../../components/Typography";
import * as S from "./style";

export default function VideosPage() {
  return (
    <div>
      <NavBar videos />
      <Links>Videos</Links>
      <div className="container">
        <S.Wrapper>
          <HWB BH="Latest videos">YOUTUBE FEED</HWB>
          <div className="img">
            <SmallPlayBtn bgColor />
            <div className="content">
              <H4>
                Martin Garrix &amp; Pierce Fulton feat. Mike Shinoda - Waiting
                For Tomorrow {"("}Official Video{")"}
                <ul>
                  <li>02:35:18</li>
                  <li> Dec 17, 2019</li>
                </ul>
              </H4>
            </div>
          </div>
        </S.Wrapper>
      </div>
      <Footer />
    </div>
  );
}
