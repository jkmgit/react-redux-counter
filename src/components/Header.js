import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["app-header"]}>
      <h1>The Counter</h1>
    </header>
  );
};

export default Header;
