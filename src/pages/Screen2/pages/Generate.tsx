import { FunctionComponent, useCallback ,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Generate.css";
import Disabled from "./Disabled";
const Generate: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="generate">
      <div className="header">
        <div className="vector-parent">
          <img className="group-child" alt="" src="/vector-8.svg" />
          <div className="vector-group">
            <img className="group-item" alt="" src="/vector-9.svg" />
            <img className="group-inner" alt="" src="/vector-10.svg" />
            <div className="home">home</div>
            <div className="about-us">About us</div>
            <div className="products">Products</div>
            <div className="enclave">enclave</div>
            <div className="faqs">FAQs</div>
          </div>
        </div>
        <div className="connect">
          <div className="connect-child" />
          <div className="connect-item" />
          <img className="connect-inner" alt="" src="/vector-5.svg" />
          <div className="rectangle-div" />
          <img className="group-icon" alt="" src="/group-8.svg" />
          <div className="connect-wallet">0x455 . . . . . . . . 3e02</div>
        </div>
        <div className="lockup">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <div className="empyreal-exchange">
            <p className="empyreal">Empyreal</p>
            <p className="exchange">Exchange</p>
          </div>
        </div>
      </div>
      <img className="footer-icon" alt="" src="/footer.svg" />
      <div className="privacy-window">
        <div className="privacy-parent">
          <div className="box-parent">
            <div className="box">
              <img className="group-icon" alt="" src="/group-28.svg" />
              <div className="headline">
                <div className="xtarot">Private Key</div>
              </div>
              <div className="body">
                <b className="the-gateway-for-container">
                  <p className="empyreal">
                    Save private key to use in the future. The private key can
                    be updated at any time.
                  </p>
                  <p className="empyreal">
                    You must use your private key to check your account balance,
                    because it is end to end encrypted.
                  </p>
                  <p className="empyreal">&nbsp;</p>
                  <p className="empyreal">
                    <span>{`To learn more about why you need a separate key for your account, please read `}</span>
                    <span className="here">here</span>
                    <span className="span">.</span>
                  </p>
                </b>
              </div>
              <div className="component-2">
                <div className="button">
                  <div className="button-child" />
                </div>
                <div className="rectangle-parent">
                  <div className="group-child1" />
                  <div className="update">Update</div>
                </div>
                <img className="copy-icon" alt="" src="/copyicon.svg" />
                <div className="button1">
                  <div className="stake">Generate</div>
                </div>
              </div>
              <img className="corner-icon" alt="" src="/corner.svg" />
              <img className="corner-icon1" alt="" src="/corner1.svg" />
              <img className="corner-icon2" alt="" src="/corner2.svg" />
              <img className="corner-icon3" alt="" src="/corner3.svg" />
            </div>
            <div className="button2">
              <div className="stake1">Sign</div>
            </div>
          </div>
          <div className="enclave-menu">
            <div className="button3" onClick={onButtonContainer3Click}>
              <div className="stake2">Privacy</div>
            </div>
            <div className="button4">
              <div className="stake3">Deposit</div>
            </div>
            <div className="button5">
              <div className="stake">Withdraw</div>
            </div>
            <div className="button6">
              <div className="stake5">Transfer</div>
            </div>
          </div>
          <div className="balance">
            <div className="div">Balance:</div>
            <div className="input-or-update" />
          </div>
          <div className="user-balance">
            <div className="user-balance1">
              <div className="group-parent">
                <div className="frame-wrapper">
                  <div className="group-container">
                    <div className="inside-enclave-parent">
                      <div className="inside-enclave">INSIDE ENCLAVE</div>
                      <div className="balance2">
                        <div className="div">{`0000000000 `}</div>
                      </div>
                    </div>
                    <img className="frame-child" alt="" src="/line-2.svg" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="group-container">
                    <div className="inside-enclave-parent">
                      <div className="outside-enclave">OUTSIDE ENCLAVE</div>
                      <div className="balance2">
                        <div className="div">{`0000000000 `}</div>
                      </div>
                    </div>
                    <img className="frame-child" alt="" src="/line-2.svg" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="group-wrapper">
                    <div className="frame-wrapper">
                      <div className="total-balance">TOTAL BALANCE</div>
                      <div className="balance2">
                        <div className="div">{`0000000000 `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification">
            <div className="input-or-update1">
              Input, or update, Private Key to enter Enclave.
            </div>
          </div>
        </div>
        <div className="balance5">
          <div className="div">Balance:</div>
          <div className="input-or-update" />
        </div>
        <div className="user-balance2">
          <div className="user-balance1">
            <div className="group-parent">
              <div className="frame-wrapper">
                <div className="group-container">
                  <div className="inside-enclave-parent">
                    <div className="inside-enclave">INSIDE ENCLAVE</div>
                    <div className="balance2">
                      <div className="div">{`0000000000 `}</div>
                    </div>
                  </div>
                  <img className="frame-child" alt="" src="/line-2.svg" />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="group-container">
                  <div className="inside-enclave-parent">
                    <div className="outside-enclave">OUTSIDE ENCLAVE</div>
                    <div className="balance2">
                      <div className="div">{`0000000000 `}</div>
                    </div>
                  </div>
                  <img className="frame-child" alt="" src="/line-2.svg" />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="group-wrapper">
                  <div className="frame-wrapper">
                    <div className="total-balance">TOTAL BALANCE</div>
                    <div className="balance2">
                      <div className="div">{`0000000000 `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tvl-txs">
        <div className="box-group">
          <img className="box-icon" alt="" src="/box.svg" />
          <b className="total-value-locked">Total Value Locked</b>
          <b className="million">0.0 MILLION</b>
          <img className="corner-icon4" alt="" src="/corner4.svg" />
          <img className="corner-icon5" alt="" src="/corner5.svg" />
          <img className="corner-icon6" alt="" src="/corner6.svg" />
        </div>
        <div className="box-container">
          <img className="box-icon1" alt="" src="/box1.svg" />
          <b className="total-value-locked">Daily Transactions</b>
          <b className="million">0000000</b>
          <img className="corner-icon7" alt="" src="/corner3.svg" />
          <img className="corner-icon6" alt="" src="/corner7.svg" />
        </div>
        <div className="box-parent1">
          <img className="box-icon1" alt="" src="/box2.svg" />
          <b className="total-value-locked">Total Transactions</b>
          <b className="million">00000000</b>
          <img className="corner-icon7" alt="" src="/corner3.svg" />
          <img className="corner-icon6" alt="" src="/corner7.svg" />
        </div>
        <div className="box1">
          <div className="vector-container">
            <img className="group-icon" alt="" src="/rectangle-11.svg" />
            <img className="group-child2" alt="" src="/rectangle-12.svg" />
            <div className="july-10-2023-parent">
              <div className="july-10-2023">July 10, 2023</div>
              <div className="div6">12:34:44</div>
              <div className="div7">243546.12443536</div>
              <div className="deposit">Deposit</div>
            </div>
          </div>
          <div className="july-10-2023-group">
            <div className="july-10-2023">July 10, 2023</div>
            <div className="div6">12:44:56</div>
            <div className="div7">243546.12443536</div>
            <div className="deposit">Transfer</div>
          </div>
          <div className="july-10-2023-container">
            <div className="july-10-2023">July 10, 2023</div>
            <div className="div6">11:03:02</div>
            <div className="div7">243546.12443536</div>
            <div className="deposit">Deposit</div>
          </div>
          <div className="july-10-2023-parent1">
            <div className="july-10-2023">July 10, 2023</div>
            <div className="div6">11:02:12</div>
            <div className="div7">243546.12443536</div>
            <div className="deposit">Deposit</div>
          </div>
          <div className="july-10-2023-parent2">
            <div className="july-10-2023">July 10, 2023</div>
            <div className="div6">00:22:01</div>
            <div className="div7">243546.12443536</div>
            <div className="deposit">Withdraw</div>
          </div>
          <b className="recent-transactions">Recent Transactions</b>
          <b className="date">Date</b>
          <b className="time">Time</b>
          <b className="amount">Amount</b>
          <b className="transaction-type">Transaction Type</b>
          <img className="box-item" alt="" src="/line-3.svg" />
        </div>
        <div className="vert-scroll-wrapper">
          <div className="vert-scroll">
            <div className="vert-scroll-child" />
            <div className="vert-scroll-item" />
          </div>
        </div>
        <img className="corner-icon11" alt="" src="/corner.svg" />
        <img className="corner-icon12" alt="" src="/corner7.svg" />
        <img className="corner-icon13" alt="" src="/corner8.svg" />
        <img className="corner-icon14" alt="" src="/corner3.svg" />
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
      {isMobile ? <Disabled /> : <Generate />}
    </div>
  );
};

export default screen1;

