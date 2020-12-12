import styled from "styled-components";

const Wrapper = styled.input`
  height: 50px;
  font-size: 15px;
  color: #444444;
  padding-left: 20px;
  border: 1px solid #e1e1e1;
  width: 100%;
  margin-bottom: 20px;
  overflow: visible;
  padding-top: 1px;
  padding-right: 2px;
  padding-bottom: 1px;
  padding-left: 20px;
`;

export default function Input({ placeholder }) {
  return <Wrapper placeholder={placeholder} />;
}
