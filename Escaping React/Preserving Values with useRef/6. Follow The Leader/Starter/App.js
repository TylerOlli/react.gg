import * as React from "react";
import { animateBox } from "./utils";

export default function FollowTheLeader() {
  const handleClick = ({ clientX, clientY }) => {};

  return (
    <div className="wrapper" onClick={handleClick}>
      <div className="box" />
    </div>
  );
}