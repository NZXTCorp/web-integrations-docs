import React from "react";
import Link from "next/link";

export function AppLink(props) {
  const target =
    props.target ||
    (props.href.startsWith("https") || props.href.startsWith("http")
      ? "_blank"
      : undefined);

  return (
    <Link
      className={props.className}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      {...props}
      passHref
    >
      {props.children}
    </Link>
  );
}
