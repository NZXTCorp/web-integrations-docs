import Video from "../../components/Video";

export default {
  render: Video,
  attributes: {
    src: { type: String },
    width: { type: Number },
    height: { type: Number },
    className: { type: String },
  },
};
