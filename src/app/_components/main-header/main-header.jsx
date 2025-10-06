import React from "react";
import TopBar from "./top-bar";
import LogoBar from "./logo-bar";
import MenuBar from "./menu-bar";

export default function MainHeader({ locale }) {
  return (
    <div>
      {/* Top bar */}
      <TopBar />

      {/* Logo bar */}
      <LogoBar locale={locale} />

      {/* Menu bar */}
      <MenuBar />
    </div>
  );
}
