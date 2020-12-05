import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={134.992}
      height={23.115}
      viewBox="0 0 35.717 6.116"
      {...props}
    >
      <text
        style={{
          lineHeight: 1.25,
        }}
        x={44.045}
        y={105.936}
        fontWeight={400}
        fontSize={7.761}
        fontFamily="sans-serif"
        fill="#fc0"
        strokeWidth={0.265}
        transform="translate(-44.162 -99.921)"
      >
        <tspan x={44.045} y={105.936} fontFamily="Fredoka One" fill="#666">
          <tspan fill="#f60">{"W"}</tspan>
          <tspan fill="#f60">{"e"}</tspan>
          <tspan fill="#f60">{"T"}</tspan>
          <tspan fill="#f60">{"rack"}</tspan>
        </tspan>
      </text>
    </svg>
  );
}

export default Logo;
