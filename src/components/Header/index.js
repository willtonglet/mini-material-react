import React from "react";
import Link from "../Link";
import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li>
            <Link href="/">Accordion</Link>
          </li>
          <li>
            <Link href="/dropdown">Dropdown</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/translate">Translate</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
