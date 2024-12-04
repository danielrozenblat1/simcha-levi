// Button.jsx
import styles from './Button.module.css';

const Button = (props) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972543905534";
    const message = props.message ? props.message : "היי שמחה ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;