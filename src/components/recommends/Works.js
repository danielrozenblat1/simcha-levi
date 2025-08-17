import React from 'react';
import styles from './Students.module.css';
import Button from '../button/Button';

import result1 from "../../images/שמחה לוי איפור עצמי 1.png";
import result2 from "../../images/שמחה לוי איפור עצמי 2.png";
import result3 from "../../images/שמחה לוי איפור עצמי 3.png";
import result4 from "../../images/שמחה לוי איפור עצמי 4.png";
import result5 from "../../images/שמחה לוי איפור עצמי 5.png";
import result6 from "../../images/שמחה לוי איפור עצמי 6.png";
import result7 from "../../images/שמחה לוי איפור עצמי 7.png";
import result8 from "../../images/שמחה לוי איפור עצמי 8.png";
import result9 from "../../images/שמחה לוי איפור עצמי 9.png";
import result10 from "../../images/שמחה לוי איפור עצמי 10.png";
import result11 from "../../images/שמחה לוי איפור עצמי 11.png";
import result12 from "../../images/שמחה לוי איפור עצמי 12.png";
import result13 from "../../images/שמחה לוי איפור עצמי 13.png";
import result14 from "../../images/שמחה לוי איפור עצמי 14.png";
import result15 from "../../images/שמחה לוי איפור עצמי 15.png";




const Works = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7, result8 ,result9, result10, result11, result12, result13, result14, result15
  ];

  return (
    <>
      <div className={styles.title} id="שירותים נוספים">איפרתי בעצמי מאות נשים וכלות לאירועים שלהן</div>
      <div className={styles.explain}>ואם את כאן כי את מאורסת או שיש לך אירוע בקרוב, הכנתי לך מקבץ קטן של נשים שעברו דרכי</div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שמחה לוי  ${index + 1}`}
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
                  alt={`שמחה לוי ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="שמחה, בואי נתאם תאריך לאירוע שלי!" />
    </>
  );
};

export default Works;