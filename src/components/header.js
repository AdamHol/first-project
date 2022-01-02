function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F685-6854994_react-logo-no-background-hd-png-download.png&f=1&nofb=1'
          className='nav-logo'
        />

        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
