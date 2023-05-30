import * as React from "react";

export default function Video({ src }) {
  return (
    <>
      <video
        autoPlay
        muted
        playsInline
        loop
        className={["video"].filter(Boolean).join(" ")}
      >
        <source src={src} type="video/mp4" />
      </video>
      <style jsx>
        {`
          .video:global(video) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.4);
            z-index: -1;
          }
        `}
      </style>
    </>
  );
}
