import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import "./MouseTransition.scss";

// Helper function to generate diamond points
// cx, cy: center of the diamond
// w, h: width and height of the diamond
function getDiamondPoints(cx, cy, w, h) {
  return `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${
    cx - w / 2
  },${cy}`;
}

const MASK_ID = "revealMaskDiamondTransition";

const MouseTransition = ({
  clickX,
  clickY,
  onPageSwapNeeded,
  onTransitionEnd,
}) => {
  const svgRef = useRef(null);
  const coverDiamondPathRef = useRef(null);
  const revealMaskPolygonRef = useRef(null);

  useEffect(() => {
    if (
      !clickX ||
      !clickY ||
      !svgRef.current ||
      !coverDiamondPathRef.current ||
      !revealMaskPolygonRef.current
    ) {
      console.log("returning");
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const initialDiamondSize = 2;
    const smallDiamondPts = getDiamondPoints(
      clickX,
      clickY,
      initialDiamondSize,
      initialDiamondSize
    );
    const largeDim = Math.max(vw, vh) * 2.5;
    const largeDiamondPtsCover = getDiamondPoints(
      vw / 2,
      vh / 2,
      largeDim,
      largeDim
    );
    const largeDiamondPtsReveal = getDiamondPoints(
      vw / 2,
      vh / 2,
      largeDim,
      largeDim
    );

    const coverPoly = coverDiamondPathRef.current;
    const maskPoly = revealMaskPolygonRef.current;
    const svgElement = svgRef.current;

    gsap.set(svgElement, { display: "block" });
    gsap.set(coverPoly, {
      attr: { points: smallDiamondPts, mask: "" },
      // fill: "#2563eb", // Example: blue color for the covering diamond
    });
    gsap.set(maskPoly, { attr: { points: smallDiamondPts } });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(svgElement, { display: "none" });
        if (onTransitionEnd) {
          console.log("calling tansition end");
          onTransitionEnd();
        }
      },
    });

    tl.to(coverPoly, {
      attr: { points: largeDiamondPtsCover },
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        if (onPageSwapNeeded) {
          console.log("on page swap needed");
          onPageSwapNeeded();
        }
        gsap.set(coverPoly, { attr: { mask: `url(#${MASK_ID})` } });
      },
    }).to(
      maskPoly,
      {
        attr: { points: largeDiamondPtsReveal },
        duration: 0.8,
        ease: "power3.out",
      },
      ">0.05"
    );

    return () => {
      tl.kill();
      gsap.set(svgElement, { display: "none" });
    };
  }, [clickX, clickY, onPageSwapNeeded, onTransitionEnd]);
  return (
    <>
      <svg
        ref={svgRef}
        className="diamond-transition-svg"
        style={{ display: "none" }}
        preserveAspectRatio="xMidYMid slice"
        viewBox={`0 0 ${
          typeof window !== "undefined" ? window.innerWidth : 1000
        } ${typeof window !== "undefined" ? window.innerHeight : 1000}`}
      >
        <defs>
          <mask id={MASK_ID}>
            <rect width="100%" height="100%" fill="white" />
            <polygon
              ref={revealMaskPolygonRef}
              points="0,0 0,0 0,0 0,0"
              fill="black"
            />
          </mask>
        </defs>
        <polygon
          className="diamond-poly"
          ref={coverDiamondPathRef}
          points="0,0 0,0 0,0 0,0"
        />
      </svg>
    </>
  );
};

export default MouseTransition;
