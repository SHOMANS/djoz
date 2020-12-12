import React from "react";
import { Link } from "react-router-dom";
import * as I from "../Icons";
import Logo from "./logo.png";
import * as S from "./style";

export default function NavBar({
  headerNav,
  home,
  about,
  disco,
  tours,
  videos,
  pages,
  contact,
}) {
  return (
    <S.Wrapper headerNav={headerNav}>
      <div className="container">
        <div className="wrapper">
          <div className="imgWrapper">
            <img src={Logo} alt="DJoz" />
          </div>
          <div className="navContent">
            <ul>
              <li className={home && "active"}>
                <Link to="/">Home</Link>
              </li>
              <li className={about && "active"}>
                <Link to="/About">About</Link>
              </li>
              <li className={disco && "active"}>
                <Link to="/Discography">Discography</Link>
              </li>
              <li className={tours && "active"}>
                <Link to="/Tours">Tours</Link>
              </li>
              <li className={videos && "active"}>
                <Link to="/Videos">Videos</Link>
              </li>
              <li className={pages && "active"}>
                <a>Pages</a>
                <div className="listDown">
                  <Link to="/About">About</Link>
                  <Link to="/Blog">Blog</Link>
                  <Link to="/Blog/Details">Blog Details</Link>
                </div>
              </li>
              <li className={contact && "active"}>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
            <div className="iconsWrapper">
              <a>
                <I.Icons curserp iconName={["fab", "facebook-f"]} />
              </a>
              <a>
                <I.Icons curserp iconName={["fab", "twitter"]} />
              </a>
              <a>
                <I.Icons curserp iconName={["fab", "instagram"]} />
              </a>
              <a>
                <I.Icons curserp iconName={["fab", "dribbble"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
}
