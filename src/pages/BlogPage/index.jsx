import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Aside from "../../components/Aside";
import Links from "../../components/Links";
import LastestPosts from "./LastedPosts";

export default function BlogPage() {
  return (
    <>
      <NavBar pages />
      <Links>Blog</Links>
      <div className="container">
        <div style={{ display: "flex" }}>
          <LastestPosts />
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
}
