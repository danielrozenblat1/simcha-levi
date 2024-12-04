// BeforeAfter.jsx
import { useState, useRef, useEffect } from 'react';
import styles from './BeforeAfter.module.css';

const ImageComparisonSlider = ({ leftImage, rightImage, logoImage, alt = 'Comparison Image' }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const calculatePosition = (e) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const containerWidth = container.offsetWidth;
      const position = (x / containerWidth) * 100;
      return Math.min(Math.max(position, 0), 100);
    }
    return 50;
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newPosition = calculatePosition(e);
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e) => {
    if (isResizing && e.touches.length === 1) {
      const touch = e.touches[0];
      const newPosition = calculatePosition(touch);
      setSliderPosition(newPosition);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div 
        className={styles.rightImage}
        style={{ 
          clipPath: `inset(0 0 0 ${sliderPosition}%)`
        }}
      >
        <img src={rightImage} alt={alt} />
      </div>
      
      <div 
        className={styles.leftImage}
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img src={leftImage} alt={alt} />
      </div>

      <div 
        className={styles.slider}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className={styles.sliderButton}>
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;