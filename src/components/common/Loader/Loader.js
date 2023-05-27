import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
}

export default Loader;
