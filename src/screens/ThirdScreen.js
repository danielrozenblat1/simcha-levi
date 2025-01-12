import Button from "../components/button/Button"
import MakeupCourse from "../components/sillabus/Sillabus"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
   <div className={styles.title}>בואי נדבר תכלס! איך זה הולך לעבוד?</div>
   <div className={styles.description}>אז כדי להוציא אותך מאפרת תותחית על ולשייף את היהלום שבך, הקורס הולך לעבוד כך:</div>
   <div className={styles.header} id="H.F.T.M">H.F.T.M</div>
   
   <MakeupCourse/>
   <Button text="שמחה, בואי נדבר!"/>
</>


}
export default ThirdScreen