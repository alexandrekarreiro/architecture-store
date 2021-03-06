import { useState } from "react";
import useIsomorphicLayoutEffect from "lib/hooks/useIsomorphicLayoutEffect";

import Container from "components/shared/Container";
import Menu from "./Menu";
import Nav from "./Nav";
import SearchInput from "./Menu/SearchInput";
import Logo from "./Logo";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState("hidden");

  function handleMenuAnimate() {
    if (window.screen.width < 576) {
      setIsMenuVisible("hidden");
    } else {
      setIsMenuVisible("visible");
    }
  }

  useIsomorphicLayoutEffect(() => {
    handleMenuAnimate();

    window.addEventListener("resize", handleMenuAnimate);

    return () => {
      window.removeEventListener("resize", handleMenuAnimate);
    };
  }, []);

  return (
    <Nav isMenuVisible={isMenuVisible}>
      <Container>
        <Logo
          toggleMenu={() =>
            setIsMenuVisible(isMenuVisible === "visible" ? "hidden" : "visible")
          }
        />
        <Menu isVisible={isMenuVisible} />
        <SearchInput />
      </Container>
    </Nav>
  );
}

export default Header;
