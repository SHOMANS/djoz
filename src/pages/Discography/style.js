import styled from "styled-components";

export const Wrapper = styled.section`
  padding-bottom: 40px;
  padding-top: 120px;
  overflow: hidden;
  text-align: center;
  & section {
    display: flex;
    flex-wrap: wrap;
    margin-top: 90px;
    .pages {
      text-align: center;
      padding-top: 10px;
      width: 100%;
      & a {
        display: inline-block;
        font-size: 15px;
        color: #111111;
        text-transform: uppercase;
        letter-spacing: 2px;
        background: #f2f2f2;
        -webkit-transition: all, 0.3s;
        -o-transition: all, 0.3s;
        transition: all, 0.3s;
        margin-right: 10px;
        margin-bottom: 5px;
        padding: 14px 22px 12px;
        text-decoration: none;
        &:hover {
          background: #290849;
          color: #ffffff;
        }
      }
      .active {
        background: #290849;
        color: #ffffff;
        transform: scale(1.1);
      }
    }
  }
`;
