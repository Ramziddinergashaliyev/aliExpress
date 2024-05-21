import { Component } from "react";
import img from "../../assets/logo/nav.png";
import img1 from "../../assets/logo/nav1.svg";
import img2 from "../../assets/logo/nav2.svg";
import img3 from "../../assets/logo/nav3.svg";
import img4 from "../../assets/logo/nav4.svg";

import "./header.scss";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header container">
        <nav className="header__nav">
          <div className="header__nav__left">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="header__nav__right">
            <div className="header__nav__right__logo">
              <img src={img1} alt="" />
              <span>Katolog</span>
            </div>
            <div className="header__nav__form">
              <input placeholder="Search..." type="text" />
              <button>Qidirish</button>
            </div>
            <div className="header__nav__right__logoes">
              <div className="header__nav__right__logo">
                <img src={img2} alt="" />
                <span>Buyurtmalar</span>
              </div>
              <div className="header__nav__right__logo">
                <img src={img3} alt="" />
                <span>Savat</span>
              </div>
              <div className="header__nav__right__logo">
                <img src={img4} alt="" />
                <span>Kirilsin</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
