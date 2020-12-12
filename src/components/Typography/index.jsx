import * as S from "./style";

export function H1({ children }) {
  return <S.H1>{children}</S.H1>;
}

export function H2({ children, lColor }) {
  return <S.H2 lColor={lColor}>{children}</S.H2>;
}

export function H3({ children, lColor }) {
  return <S.H3 lColor={lColor}>{children}</S.H3>;
}

export function HWB({ children, lColor, BH }) {
  return (
    <S.Wrapper>
      <S.H3 lColor={lColor}>{children}</S.H3>
      <H2 lColor={lColor}>{BH}</H2>
    </S.Wrapper>
  );
}

export function H4({ children, lColor }) {
  return <S.H4 lColor={lColor}>{children}</S.H4>;
}
export function LH4({ children, lColor }) {
  return (
    <S.LH4 lColor={lColor}>
      <h4>{children}</h4>
    </S.LH4>
  );
}

export function H5({ children, lColor }) {
  return <S.H5 lColor={lColor}>{children}</S.H5>;
}

export function H6({ children, lColor }) {
  return <S.H6 lColor={lColor}>{children}</S.H6>;
}

export function P({ children, lColor }) {
  return <S.P lColor={lColor}>{children}</S.P>;
}

export function Span({ children, lColor }) {
  return <S.Span lColor={lColor}>{children}</S.Span>;
}

// export function P3({ children }) {
//   return <p>{children}</p>;
// }
