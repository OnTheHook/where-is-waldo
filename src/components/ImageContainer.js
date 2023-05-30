import { useState } from "react";
import styles from "./ImageContainter.module.css";
import Modal from "./Modal";

const ImageContainer = (props) => {
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [display, setDisplay] = useState("none");

  const handleOnClick = (event) => {
    // const pos_x = event.pageX;
    // const pos_y = event.pageY;

    // if (pos_x >= 305 && pos_x <= 404 && pos_y >= 138 && pos_y <= 370) {
    //   props.onFirstFound();
    // } else if (pos_x >= 128 && pos_x <= 232 && pos_y >= 146 && pos_y <= 232) {
    //   props.onSecondFound();
    // } else if (pos_x >= 230 && pos_x <= 449 && pos_y >= 375 && pos_y <= 488) {
    //   props.onThirdFound();
    // }
    // console.log(pos_x, pos_y);

    setPositionX(event.pageX);
    setPositionY(event.pageY);
    setDisplay("flex");
  };

  const handleOnModalClickFirst = (event) => {
    event.stopPropagation();
    if (
      positionX >= 305 &&
      positionX <= 404 &&
      positionY >= 138 &&
      positionY <= 370
    ) {
      props.onFirstFound();
    }
    setDisplay("none");
  };

  const handleOnModalClickSecond = (event) => {
    event.stopPropagation();
    if (
      positionX >= 128 &&
      positionX <= 232 &&
      positionY >= 146 &&
      positionY <= 232
    ) {
      props.onSecondFound();
    }
    setDisplay("none");
  };

  const handleOnModalClickThird = (event) => {
    event.stopPropagation();
    if (
      positionX >= 230 &&
      positionX <= 449 &&
      positionY >= 375 &&
      positionY <= 488
    ) {
      props.onThirdFound();
    }
    setDisplay("none");
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <Modal
        pos_x={positionX}
        pos_y={positionY}
        display={display}
        onFirstClick={handleOnModalClickFirst}
        onSecondClick={handleOnModalClickSecond}
        onThirdClick={handleOnModalClickThird}
      />
      <img src={props.image} alt="The Sword in the Stone" />
    </div>
  );
};

export default ImageContainer;
