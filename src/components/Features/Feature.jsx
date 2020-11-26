import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 320px;
  padding: 70px 40px 40px 70px;
  background-color: ${(props) => (props.darck ? "#5400BC" : "#5c00ce")};
  & h4 {
    font-size: 22px;
    color: #ffffff;
    font-weight: 700;
    margin-top: 25px;
    margin-bottom: 10px;
  }
  & p {
    font-size: 18px;
    font-family: "Now Regular";
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 15px 0;
  }
`;
export default function Feature({ darck, featTitle, featImg, featContent }) {
  return (
    <Wrapper darck={darck}>
      <img src={featImg} alt={featTitle} />
      <h4>{featTitle}</h4>
      <p>{featContent}</p>
    </Wrapper>
  );
}
