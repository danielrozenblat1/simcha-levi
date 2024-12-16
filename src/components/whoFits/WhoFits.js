// MatchingCriteria.jsx
import React, { useEffect } from 'react';
import { Heart, Brain, Users, Clock, Palette, ThumbsDown, Ban, Zap, Coffee, Group } from 'lucide-react';
import styles from './WhoFits.module.css';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';
const MatchingCriteria = () => {


  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.sectionTitle}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
  
  },[])

  const matches = [
    { text: "את לא מפחדת מהערות וביקורת בונה", icon: Brain },
    { text: "את מחפשת להשתפר ולהתפרנס מתחום האיפור בכבוד", icon: Palette },
    { text: "את מחפשת יחס אישי ודגשים בכל שלב", icon: Heart },
    { text: "את מוכנה להשקיע זמן, אנרגיה ומאמץ", icon: Clock },
    { text: "את מעוניינת בלימוד טכניקות חדשניות ומקצועיות שלא הרבה מכירות", icon: Users }
  ];

  const nonMatches = [
    { text: "את מחפשת לקבל רק מחמאות", icon: ThumbsDown },
    { text: "את לא מוכנה לקבל ביקורת בונה", icon: Ban },
    { text: "את מצפה ללמוד הכל בשיעור אחד", icon: Zap },
    { text: "את לא מוכנה להשקיע מאמץ בלמידה", icon: Coffee },
    { text: "את מחפשת קורס המוני ולא אישי", icon: Group }
  ];

  return <>
    <div className={styles.container}>
      <h1 className={styles.title}>
       שנייה לפני שאנחנו מתקדמות..
      </h1>
      <div className={styles.description}>
    חשוב לי להדגיש שכדי להגיע לרף שאני מציבה - המסע הזה לא הולך להיות כל כך קל! 
      </div>
      <div className={styles.gridContainer}>
        {/* Matches Section */}
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              הקורס מתאים לך אם...
            </h2>
            <ul className={styles.list}>
              {matches.map((item, index) => (
                <li 
                  key={index} 
                  className={styles.listItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className={styles.icon} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Non-Matches Section */}
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              הקורס פחות מתאים לך אם...
            </h2>
            <ul className={styles.list}>
              {nonMatches.map((item, index) => (
                <li 
                  key={index} 
                  className={styles.listItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className={styles.icon} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Button text="שמחה אני מתאימה! בואי נדבר"/>
</>
};

export default MatchingCriteria;