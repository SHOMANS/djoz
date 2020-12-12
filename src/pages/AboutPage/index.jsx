import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Links from "../../components/Links";
import Skills from "../../components/Skills";
import * as T from "../../components/Typography";
import Img from "./signature.png";
import Galary from "../../components/Galary";
import BestService from "../../components/BestService";

export default function AboutPage() {
  return (
    <div>
      <NavBar about />
      <Links>About</Links>
      <Skills />
      <Info>
        <T.H3>HE HEARD SOMETHING THAT HE KNEW TO BE MUSIC</T.H3>
        <T.P>
          At vero eos et accusamus et iusto odi odgnissimos ducimus qui
          blanditiis praesentium volup tatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia animi
          quod justo pro an.
        </T.P>
        <img src={Img} alt=""></img>
      </Info>
      <Galary />
      <BestService />
      <Footer />
    </div>
  );
}
