import * as T from "../Typography";
import * as S from "./style";
import Input from "../Input";
import * as B from "../Btn";
import * as C from "../Card";

import * as I from "../Icons";

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
        <C.VCard></C.VCard>
        <C.VCard></C.VCard>
        <C.VCard></C.VCard>
        <C.VCard></C.VCard>
      </div>
    </S.Wrapper>
  );
}
