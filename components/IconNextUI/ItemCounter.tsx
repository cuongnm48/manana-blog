import React from "react";

type ItemCounterType = any;

export const ItemCounter = ({ className }: ItemCounterType) => (
  <div className={`flex items-center gap-1 text-default-400 ${className}`}>
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      className="text-xl"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </div>
);
