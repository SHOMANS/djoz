import styled from "styled-components";
import FooterImg from "./footer-bg.png";

export const Wrapper = styled.footer`
  background-image: url(${FooterImg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding-top: 300px;
  padding-bottom: 60px;
  /* margin-top: -547px; */
  margin-top: ${(props) => (props.home ? "-547px" : "0")};
  height: 549px;
  & article > div:not(:nth-child(2)) {
    width: 25%;
    padding-right: 15px;
    padding-left: 15px;
  }
  & article > div:nth-child(2) {
    width: 33.333333%;
    margin-left: 8.333333%;
    text-align: center;
    & h3 {
      color: #ffffff;
      font-weight: 700;
      margin-bottom: 25px;
    }
    & a {
      font-size: 18px;
      color: #5c00ce;
      height: 50px;
      width: 50px;
      background: #ffffff;
      border-radius: 50%;
      line-height: 50px;
      text-align: center;
      display: inline-block;
      margin-right: 10px;
    }
  }

  & article > div:nth-child(3) {
    width: 25%;
    margin-left: 8.333333%;
    & h4 {
      margin-bottom: 30px;
    }
    & form {
      position: relative;
      & input {
        height: 50px;
        font-size: 15px;
        color: #ffffff;
        width: 100%;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding-left: 20px;
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #ffffff;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #ffffff;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #ffffff;
        }
      }
      & button {
        font-size: 18px;
        color: #5c00ce;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        padding: 0 16px;
        background: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
  }
  & article > div {
    position: relative;
    &:not(:first-child)::before {
      position: absolute;
      left: -46px;
      top: 3px;
      width: 1px;
      height: 130px;
      background: rgba(255, 255, 255, 0.2);
      content: "";
    }
  }
  & .footerCopy {
    margin: auto;
    text-align: center;
    color: #999999;
    & svg {
      color: red;
    }
    a {
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #123;
      }
    }
  }
`;
