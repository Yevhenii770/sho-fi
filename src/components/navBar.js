"use client";

import Earth from "../svg/earth-svgrepo-com.svg";
import Logo from "./logo";
import React, { useState } from "react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className=" bg-slate-400">
      <div className=" container max-w-screen-xl py-4 flex items-center justify-between">
        <Logo />
        <button onClick={togleModal}>
          <Earth />
        </button>
      </div>
    </header>
  );
}
