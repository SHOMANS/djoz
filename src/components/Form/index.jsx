import * as S from "./style.js";
import Input from "../Input";
import * as B from "../Btn";

export default function Form({ children }) {
  return (
    <S.Wrapper>
      {children}
      <form action="">
        <div>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Webdite" />
        </div>
        <textarea placeholder="Commment"></textarea>
        <B.NBtn btnContent="Send Message" />
      </form>
    </S.Wrapper>
  );
}
