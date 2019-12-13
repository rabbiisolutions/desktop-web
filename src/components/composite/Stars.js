import Star from "./Star";

function renderStars(stars) {
  let num = parseInt(stars.key);
  return (
      stars.shade.map((shade) => {
        num = num + 1;
        return Star({shade: shade, key: num, height: stars.height});
      })
  );
}

export default renderStars;
