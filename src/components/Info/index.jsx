//DJ ALEXANDRA RUD
import * as B from "../Btn";
import InfoImg from "./InfoImg.webp";

export default function Info() {
  return (
    <section>
      <img src={InfoImg} alt="Info" />
      <div>
        <h2>About me</h2>
        <h3>DJ ALEXANDRA RUD</h3>
        <p>
          DJ Rainflow knows how to move your mind, body and soul by delivering
          tracks that stand out from the norm. As if this impressive succession
          of high impact, floor-filling bombs wasn’t enough to sustain.
        </p>
        <B.Btn BtnContent="Contact Me" />
      </div>
    </section>
  );
}
