import Image from "../../components/Image";

export default {
  render: Image,
  attributes: {
    src: { type: String },
    alt: { type: String },
    className: { type: String },
    width: { type: Number },
    height: { type: Number },
  },
};
