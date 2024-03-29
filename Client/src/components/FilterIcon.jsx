import * as React from "react";
const FilterIcon= (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{
      display: "block",
      height: 14,
      width: 14,
      fill: "currentColor",
    }}
    aria-hidden="true"
    role="presentation"
    focusable="false"
    {...props}
  >
    <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);
export default FilterIcon;
