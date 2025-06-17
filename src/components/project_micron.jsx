import ImgTitlepage from "./../assets/micron/titlepage.png";
import ImgPart1 from "./../assets/micron/part1.png";
import ImgPart2 from "./../assets/micron/part2.png";
import ImgPart3 from "./../assets/micron/part3.png";
import ImgPart4 from "./../assets/micron/part4.png";
import ImgPart5 from "./../assets/micron/part5.png";
import ImgPart6 from "./../assets/micron/part6.png";
import ImgPart7 from "./../assets/micron/part7.png";
import ImgEndingpage from "./../assets/micron/endingpage.png";

export default function ProjectMicron() {
  return (
    <div className="project__content">
      <h1 className="project__title">Micron Brandsite</h1>
      <div className="project__eyebrow-container">
        <p className="project__eyebrow">MY ROLE: DEVELOPMENT</p>
        <p className="project__eyebrow">
          TECH: NEXTJS x GSAP
        </p>
        <p className="project__eyebrow">PROJECT: WEBSITE</p>
        <p className="project__eyebrow">
          <a
            href="https://www.brand.micron.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brandsite
          </a>
        </p>
      </div>
      <p>
        As part of Micron’s global rebranding initiative, I helped bring their bold new identity to life by developing an immersive brand microsite
      </p>

      <p>
        The site blends scroll-triggered animations with subtle sound design to create a polished, high-impact digital experience. I led the frontend development and was also responsible for selecting and implementing the animation tech stack. This included choosing performant libraries for scroll-based interactivity and integrating them seamlessly with the site's architecture.
      </p>

      <div className="project__divider">❋</div>

      <img
        className="project__image"
        src={ImgTitlepage}
        alt="Micron Brandsite Title Page"
      />

      <img className="project__image" src={ImgPart1} alt="Micron Part 1" />
      <img className="project__image" src={ImgPart2} alt="Micron Part 2" />
      <img className="project__image" src={ImgPart3} alt="Micron Part 3" />
      <img className="project__image" src={ImgPart4} alt="Micron Part 4" />
      <img className="project__image" src={ImgPart5} alt="Micron Part 5" />
      <img className="project__image" src={ImgPart6} alt="Micron Part 6" />
      <img className="project__image" src={ImgPart7} alt="Micron Part 7" />
      <img
        className="project__image"
        src={ImgEndingpage}
        alt="Micron Brandsite Ending Page"
      />
    </div>
  );
}
