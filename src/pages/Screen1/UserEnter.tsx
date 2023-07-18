import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserEnter.module.css";
import React, { useState, useEffect } from 'react';
import MobileParent from "./MobileParent";
import Popup from "../../POPUP/popup";
const UserEnter: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLockupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const [showPopup, setShowPopup] = useState(false);

  // Step 3: Create a function that toggles the visibility of the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.userEnter}>
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
       {/* Step 4: Add the event handler to the div */}
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
  
        <div className={styles.lockup} onClick={onLockupContainerClick}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.s1empyrealExchange}>
            <p className={styles.s1empyreal}>Empyreal</p>
            <p className={styles.s1exchange}>Exchange</p>
          </div>
        </div>
      </div>
      <img className={styles.footerIcon} alt="" src="/footer.svg" />
      <div className={styles.tvlTxsParent}>
        <div className={styles.tvlTxs}>
          <div className={styles.boxParent}>
            <img className={styles.boxIcon} alt="" src="/box.svg" />
            <b className={styles.totalValueLocked}>Total Value Locked</b>
            <b className={styles.million}>0.0 MILLION</b>
            <img className={styles.cornerIcon} alt="" src="/corner.svg" />
            <img className={styles.cornerIcon1} alt="" src="/corner1.svg" />
            <img className={styles.cornerIcon2} alt="" src="/corner2.svg" />
          </div>
          <div className={styles.boxGroup}>
            <img className={styles.boxIcon1} alt="" src="/box1.svg" />
            <b className={styles.totalValueLocked}>Daily Transactions</b>
            <b className={styles.million}>0000000</b>
            <img className={styles.cornerIcon3} alt="" src="/corner3.svg" />
            <img className={styles.cornerIcon2} alt="" src="/corner4.svg" />
          </div>
          <div className={styles.boxContainer}>
            <img className={styles.boxIcon1} alt="" src="/box2.svg" />
            <b className={styles.totalValueLocked}>Total Transactions</b>
            <b className={styles.million}>00000000</b>
            <img className={styles.cornerIcon3} alt="" src="/corner3.svg" />
            <img className={styles.cornerIcon2} alt="" src="/corner4.svg" />
          </div>
          <div className={styles.box}>
            <div className={styles.vectorContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-11.svg"
              />
              <img
                className={styles.groupChild1}
                alt=""
                src="/rectangle-12.svg"
              />
              <div className={styles.july102023Parent}>
                <div className={styles.july102023}>July 10, 2023</div>
                <div className={styles.div}>12:34:44</div>
                <div className={styles.div1}>243546.12443536</div>
                <div className={styles.deposit}>Deposit</div>
              </div>
            </div>
            <div className={styles.july102023Group}>
              <div className={styles.july102023}>July 10, 2023</div>
              <div className={styles.div}>12:44:56</div>
              <div className={styles.div1}>243546.12443536</div>
              <div className={styles.deposit}>Transfer</div>
            </div>
            <div className={styles.july102023Container}>
              <div className={styles.july102023}>July 10, 2023</div>
              <div className={styles.div}>11:03:02</div>
              <div className={styles.div1}>243546.12443536</div>
              <div className={styles.deposit}>Deposit</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.july102023}>July 10, 2023</div>
              <div className={styles.div}>11:02:12</div>
              <div className={styles.div1}>243546.12443536</div>
              <div className={styles.deposit}>Deposit</div>
            </div>
            <div className={styles.july102023Parent1}>
              <div className={styles.july102023}>July 10, 2023</div>
              <div className={styles.div}>00:22:01</div>
              <div className={styles.div1}>243546.12443536</div>
              <div className={styles.deposit}>Withdraw</div>
            </div>
            <b className={styles.recentTransactions}>Recent Transactions</b>
            <b className={styles.date}>Date</b>
            <b className={styles.time}>Time</b>
            <b className={styles.amount}>Amount</b>
            <b className={styles.transactionType}>Transaction Type</b>
            <img className={styles.boxChild} alt="" src="/line-3.svg" />
          </div>
          <div className={styles.vertScrollWrapper}>
            <div className={styles.vertScroll}>
              <div className={styles.vertScrollChild} />
              <div className={styles.vertScrollItem} />
            </div>
          </div>
          <img className={styles.cornerIcon7} alt="" src="/corner5.svg" />
          <img className={styles.cornerIcon8} alt="" src="/corner4.svg" />
          <img className={styles.cornerIcon9} alt="" src="/corner6.svg" />
          <img className={styles.cornerIcon10} alt="" src="/corner3.svg" />
        </div>
        <div className={styles.headline}>
          <div className={styles.xtarot}>Enclave, end to end encryption.</div>
        </div>
        <div className={styles.body}>
          <b className={styles.theGatewayFor}>
            Maiores vitae nemo facere corrupti. Ut architecto rerum blanditiis
            ea laboriosam placeat omnis minima. Placeat dignissimos et enim.
            Dolor consequatur praesentium similique pariatur ut. Sed id eligendi
            recusandae vitae laborum voluptas ea. Fugit molestias nihil in ut
            tempore.
          </b>
        </div>
      </div>
    </div>
  );
};

const screen1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileParent /> : <UserEnter />}
    </div>
  );
};

export default screen1;
