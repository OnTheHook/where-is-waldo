import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <ul
      className={styles.modal}
      style={{ display: `${props.display}`, left: `${props.pos_x}px`, top: `${props.pos_y}px` }}
    >
      <li onClick={props.onFirstClick}>Sword</li>
      <li onClick={props.onSecondClick}>Head</li>
      <li onClick={props.onThirdClick}>Anvil</li>
    </ul>
  );
};

export default Modal;
