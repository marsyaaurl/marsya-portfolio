import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hello">
        <img src="src/assets/my photo.jpg" alt="My Photo"/>
        <p>hi! <br />
          my name is marsya aurelia <br />
          syahkira, you can call me <br />
          marsya or caca. i am enthusiastic <br />
          about graphic design, UI/UX <br />
          design, and frontend web <br />
          development.
        </p>
      </div>

      <div className="name">
        <h2>i <span>am</span></h2>
        <h1>marsya aurelia</h1>
      </div>

      <div className="bottom">
        <h3>Graphic Designer      |       UI/UX Designer      |       Frontend Web Developer.</h3>
      </div>
    </>
  );
}

export default Home;
