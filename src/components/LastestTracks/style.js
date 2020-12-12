import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 40px;
  /* overflow: hidden; */
  & .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    & div:first-child {
      width: 60%;
    }
    & div:last-child {
      padding-right: 10px;
    }
  }
  & .contentBox {
    display: flex;
    & article {
      width: 58.333333%;
      .tracks {
        overflow-y: scroll;
        outline: none;
        touch-action: none;
        height: 502px;

        /* width */
        ::-webkit-scrollbar {
          position: relative;
          top: 0px;
          float: right;
          width: 5px;
          height: 313px;
          background-color: rgb(17, 17, 17);
          background-clip: padding-box;
          border-radius: 5px;
          touch-action: none;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          width: 5px;
          z-index: auto;
          background: rgb(225, 225, 225);
          cursor: default;
          position: absolute;
          top: 3278.59px;
          left: 1043px;
          height: 502px;
          opacity: 1;
          touch-action: none;
          display: block;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background-color: rgb(17, 17, 17);
        }
      }
    }
  }
`;
