import "./assetcss/triangle.scss";

export default function TriangleLogo() {
  return (
    <svg
      id="triangle_lamp"
      className="logo-container logo-container--triangle"
      data-name="triangle_lamp"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 95.08 216.61"
    >
      <polygon
        className="screen-one cls-1"
        points="68.68 162.3 68.68 216.6 0 178.09 0 122.63 68.68 162.3"
      />
      <polygon
        className="block-one cls-2"
        points="0 122.64 68.68 162.3 68.68 216.61 95.08 163.21 95.08 108 0 122.64"
      />
      <polygon
        className="screen-two cls-1"
        points="68.68 108.3 68.68 162.6 0 124.09 0 68.63 68.68 108.3"
      />
      <polygon
        className="block-two cls-2"
        points="0 68.64 68.68 108.3 68.68 162.61 95.08 109.2 95.08 54 0 68.64"
      />
      <polygon
        className="screen-three cls-1"
        points="68.68 54.3 68.68 108.6 0 70.09 0 14.63 68.68 54.3"
      />
      <polygon
        className="block-three cls-2"
        points="0 14.64 68.68 54.3 68.68 108.61 95.08 55.2 95.08 0 0 14.64"
      />
    </svg>
  );
}
