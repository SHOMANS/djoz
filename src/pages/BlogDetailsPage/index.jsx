import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as T from "../../components/Typography";
import * as S from "./style";
import Links from "../../components/Links";
import Aside from "../../components/Aside";
import Form from "../../components/Form";
import { Link } from "react-router-dom";
// import { Icons } from "../../components/Icons";
import BigCard from "./BigCard";
import { ACard } from "../../components/Card";
import Img1 from "./bs-1.webp";
import Img2 from "./bs-2.webp";
import Img3 from "./bs-3.webp";

// import * as T from "../Typography";

export default function BlocgDetailsPage() {
  return (
    <>
      <NavBar pages />
      <Links>
        <Link to="/blog">Blog</Link>
        Guidelines for music festival event organisers: music festival harm
        reduction - December 2019
      </Links>
      <div className="container" style={{ marginTop: "80px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "66.6666%", padding: "0 15px" }}>
            <BigCard />
            <T.LH4>You may also like</T.LH4>
            <S.Section style={{ display: "flex" }}>
              <ACard staticCard cardImg={Img1} imgSize="153px">
                <T.H6>The Best Performances At The EFG London…</T.H6>
                <span>Dec 06, 2019</span>
              </ACard>
              <ACard staticCard cardImg={Img2} imgSize="153px">
                <T.H6>Indigo Girls to Headline 2020 Amplify Decatur…</T.H6>
                <span>Dec 06, 2019</span>
              </ACard>
              <ACard staticCard cardImg={Img3} imgSize="153px">
                <T.H6>Here’s All The Highlights From This Year’s…</T.H6>
                <span>Dec 06, 2019</span>
              </ACard>
            </S.Section>
            <T.LH4>Leave a comment</T.LH4>
            <Form />
          </div>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
}
