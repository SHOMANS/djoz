import Card from "./Card";
import Icons from "../Icons";

export default function UncomingEvents() {
  return (
    <section>
      <h2>UPCOMING EVENTS</h2>
      <Icons iconName="angle-left" />
      <Icons iconName="angle-right" />
      <div>
        <Card imgSrc="" />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
