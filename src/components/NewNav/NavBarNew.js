import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/שמחה לוי לוגו.png";
import { AlignRight, X, Instagram } from 'lucide-react';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 80);
      setHasScrolled(scrollPosition > 0);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972543905534";
    const message = "היי שמחה, אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = ['שירותים נוספים', 'H.F.T.M', 'שאלות תשובות', 'מי אני'];

  const navbarClasses = `${styles.navbar} ${isSticky ? styles.sticky : ''} ${hasScrolled ? styles.scrolled : ''}`;

  return (
    <nav className={navbarClasses}>
      {windowWidth <= 850 && (
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="תפריט"
        >
          {isMenuOpen ? (
            <X className={styles.icon} />
          ) : (
            <AlignRight className={styles.icon} />
          )}
        </button>
      )}
      
      <div className={styles.logo}>
        <img src={logo} alt="שמחה לוי לוגו" />
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item}
              smooth={true}
              offset={-100}
              duration={700}
              onClick={closeMenu}
              className={styles.mobileMenuItem}
              style={{ '--item-index': index }}
              spy={true}
              activeClass={styles.active}
            >
              {item}
            </ScrollLink>
          ))}
          <div className={styles.center}>
            <img className={styles.image} src={logo} alt="שמחה לוי לוגו" />
          </div>
        </div>
      </div>

      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item}
              smooth={true}
              offset={-100}
              duration={500}
              spy={true}
              activeClass={styles.active}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}

      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/simchallevi/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconContainer}
          aria-label="Instagram"
        >
          <Instagram className={styles.icon} />
        </a>
        <button 
          onClick={handleClick} 
          className={styles.iconContainer}
          aria-label="WhatsApp"
        >
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBarNew;