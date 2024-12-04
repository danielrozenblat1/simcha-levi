import React from 'react';
import styles from './Students.module.css';
import Button from '../button/Button';

import result1 from "../../images/שמחה לוי תלמידות 1.png";
import result2 from "../../images/שמחה לוי תלמידות 2.png";
import result3 from "../../images/שמחה לוי תלמידות 3.png";
import result4 from "../../images/שמחה לוי תלמידות 4.png";
import result5 from "../../images/שמחה לוי תלמידות 5.png";
import result6 from "../../images/שמחה לוי תלמידות 6.png";
import result7 from "../../images/שמחה לוי תלמידות 7.png";
import result8 from "../../images/שמחה לוי תלמידות 8.png";

const Students = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7, result8
  ];

  return (
    <>
      <div className={styles.title}>זו יכולה להיות את</div>
      <div className={styles.explain}>כל מה שמפריד בינך לבין הבנות כאן למטה זה צעד אחד קטן! לחצי על הכפתור שלמטה כדי לקבל שיחת ייעוץ חינמית ממני </div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שמחה לוי תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שמחה לוי תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="שמחה, בואי נבדוק התאמה" />
    </>
  );
};

export default Students;