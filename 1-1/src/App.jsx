import React, { useState, useRef } from "react";

import MobileNav from "./components/MobileNav";
import WebNav from "./components/WebNav";
import Main from "./components/Main";
import Buttons from "./components/Buttons";

const App = () => {
  const [fontSizeRatio, setFontSizeRatio] = useState(1);
  const fontSize = useRef([
    0.2,
    0.4,
    0.6,
    0.8,
    1,
    1.2,
    1.4,
    1.6,
    1.8,
    2.0,
    2.2,
    2.4,
    2.6,
    2.8,
    3.0,
  ]);
  const pointer = useRef(4);

  const handlePlusBtn = () => {
    if (pointer.current < fontSize.current.length - 1) {
      pointer.current++;
      setFontSizeRatio(fontSize.current[pointer.current]);
    }
  };

  const handleMinusBtn = () => {
    if (pointer.current > 0) {
      pointer.current--;
      setFontSizeRatio(fontSize.current[pointer.current]);
    }
  };

  return (
    <>
      <WebNav fontSizeRatio={fontSizeRatio} />
      <MobileNav fontSizeRatio={fontSizeRatio} />
      <Main fontSizeRatio={fontSizeRatio} />
      <Buttons onPlusBtn={handlePlusBtn} onMinusBtn={handleMinusBtn} />
    </>
  );
};

export default App;
