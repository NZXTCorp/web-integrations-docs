import { link } from "@markdoc/next.js/src/tags";

import { AppLink } from "../../components/AppLink";

export default {
  ...link,
  render: AppLink,
};
