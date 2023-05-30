import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  {
    title: "Get started",
    links: [
      {
        href: "/docs/web-integrations",
        children: "What are Web Integrations?"
      },
      { href: "/docs/installation", children: "Installation" },
      {
        href: "/docs/browsers",
        children: "Configuration & Kraken Browsers"
      },
      { href: "/docs/faq", children: "FAQ" }
    ]
  },
  {
    title: "Examples",
    links: [
      {
        href: "https://github.com/NZXTCorp/web-integrations-examples/tree/main/spotify-album-art",
        children: "Spotify Now Playing",
        target: "_blank"
      },
      {
        href: "https://github.com/NZXTCorp/web-integrations-examples/tree/main/google-photos-slideshow",
        children: "Google Photo Album Slideshow",
        target: "_blank"
      },
      {
        href: "https://github.com/NZXTCorp/web-integrations-examples/tree/main/unsplash-slideshow",
        children: "Unsplash Random Photo",
        target: "_blank"
      },
      {
        href: "https://github.com/NZXTCorp/web-integrations-examples/tree/main/youtube-embed",
        children: "Youtube Video",
        target: "_blank"
      },
      {
        href: "https://github.com/NZXTCorp/web-integrations-examples/blob/main/community.md",
        children: "Community Submissions",
        target: "_blank"
      }
    ]
  }
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? "active" : ""}>
                  <Link {...link}>{link.children}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          }
          li a {
            text-decoration: none;
          }
          li :global(a) {
            text-decoration: none;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
