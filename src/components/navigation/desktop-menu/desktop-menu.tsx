import { useEffect, useState, type FC } from "react";
import { PiArrowSquareUpRight } from "react-icons/pi";
import "./desktop-menu.css";

export const DesktopMenu: FC = () => {
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    setActiveSection(window.location.pathname)
  }, []);

  return (
    <nav className="menu">
      <ul className="nav-list">
        <li className="fio">
          <a href="/">Александр Бондаренко</a>
        </li>
        <li className={`nav-item about__me ${activeSection === "astro-site/about-page" ? "nav-item__active" : ""}`}>
          <a href="astro-site/about-page">Обо мне</a>
        </li>
        <span className="divider">/</span>
        <li className={`nav-item project ${activeSection === "astro-site/projects-page" ? "nav-item__active" : ""}`}>
          <a href="astro-site/projects-page">
            Проекты
          </a>
        </li>
        <span className="divider">/</span>
        <li className="nav-item contact">
          <button className="menu-button">
            <a href="astro-site/contacts-page">
              контакты <PiArrowSquareUpRight className="arrowDegree45" />
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};
