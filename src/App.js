import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import Timer from "./components/Timer";
import tryHard from "./images/try.jpg";

const found = {
  first: false,
  second: false,
  third: false,
};

const App = () => {
  const changeFirst = () => {
    found.first = true;
    console.log(found);
  };

  const changeSecond = () => {
    found.second = true;
    console.log(found);
  };

  const changeThird = () => {
    found.third = true;
    console.log(found);
  };
  return (
    <div className="App">
      <Header />
      <ImageContainer image={tryHard} onFirstFound={changeFirst} onSecondFound={changeSecond} onThirdFound={changeThird} />
      <Timer />
    </div>
  );
};

export default App;
