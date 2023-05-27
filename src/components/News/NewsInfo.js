import React from "react";
import { motion } from "framer-motion";
import "./NewsInfo.css";

const NewsInfo = ({ title, description, url }) => {
  return (
    <motion.div
      className="gradient-wrapper news-wrapper"
      style={{ padding: "1rem 2rem" }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a href={url} style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="news-heading">{title}</h3>
        <div className="new-more-info">
          <p className="news-desc">{description}</p>
          <p style={{ color: "var(--brightgreen)" }}>For more info</p>
        </div>
      </a>
    </motion.div>
  );
};

export default NewsInfo;
