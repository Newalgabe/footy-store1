import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#f5f5f5')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#444' : '#e0e0e0')};
    color: ${({ theme }) => (theme === 'dark' ? '#ddd' : '#000')};
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const BackToTop = ({ theme }) => {
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
    <ScrollButton 
      className={visible ? 'visible' : ''} 
      onClick={scrollToTop}
      aria-label="Back to top"
      theme={theme}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollButton>
  );
};

export default BackToTop;
