const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src="/images/logo.svg" alt="" />
      </div>

      <nav>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>

        <div class="hamburger">
          <img src="/images/icon-hamburger.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
