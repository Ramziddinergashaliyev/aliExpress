import { Component } from "react";
import img from "../../assets/logo/foo.svg";

import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <>
        <img className="footer__top__img" src={img} alt="" />
        <footer className="footer">
          <div className="footer__data container">
            <ul className="footer__item">
              <li className="footer__list__title">Shopping With Us</li>
              <li className="footer__list">Support</li>
              <li className="footer__list">Selles Calendar</li>
              <li className="footer__list">AliExpress</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">COLLABORATE WITH US</li>
              <li className="footer__list">Sell on AliExpress</li>
              <li className="footer__list">Affiliate program</li>
              <li className="footer__list">Blog for sellers</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">ABOUT COMPANY</li>
              <li className="footer__list">Press center</li>
              <li className="footer__list">AliTech</li>
              <li className="footer__list">Blog about company</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">CONTACT US</li>
              <li className="footer__list">VK</li>
              <li className="footer__list">Одноклассники</li>
              <li className="footer__list">Telegram</li>
              <li className="footer__list">Dzen</li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
