import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons";
import Logo from "./logo.png";
import * as S from "./style";

export default function NavBar() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="imgWrapper">
            <img src={Logo} alt="DJoz" />
          </div>
          <div className="navContent">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Discography">Discography</Link>
              </li>
              <li>
                <Link to="/Tours">Tours</Link>
              </li>
              <li>
                <Link to="/Videos">Videos</Link>
              </li>
              <li>
                <a href={false}>Pages</a>
                <div className="listDown">
                  <Link to="/About">About</Link>
                  <Link to="/Blog">Blog</Link>
                  <Link to="/Blog/Details">Blog Details</Link>
                </div>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
            <div className="iconsWrapper">
              <a href={false}>
                <Icons pointer iconName={["fab", "facebook-f"]} />
              </a>
              <a href={false}>
                <Icons pointer iconName={["fab", "twitter"]} />
              </a>
              <a href={false}>
                <Icons pointer iconName={["fab", "instagram"]} />
              </a>
              <a href={false}>
                <Icons pointer iconName={["fab", "dribbble"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
}
