import React from "react";

import { AppLink as Link } from "./AppLink";

export function TopNav({ children }) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <div className={showMobileNav ? "nav-bar active" : "nav-bar"}>
      <nav>
        <div className="flex top-row">
          <Link href="/" className="flex">
            <svg
              className="nzxt-logo"
              width="112"
              height="37"
              viewBox="140 25 100 100"
            >
              <g>
                <polygon
                  fill="currentColor"
                  points="243.62,50.4 200.63,50.4 200.63,64.04 214.2,64.04 214.2,102.16 230.05,102.16 230.05,64.04 243.62,64.04 	"
                />
                <polygon
                  fill="currentColor"
                  points="196.53,50.4 180.15,50.4 171.21,63.69 162.82,50.4 145.45,50.4 162.31,76.5 145.69,102.16 162.65,102.16 
			170.98,89 179.44,102.16 196.81,102.16 179.87,76.03 	"
                />
                <polygon
                  fill="currentColor"
                  points="75.09,75.64 75.11,76.08 57.43,50.4 42.59,50.4 42.59,102.16 57.51,102.16 57.51,74.91 76.18,102.16 90.02,102.16 
			90.02,50.4 75.09,50.4 	"
                />
                <polygon
                  fill="currentColor"
                  points="98.03,50.4 98.03,63.44 116.95,63.44 96.93,102.16 140.08,102.16 140.08,89.04 120.11,89.04 140.5,50.4 	"
                />
              </g>
            </svg>
          </Link>
          <button
            className="hamburger"
            onClick={() => setShowMobileNav((o) => !o)}
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="var(--black)" />
              <rect y="4" width="16" height="2" fill="var(--black)" />
              <rect y="8" width="16" height="2" fill="var(--black)" />
            </svg>
          </button>
        </div>
        <section className={showMobileNav ? "active" : ""}>{children}</section>
      </nav>
      <style jsx>
        {`
          .nav-bar {
            top: 0;
            position: fixed;
            z-index: 100;
            display: flex;
            width: 100%;
            background: var(--light);
            height: 70px;
            transition: background 300ms ease;
          }
          nav {
            display: flex;
            gap: 1rem;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem 1.1rem;
            font-size: 15px;
            font-family: var(--sans);
          }
          nav :global(a) {
            text-decoration: none;
          }
          nav :global(.DocSearch-Button) {
            background: var(--code-background);
            height: 32px;
            border-radius: 32px;
          }
          nav :global(.DocSearch-Button:hover) {
            box-shadow: none;
            background: #e8eef3;
          }
          :global(.dark) nav :global(.DocSearch-Button:hover) {
            background: #424248;
          }
          nav :global(.DocSearch-Search-Icon) {
            color: var(--dark);
            width: 16px;
          }
          nav :global(.DocSearch-Button-Placeholder),
          nav :global(.DocSearch-Button-Keys) {
            display: none;
          }
          .nzxt-logo {
            color: var(--dark);
            transition: color 300ms ease;
          }
          .nzxt-logo:hover {
            color: var(--purple);
          }
          section {
            display: flex;
            align-items: center;
            gap: 1.3rem;
            padding: 0;
          }
          button {
            display: none;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 32px;
            background: var(--gray-light);
            border-radius: 30px;
          }
          .top-row {
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          @media screen and (max-width: 600px) {
            .nav-bar {
              border-bottom: 1px solid var(--dark);
              transition: height 0.3s ease, background 0.5s ease;
            }
            .active {
              height: 100px;
            }
            nav {
              flex-direction: column;
              align-items: flex-start;
              border-bottom: none;
            }
            section {
              display: flex;
              font-size: 15px;
              opacity: 0;
              visibility: hidden;
              transition: none;
            }
            section.active {
              display: flex;
              opacity: 1;
              visibility: visible;
              transition: opacity 0.3s ease 0.4s, visibility 0.3s ease 0.4s;
            }
            button {
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
}
