import "./assetcss/packager.scss";

export default function PackagerLogo({ className = "", ...props }) {
  return (
    <svg
      id="packager"
      className={`logo-container logo-container--packager ${className}`.trim()}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 237.24 247.33"
      {...props}
    >
      <title>Packager Logo</title>
      <polygon
        className="cls-packager-1"
        points="129.74 246.33 129.74 116.33 1 65.33 1 195.33 129.74 246.33"
      />
      <polygon
        className="cls-packager-2"
        points="129.74 246.33 129.74 116.33 236.24 52.33 236.24 182.33 129.74 246.33"
      />
      <polygon
        className="cls-packager-2"
        points="1 65.33 107.5 1 236.24 52.33 129.74 116.33 1 65.33"
      />
      <polygon
        className="cls-packager-3"
        points="48.67 85.29 157.27 19.77 185.83 31.16 76.9 96.5 48.67 85.29"
      />
      <polygon
        className="cls-packager-3"
        points="76.9 132.17 76.9 96.48 48.67 85.29 48.67 120.83 76.9 132.17"
      />
      <polygon
        className="cls-packager-3"
        points="76.9 226.83 76.9 191.15 48.67 179.96 48.67 215.5 76.9 226.83"
      />
    </svg>
  );
}
