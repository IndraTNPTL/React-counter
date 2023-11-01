import calculatorLogo from "../assets/calculator-solid.png";

const Header = ({ title }) => {
  return (
    <header>
      <div className="logo">
        <img src={calculatorLogo} alt="logo" className="imgLogo" />
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
