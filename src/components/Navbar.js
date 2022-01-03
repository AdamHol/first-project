import reactLogo from "../images/React-logo.png";

function Header() {
  return (
    <header>
      <nav className='nav'>
        <div className='nav__logo'>
          <img
            src={reactLogo}
            alt='React Logo'
            className='nav__logo-pic'
          />
          <h4 className='nav__logo-text'>ReactFacts</h4>
        </div>

        <p className='nav__title'>React Course - Project 1</p>
      </nav>
    </header>
  );
}

export default Header;
