import { SiGmail } from "react-icons/si";
import { type FC } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";
export const Footer: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: "475px" });
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-logo">Александр Бондаренко</p>
        {!isMobile && <p className="footer-divider">/</p>}
        <p className="copyright">© 2025 Александр Бондаренко</p>
      </div>
      {!isMobile && (
        <div className="footer-center">
          <a href="astro-site/about-page" className="footer-link">
            Обо мне
          </a>
          <span>/</span>
          <a
            href="astro-site/projects-page"
            className="footer-link"
          >
            Проекты
          </a>
        </div>
      )}
      <div className="footer-right">
        <a
          href="https://github.com/student-Alex-Bond"
          target="_blank"
          className="social-link"
        >
          <FaGithub className="fab" />
        </a>
        <a
          href="https://t.me/Bond_Alexandr"
          target="_blank"
          className="social-link"
        >
          <FaTelegram className="fab" />
        </a>
        <a
          href="mailto:bondarenko.alex.work@gmail.com"
          target="_blank"
          className="social-link"
        >
          <SiGmail className="fab" />
        </a>
      </div>
    </footer>
  );
};
