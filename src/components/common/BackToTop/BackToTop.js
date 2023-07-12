import React, { useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

import "./BackToTop.css";

function BackToTop() {
  // let mybutton = document.getElementById("myBtn");

  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "flex";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", scrollFunction);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []); // Empty dependency array to run the effect only once

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--white)" }} />
    </div>
  );
}

export default BackToTop;
