import * as React from "react";

export default function Video({ className, src, width, height }) {
  return (
    <>
      <video
        autoPlay
        muted
        playsInline
        loop
        width={width}
        height={height}
        className={["video", className].filter(Boolean).join(" ")}
      >
        <source src={src} type="video/mp4" />
      </video>
      <style jsx>
        {`
          .video:global(video) {
            width: 100%;
            height: auto;
          }
          .home {
            background: var(--light);
            z-index: -1;
            filter: brightness(0.4);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 870px;
            object-fit: cover;
            transform: translateY(-5%);
          }
        `}
      </style>
    </>
  );
}
