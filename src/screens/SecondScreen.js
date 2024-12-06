import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (3).json"
import two from "../Icons/wired-outline-313-two-avatar-icon-calm-hover-jumping.json"
import money from "../Icons/wired-outline-414-money-bag-dollar-hover-shake (2).json"
import Recommends from "../components/recommends/Recommends"
import InstagramVideo from "../components/igVideo/IgVideo"
import { AlertCircle } from "lucide-react"
const SecondScreen=()=>{


    return <>
 <div className={styles.title}>כל תלמידה שלי</div>
<div className={styles.row}>
<IconTextComponent text="מקבלת יחס אישי,דגשים וביקורות לאורך כל הקורס" icon={two}/>
<IconTextComponent text="יוצאת כשהיא מאפרת בטוחה בעצמה שמתפרנסת מהתחום" icon={money}/>
<IconTextComponent text="מסיימת את הקורס כשהיא מאפרת ברמות הכי גבוהות שיש" icon={makeup}/>
</div>


    <div className={styles.description}>אבל לפני שאני מרחיבה על הכל!</div>
    <div className={styles.title}>תשמעי קצת מהבנות שכבר עשו את הצעד</div>

   <Recommends/>
    <div className={styles.title}>חשוב לי שתביני</div>
    <div className={styles.alert}><AlertCircle></AlertCircle><div className={styles.scare}>כ-80% מהבנות שלומדות איפור בסוף לא עוסקות בתחום</div><AlertCircle></AlertCircle></div>
    <div className={styles.title}>ומי שלומדת אצלי נכנסת ל-20% האחרים!</div>
  
    <div className={styles.description}>את הולכת לקבל דגשים וביקורות ואת לא תשמעי ממני סתם מחמאות כי לי אכפת רק מדבר אחד</div>
    <div className={styles.title}>שתצאי מאפרת</div>
    <InstagramVideo postUrl="https://www.instagram.com/reel/C_n5v4dos4x/?igsh=MTJwZGZvbTh1aGwwYg=="/>
    <div className={styles.description}>הגישה הזו יוצרת תוצאות! ולהמחשה.. הנה כמה עבודות של תלמידות שלי מיד אחרי שסיימו את הקורס!</div>
    {/* עבודות של תלמידות אחרי שסיימו את הקורס */}
    </>
}
export default SecondScreen