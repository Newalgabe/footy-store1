import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (document.documentElement.scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default BackToTop;
