import React from "react";
import "./index.css";
// import world from "./assets/world.png";

export default function Header() {
  return (
    <>
      <div className="orange">
        <img src="/world.png" alt="" width="30px" />
        <span className="htext">my travel journal</span>
      </div>
    </>
  );
}
