import webpIsSupported from "../../helpers/webp";

const BackGround = () => {
  return webpIsSupported() ? 'webp': 'jpeg';
};

export default BackGround;
