import * as React from "react";
import { useRouter } from "next/router";

type header = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Heading({ id = "", level = 1, children, className }) {
  const router = useRouter();
  const Component = `h${level}` as header;

  const isDocs = router.pathname.startsWith("/docs");

  const link = (
    <Component className={["heading", className].filter(Boolean).join(" ")}>
      <div id={id} />
      {children}
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          a:hover {
            opacity: 1;
          }
          div {
            position: absolute;
            top: calc(-1 * (var(--nav-height) + 44px));
          }
        `}
      </style>
    </Component>
  );

  return isDocs && level !== 1 ? (
    <a href={`#${id}`}>
      {link}
      <style jsx>
        {`
          a {
            text-decoration: none;
            transition: none;
            color: (var(--text-color));
          }
          a:hover {
            opacity: 1;
          }
          a :global(.heading::after) {
            opacity: 0;
            content: "  #";
            transition: opacity 0.2s ease-in-out;
          }
          a :global(.heading:hover::after) {
            opacity: 1;
          }
        `}
      </style>
    </a>
  ) : (
    link
  );
}
