import React, { useEffect } from 'react';
import styles from './IgVideo.module.css';

const InstagramVideo = ({ postUrl }) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Extract post ID from URL if needed
  const getPostId = (url) => {
    const regex = /\/p\/([^/]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  return (
    <div className={styles.container}>
      <blockquote
        className={`instagram-media ${styles.embedContainer}`}
        data-instgrm-captioned
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
      >
        <div className={styles.loadingContainer}>
          <span className={styles.loadingText}>טוען את הסרטון...</span>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramVideo;