"use client";

import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import React, { useState } from "react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className=" bg-main rounded-b-lg">
      <div className=" container max-w-screen-xl py-4 flex items-center justify-between">
        <Logo />
        <MobileMenu show={showModal} togleModal={togleModal} />
      </div>
    </header>
  );
}
