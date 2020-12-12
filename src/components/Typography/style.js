import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 110px;
  font-family: "Rockville Solid Regular";
  color: #ffffff;
  margin: 0;
`;
export const H2 = styled.h2`
  font-size: 110px;
  font-family: "Rockville Solid Regular";
  ${(props) =>
    props.lColor ? "color: #ffffff; opacity: 0.1;" : "color: #f2f2f2;"};

  /* margin-bottom: 20px;
  margin-top: 22px; */
`;
export const H3 = styled.h3`
  font-size: 42px;
  color: ${(props) => (props.lColor ? "#ffffff" : "#111111")};
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Rajdhani", sans-serif;
  line-height: 1.2;
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  & h2 {
    font-size: 100px;
    font-family: "Rockville Solid Regular";
    position: absolute;
    left: 0;
    top: -65px;
    width: 100%;
    z-index: -1;
    ${(props) =>
      props.lColor ? "color: #ffffff; opacity: 0.1;" : "color: #f2f2f2;"};
  }
`;

export const H4 = styled.h4`
  font-size: 26px;
  color: ${(props) => (props.lColor ? "#ffffff" : "#111111")};
  font-weight: 700;
  /* margin-top: 25px;
  margin-bottom: 10px; */
  font-family: "Rajdhani", sans-serif;
  line-height: 1.2;
`;
export const LH4 = styled.div`
  text-align: center;
  margin-bottom: 35px;
  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    width: 70px;
    background: #e1e1e1;
    content: "";
    margin: 0 auto;
    z-index: -1;
  }
`;
export const H5 = styled.h5`
  font-size: 110px;
  font-family: "Rockville Solid Regular";
  color: #ffffff;
  /* margin-bottom: 20px;
  margin-top: 22px; */
`;
export const H6 = styled.h6`
  font-size: 15;
  font-weight: 700;
  font-family: "Rajdhani", sans-serif;
  color: #ffffff;
  /* margin-top: 22px; */
`;
export const P = styled.p`
  font-size: 15px;
  font-family: "Now Regular";
  color: ${(props) => (props.lColor ? "#ffffff" : "#444444")};
  font-weight: 400;
  line-height: 26px;
  /* margin: 0 0 15px 0; */
`;
export const Span = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 6px;
`;
