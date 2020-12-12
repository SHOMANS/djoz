import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Aside from "../../components/Aside";
// import * as T from "../Typography";

export default function BlocgDetailsPage() {
  return (
    <>
      <NavBar pages />
      <div className="container">
        <div></div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "66.6666%" }}></div>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
}
