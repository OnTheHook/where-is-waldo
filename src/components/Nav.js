import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav>
      <ul className={styles.links}>
        <li>Home</li>
        <li>Leader Board</li>
      </ul>
    </nav>
  );
};

export default Nav;
