import React from "react";
import { motion } from "framer-motion";

import "./styles.css";
import Button from "../../common/Button";
import layer from "../../../assets/layer.png";
import bottom from "../../../assets/bottom.png";
import coin from "../../../assets/coin.png";
import crypto from "../../../assets/crypto.png";
import News from "../../News/News";
import { RWebShare } from "react-web-share";
import { useNavigate } from "react-router-dom";

function MainComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-info">
        <div className="left-component">
          <motion.h1
            className="Discover-new-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover New
          </motion.h1>
          <motion.h1
            className="crypto-currency-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Crypto Currency
          </motion.h1>
          <motion.p
            className="info-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Discover Crypto through a public api in real time. Visit the
            dashboard to do so.
          </motion.p>

          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Button
              text={"Dashboard"}
              onClick={() => navigate("/dashboard")}
            ></Button>

            <RWebShare
              data={{
                text: "Crypto Dashboard made using React JS.",
                url: "https://crypto-dashboard-dec.netlify.app/",
                title: "CryptoDashboard.",
              }}
            >
              <Button text={"Share"} outlined={true}></Button>
            </RWebShare>
          </motion.div>
        </div>
        <div className="gradient-container">
          <img src={layer} alt="layer" className="layer" />
          <div className="tower">
            {/* <img src={coin} alt="coin" className="coin" /> */}
            <motion.img
              src={crypto}
              alt="crypto"
              className="bottom"
              initial={{ y: -20 }}
              animate={{ y: 20 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>
      <News />
    </div>
  );
}

export default MainComponent;
