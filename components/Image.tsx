import * as React from "react";
import IMG from "next/image";
export default function Image({ className, src, alt, width, height }) {
  return (
    <>
      <IMG
        priority
        quality={100}
        loading="eager"
        className={["image", className].filter(Boolean).join(" ")}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <style jsx>
        {`
          .image:global(img) {
            object-fit: contain;
            margin: 0 0 var(--default-vertical-spacing) !important;
          }
        `}
      </style>
    </>
  );
}
