import styled from "styled-components";
import Img from "./large-item.jpg";

export const Wrapper = styled.div`
  padding-bottom: 90px;
  padding-top: 100px;
  text-align: center;
  .img {
    background-image: url(${Img});
    height: 585px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 30px;
    .content {
      background: rgba(7, 14, 38, 0.7);
      padding: 25px 30px 25px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: left;
      & h4 {
        color: #ffffff;
        font-weight: 700;
      }
      & li {
        font-size: 13px;
        list-style: none;
        display: inline-block;
        margin-right: 18px;
        color: #ffffff;
        position: relative;
      }
      & li:first-child::after {
        position: absolute;
        right: -12px;
        top: -1px;
        height: 17px;
        width: 1px;
        background: #ffffff;
        content: "";
      }
    }
  }
`;
