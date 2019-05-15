import React from "react";


// Custom hamburger menu icon created in Sketch.
// Passed click handler which toggles the visibility of
// the nav menu.
const Hamburger = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <svg
      width="35px"
      height="35px"
      viewBox="0 0 35 35"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Hamburger</title>
      <desc>Hamurger Dropdown Menu Icon</desc>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#F2545B">
          <path
            d="M0,28.463035 L35,28.463035 C35,32.0733011 32.0733011,35 28.463035,35 L6.53696498,35 C2.92669891,35 4.42130079e-16,32.0733011 0,28.463035 Z M0,17.9766537 L3.30820559,17.9766537 L7.36491399,24.3431192 L12.6223322,17.9766537 L27.3823504,17.9766537 L33.4542587,25.0583658 L0,25.0583658 L0,17.9766537 Z M1.74063716,12.5291829 L31,12.5291829 C33.209139,12.5291829 35,14.3200439 35,16.5291829 L35,23.151751 L27.4541601,14.26982 L12.5610891,14.26982 L7.50292661,20.2516643 L3.49926681,14.26982 L0,14.26982 C-1.17728647e-16,13.3084927 0.779309801,12.5291829 1.74063716,12.5291829 Z M8.98832685,0 L26.0116732,-3.55271368e-15 C30.975789,-4.46460697e-15 35,4.024211 35,8.98832685 L0,8.98832685 C-6.07928858e-16,4.024211 4.024211,-8.64463552e-16 8.98832685,-1.77635684e-15 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default Hamburger;
