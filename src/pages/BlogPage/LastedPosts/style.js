import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 60px;
  padding-top: 100px;
  width: 66.66666%;
  & > div:first-child {
    margin-bottom: 60px;
  }
  .post-info {
    border-top: 1px solid #f2f2f2;
    padding: 15px 0 20px;
    text-align: left;
    margin: 0 30px;
    display: flex;
    & ul {
      display: flex;
      width: 50%;
      & li {
        font-size: 13px;
        color: #888888;
        display: inline-block;
        list-style: none;
        margin-right: 20px;
        position: relative;
      }
      & li:first-child::after {
        position: absolute;
        right: -14px;
        top: -2px;
        content: "|";
      }
    }
    & ul:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const Wrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 50%;
      & > div > div > div:nth-child(2) {
        text-align: center;
        background: #ffffff;
        padding: 20px 20px 25px;
        & > span {
          font-size: 13px;
          text-transform: uppercase;
          color: #5c00ce;
        }
        & > h4 {
          color: #111111;
          font-weight: 700;
          line-height: 26px;
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 12px;
        }
        & ul li {
          font-size: 13px;
          color: #888888;
          display: inline-block;
          list-style: none;
          margin-right: 20px;
          position: relative;
          & span {
            color: #111111;
            font-size: 13px;
            text-transform: uppercase;
          }
        }
        & ul li:nth-child(1)::after {
          position: absolute;
          right: -14px;
          top: -2px;
          content: "|";
        }
      }
    }
  }
`;
