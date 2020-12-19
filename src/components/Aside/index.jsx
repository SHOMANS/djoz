import * as T from "../Typography";
import * as S from "./style";
import Input from "../Input";
import * as B from "../Btn";
import * as C from "../Card";
import * as I from "../Icons";
import Img1 from "./br-1.jpg";
import Img2 from "./br-2.jpg";
import Img3 from "./br-3.jpg";
import Img4 from "./br-4.jpg";

export default function Aside() {
  return (
    <S.Wrapper>
      <div>
        <T.LH4>Subscribe newsletter</T.LH4>
        <T.P>Ipsum dolor sit amet, adipiscing elit, sed eiusmod</T.P>
        <form>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <B.NBtn btnContent="subscribe" type="submit" />
        </form>
      </div>
      <div>
        <T.LH4>Social media</T.LH4>
        <div className="iconsWrapper">
          <I.Footericon white curserp iconName={["fab", "facebook-f"]} />
          <I.Footericon white curserp iconName={["fab", "twitter"]} />
          <I.Footericon white curserp iconName={["fab", "instagram"]} />
          <I.Footericon white curserp iconName={["fab", "dribbble"]} />
        </div>
      </div>
      <div>
        <T.LH4>Recent posts</T.LH4>
        <C.VCard
          cardImg={Img1}
          content="2020 Bendigo Blues and Roots Music Festival…"
          date="Dec 17, 2019"
        />
        <C.VCard
          cardImg={Img2}
          content="2020 Bendigo Blues and Roots Music Festival…"
          date="Dec 17, 2019"
        />
        <C.VCard
          cardImg={Img3}
          content="2020 Bendigo Blues and Roots Music Festival…"
          date="Dec 17, 2019"
        />
        <C.VCard
          cardImg={Img4}
          content="2020 Bendigo Blues and Roots Music Festival…"
          date="Dec 17, 2019"
        />
      </div>
    </S.Wrapper>
  );
}
