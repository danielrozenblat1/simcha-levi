import React from 'react';
import styles from './Loader.module.css';

const GradientLoader = () => {
  return <>
  <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
  
      </div>
      <div className={styles.description}>הדף בטעינה..</div>
    </div>
     
        </>
};

export default GradientLoader;