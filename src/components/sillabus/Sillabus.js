import React from 'react';
import { Clock, Users, Camera, Award, PhoneCall, FileText, Star } from 'lucide-react';
import styles from './Sillabus.module.css';

const MakeupCourse = () => {
  const courseFeatures = [
    {
      title: "טכניקות מתקדמות",
      content: "העברת טכניקות בהתאמה אישית, מבחינת עמידות ומגנון"
    },
    {
      title: "אבחון מקצועי",
      content: "אבחון סוגי עור והתאמת מייקאפ, הכנה ובסיס"
    },
    {
      title: "מורפולוגיה",
      content: "דגש על מורפולוגיה ופיסול פנים - הארכות, הרמקות והצללות בשיטה של שמחה לוי"
    },
    {
      title: "טכניקות עיניים",
      content: "סוגי עיניים, הדבקת ריסים ותיקוני זוויות"
    },
    {
      title: "שפתיים ועור",
      content: "טיפול בשפתיים ועור בוגר"
    },
    {
      title: "איילנר וצלליות",
      content: "איילנר והתאמת צלליות"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.courseIntro}>
        <strong>הקורס הוא אישי </strong>,20 שעות (4 מפגשים של חמש שעות) שבהם את הולכת ללמוד:
      </div>
      
      <div className={styles.featuresList}>
        {courseFeatures.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h4>{feature.title}</h4>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.courseIntro}>
        <strong>וכמובן שאת הולכת לקבל</strong>
      </div>
      <div className={styles.courseDetails}>
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <Users className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>חוויית לימוד אישית ומותאמת - one on one</span>
          </div>
        </div>
        
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <Star className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>ערכת ציוד מקצועית מותאמת אישית לך</span>
          </div>
        </div>
        
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <Camera className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>סדנת צילום ועריכה מקצועית לתיעוד העבודות שלך</span>
          </div>
        </div>
        
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <PhoneCall className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>ליווי VIP אישי למשך חודש לאחר סיום הקורס</span>
          </div>
        </div>
        
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <FileText className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>מדריך מעשי ליצירת תוכן ביוטי שמושך לקוחות</span>
          </div>
        </div>
        
        <div className={styles.detailsRow}>
          <div className={styles.benefitContainer}>
            <Award className={styles.icon} size={20} strokeWidth={1.25} />
            <span className={styles.benefitText}>תעודת הסמכה יוקרתית המוכרת בתעשייה</span>
          </div>
        </div>
      </div>

      <div className={styles.courseIntro}>
         <strong>המפגש האחרון מוקדש כולו לשיווק, צילום ובניית נוכחות דיגיטלית מרשימה
</strong>      </div>

    </div>
  );
};

export default MakeupCourse;