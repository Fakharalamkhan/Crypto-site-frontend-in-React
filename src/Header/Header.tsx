import React, { useState } from 'react';
import styles from './header.css'; // Replace 'Header.module.css' with the actual CSS file path
import Popup from '../POPUP/popup'; // Replace 'Popup' with the actual component for the popup functionality


interface HeaderProps {
  togglePopup: () => void;
  onLockupContainerClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ togglePopup, onLockupContainerClick }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
    togglePopup(); // Call the prop function from the parent component
  };

  return (
    <div className={styles.header}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-8.svg" />
        <div className={styles.vectorGroup}>
          <img className={styles.groupItem} alt="" src="/vector-9.svg" />
          <img className={styles.groupInner} alt="" src="/vector-10.svg" />
          <div className={styles.home}>home</div>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.products}>Products</div>
          <div className={styles.enclave}>enclave</div>
          <div className={styles.faqs}>FAQs</div>
        </div>
      </div>
      <div className={styles.connect} onClick={togglePopup}>
        <div className={styles.connectChild} />
        <div className={styles.connectItem} />
        <img className={styles.connectInner} alt="" src="/vector-5.svg" />
        <div className={styles.rectangleDiv} />
        <img className={styles.groupIcon} alt="" src="/group-8.svg" />
        <div className={styles.connectWallet}>CONNECT WALLET</div>
      </div>
      {/* Conditionally render the popup component based on the state */}
      {showPopup && <Popup onClose={togglePopup} />} {/* Pass onClose prop here */}
    </div>
  );
};

export default Header;
