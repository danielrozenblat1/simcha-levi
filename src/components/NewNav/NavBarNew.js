import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/שמחה לוי לוגו.png";
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

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

  const menuItems = [ 'תלמידות ממליצות', 'שאלות תשובות', 'מי אני','שירותים נוספים',];

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
            <FaTimes className={styles.icon} />
          ) : (
            <FaBars className={styles.icon} />
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
              duration={1000}
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
   
          aria-label="Instagram"
        >
          <FaInstagram className={styles.icon} />
        </a>
     
     
        <a  onClick={handleClick}> <FaWhatsapp className={styles.icon} /></a> 

      </div>
    </nav>
  );
};

export default NavBarNew;