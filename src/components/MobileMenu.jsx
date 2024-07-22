import { useState } from "preact/hooks";

// OpenMenu Component
const OpenMenu = () => (
  <span className="menu-icon open">
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </span>
);

// CloseMenu Component
const CloseMenu = () => (
  <span className="menu-icon close">
    <div className="bar"></div>
    <div className="bar close"></div>
  </span>
);

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mobile-nav-links">
        <a href="/" className="mobile-logo">
          <h1>J</h1>
          <img src="/images/wedding-ring.png" alt="logo" />
          <h1>M</h1>
        </a>
        <div className="navController">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="menuBtn"
          >
            {!isOpen ? <OpenMenu /> : <CloseMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className={`mobile-nav ${isOpen ? "open" : "close"}`}>
          <ul>
            <li>
              <a href="/about">OUR STORY</a>
            </li>
            <li>
              <a href="/entourage">ENTOURAGE</a>
            </li>
            <li>
              <a href="/registry">REGISTRY</a>
            </li>
            <li>
              <a href="/gallery">GALLERY</a>
            </li>
            <li>
              <a href="//rsvp">RSVP</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileMenu;
