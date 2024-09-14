import React, { useRef } from "react";

export default function Tooltip({ children, tooltip }) {
  const toolTipRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      onMouseEnter={({ x }) => {
        if (!toolTipRef.current || !containerRef.current) return;
        const { left } = containerRef.current.getBoundingClientRect();
        toolTipRef.current.style.left = x - left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      <span
        ref={toolTipRef}
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-slate-600 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap text-xs p-2"
      >
        {tooltip}
      </span>
    </div>
  );
}
