import { AppLink } from "../../components/AppLink";
import { nodes } from "@markdoc/markdoc";

export const link = {
  ...nodes.link,
  render: AppLink,
};
