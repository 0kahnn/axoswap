import { useState } from "react";
import settings from "../../../assets/images/settings.svg";
import { FaAngleDown } from "react-icons/fa";
import SelectToken from "../SelectToken";
import token1 from "../../../assets/images/token1.png";
import token2 from "../../../assets/images/token2.png";
import token3 from "../../../assets/images/token3.png";
import token4 from "../../../assets/images/token4.png";
import token5 from "../../../assets/images/token5.png";
import token6 from "../../../assets/images/token6.png";
import token7 from "../../../assets/images/token7.png";

const Swap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState({
    value: "ETH",
    image: token1,
  });
  const [selectedOption2, setSelectedOption2] = useState({
    value: "Acala",
    image: token2,
  });
  const swapHandler = () => {
    let tempSelect1 = selectedOption1;
    let tempSelect2 = selectedOption2;
    setSelectedOption1(tempSelect2);
    setSelectedOption2(tempSelect1);
  };

  return (
    <div className="swap-block">
      <div className="setting-drop">
        <div className="btn-group">
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuClickableInside"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={settings} alt="" />
          </button>
          <ul
            className={`dropdown-menu  mt-5 ${isOpen ? "show" : ""}`}
            aria-labelledby="dropdownMenuClickableInside"
          >
            <div className="dropdown-block">
              <h2>Transaction Settings</h2>
              <div className="form-group">
                <label>Slippage tolerance ?</label>
                <div className="slippage-input">
                  <a href="#" className="btn-main">
                    <span>Auto</span>
                  </a>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0.10 %"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Transaction deadline ?</label>
                <div className="slippage-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={30}
                  />
                  <label>minutes</label>
                </div>
              </div>
              <h2>Interface Settings</h2>
              <div className="toggle-box">
                <h5>Auto Router API ?</h5>
                <label className="toggle-label">
                  <input type="checkbox" />
                  <span className="back">
                    <span className="toggle" />
                    <span className="label on">on</span>
                    <span className="label off">off</span>
                  </span>
                </label>
              </div>
              <div className="toggle-box">
                <h5>Expert Mode ?</h5>
                <label className="toggle-label">
                  <input type="checkbox" defaultChecked />
                  <span className="back">
                    <span className="toggle" />
                    <span className="label on">on</span>
                    <span className="label off">off</span>
                  </span>
                </label>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="swap-box">
        <div className="form-group w-50">
          <SelectToken
            selectedOption={selectedOption1}
            optionSelectHandler={(e) => setSelectedOption1(e)}
          />
        </div>
        <h4>
          0 <small>~$12345</small> <span>Balance: 0</span>
        </h4>
      </div>
      <div className="swap-arrrow" onClick={() => swapHandler()}>
        {/* <button class="select-swap">&nbsp;</button> */}
        <a href="javascript:void(0);" className="select-swap">
          <i className="far fa-angle-down" />
          <FaAngleDown />
        </a>
      </div>
      <div className="swap-box">
        <div className="form-group  w-50">
          <SelectToken
            selectedOption={selectedOption2}
            optionSelectHandler={(e) => setSelectedOption2(e)}
          />
        </div>
        <h4>
          0 <small>~$12345</small> <span>Balance: 0</span>
        </h4>
      </div>
      <div className="swap-info">
        <h5>1 AXO = 0.0012 ETH ($0.0002)</h5>
        <div className="form-group">
          <select className="form-control">
            <option>Legacy</option>
            <option>Legacy</option>
            <option>Legacy</option>
            <option>Legacy</option>
          </select>
        </div>
      </div>
      <a href="#" className="btn-main">
        <span>SWAP</span>
      </a>
    </div>
  );
};
export default Swap;
