import React, { useState } from "react";
import "./CoinInfo.css";

const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);
  const shortDesc =
    desc.slice(0, 350) +
    "<p style='color: var(--brightgreen)'> Read More...</p>";
  const longDesc =
    desc + "<p style='color: var(--brightgreen)'> Read More...</p>";

  return (
    <div className="gradient-wrapper" style={{ padding: "0rem 1rem" }}>
      <h3 className="coin-info-heading">{heading}</h3>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
