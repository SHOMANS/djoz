//DJ ALEXANDRA RUD

import InfoImg from "./InfoImg.webp";
// import AboutImg from "./signature.png";

import * as S from "./style";

export default function Info({ children }) {
  return (
    <S.Section>
      <div className="container">
        <S.Wrapper>
          <div className="imgWrapper">
            <img src={InfoImg} alt="Info" />
          </div>
          <div>{children}</div>
        </S.Wrapper>
      </div>
    </S.Section>
  );
}
