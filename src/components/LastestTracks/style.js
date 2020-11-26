import styled from "styled-components";

export const Wrapper = styled.section`
  & .header {
    display: flex;
  }
  & .contentBox {
    display: flex;
    & article {
      width: 50%;
    }
  }
`;
