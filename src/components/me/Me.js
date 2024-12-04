import React from 'react';
import styles from './Me.module.css';
import simcha from "../../images/שמחה תמונה ימין.png";


const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={simcha} alt="שמחה לוי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>שמחה לוי</h1>
          <div className={styles.subtitle}>"אלי לא באות כדי לקבל מחמאות, אלי באות כדי לצאת מאפרות!"</div>
          <p className={styles.description}>
            כמאפרת מקצועית עם 12 שנות ניסיון, אני מביאה איתי לא רק את הידע המקצועי, אלא גם את התשוקה להפוך כל תלמידה למאפרת מקצועית ומצליחה. הגישה שלי משלבת את הדיוק והפדנטיות שלמדתי מהסגנון הרוסי, יחד עם יחס אישי ואכפתי לכל תלמידה. אני מאמינה בלימוד אחד על אחד, שמאפשר התקדמות מהירה והתאמה מושלמת לקצב האישי של כל אחת.
          </p>
          <p className={styles.description}>
            אני לא מוכרת חלומות - אני מעניקה כלים מעשיים שיהפכו אותך למאפרת עצמאית ומקצועית. כבר אחרי שיעור או שניים, תוכלי לראות תוצאות מרשימות ולהתחיל לאפר ברמה גבוהה. אני דורשת מצוינות ודיוק, ומחמאות אצלי מגיעות רק כשהן באמת מגיעות. המטרה שלי היא לא רק ללמד איפור, אלא להעניק לך את כל הכלים להצליח בתחום - מטכניקות איפור מתקדמות ועד צילום מקצועי של העבודות שלך.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;