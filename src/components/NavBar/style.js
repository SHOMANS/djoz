import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  background: rgba(42, 1, 74, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: center;
  justify-content: space-between;
  & .wrapper {
    display: flex;
  }
  & .imgWrapper {
    width: 16.66666%;
    margin: 20px 15px 21px;
  }
  & img {
  }
  & .iconsWrapper {
    margin: 31px 0 27px;
    width: 133px;
    & a {
      display: inline-block;
      font-size: 15px;
      color: #fff;
      margin-top: 5px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  & .navContent {
    display: flex;
    width: 83.333333%;
    margin-right: 15px;
    justify-content: flex-end;
  }
  & ul {
    display: flex;
    list-style: none;
    padding: 31px 15px 0;
    margin-right: 15px;
    justify-content: space-between;
    /* line-height: 24px; */
    & .active::after {
      position: absolute;
      left: 0;
      bottom: auto;
      width: 100%;
      height: 2px;
      background: #fff;
      opacity: 1;
    }
    & li {
      list-style: none;
      margin-left: 45px;
      position: relative;
      &:hover .listDown {
        opacity: 1;
        top: 39px;
        visibility: visible;
      }
      & .listDown {
        position: absolute;
        left: 0;
        width: 150px;
        background: #111;
        text-align: left;
        padding: 2px 0;
        opacity: 0;
        top: 56px;
        visibility: hidden;
        transition: all 0.3s;
        & a {
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          padding: 8px 20px;
          text-transform: capitalize;
        }
      }
      & a {
        font-size: 18px;
        text-transform: uppercase;
        color: #fff;
        display: block;
        padding: 6px 0;
        position: relative;
        text-decoration: none;
        /* font-weight: 500; */
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: auto;
        width: 100%;
        height: 2px;
        background: #fff;
        opacity: 0;
        transition: opacity 0.3s;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
`;
