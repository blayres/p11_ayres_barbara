import React from "react";
import "./Collapse.css";
import Arrow from "../Icons/Arrow";

export default function Dropdown(props) {
  return (
    <details className="dropdown">
      <summary>
        {props.title}
        <Arrow />
      </summary>
      <div>{props.text}</div>
    </details>
  );
}

export function DropdownLarge(props) {
  return (
    <details className="dropdown large">
      <summary>
        {props.title}
        <Arrow />
      </summary>
      <div>{props.text}</div>
    </details>
  );
}
