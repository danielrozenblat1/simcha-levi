import React, { useState, useRef, useEffect } from 'react';
import { Film, Play, Video, Camera, Clock } from 'lucide-react';
import styles from './FilmCourse.module.css';
import simcha from "../../images/שמחה לוי אייקון.png"
const FilmCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const courseItems = [
    { icon: <Camera className={styles.icon} />, text: 'טכניקות צילום ועריכה באייפון' },
    { icon: <Play className={styles.icon} />, text: 'התאמת תאורה' },
    { icon: <Film className={styles.icon} />, text: 'עריכה באפליקציות נכונות' },
    { icon: <Video className={styles.icon} />, text: 'צילום וידאו' },
    { icon: <Video className={styles.icon} />, text: 'פונקציות 3D' }
  ];

  const benefits = [
    'קבוצות קטנות וחמות (7-10 תלמידות בקבוצה)',
    'רשימת ציוד לרכישה',
    'אפשרות להתנסות בעריכה במעמד הסדנה',
    'ליווי צמוד למשך חודש מסיום הסדנה',
    'כלים מעשיים ליצירת תוכן ביומי איכותי',
    'תינתן תעודה בסיום הסדנה'
  ];

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        <div className={styles.buttonContent}>
          <img 
            src={simcha}
            alt="שמחה לוי קורס צילום" 
            className={styles.courseImage}
          />
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>סדנת צילום, תאורה ועריכה</h2>
            <p className={styles.subtitle}>לחצי כאן לפתיחת הסילבוס המלא</p>
          </div>
        </div>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div 
        style={{ height: `${height}px` }}
        className={styles.contentWrapper}
      >
        <div ref={contentRef} className={styles.content}>
        <h3 className={styles.benefitsTitle}>בסדנה תלמדי:</h3>
          <div className={styles.courseItemsGrid}>
            
            {courseItems.map((item, index) => (
              <div key={index} className={styles.courseItem}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.benefitsSection}>
            <h3 className={styles.benefitsTitle}>יתרונות הסדנה:</h3>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <span className={styles.bullet}>•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer}>
            <p className={styles.duration}>
              <Clock className={styles.icon} />
              <span>משך הסדנה: 3 שעות</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCourse;