import Footer from "../../components/Footer";
import Links from "../../components/Links";
import NavBar from "../../components/NavBar";
import Map from "../../components/Map";
import ContactInfo from "../../components/ContactInfo";

export default function ContackPage() {
  return (
    <div>
      <NavBar contact />
      <Links>Contact</Links>
      <Map />
      <ContactInfo />
      <Footer />
    </div>
  );
}
