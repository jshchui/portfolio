import { useCallback } from "react";
import { Link } from "react-router";

import "./projects.scss";

// import ProjectHaikugenerator from "./project_haikugenerator";
import ProjectTriangle from "../project_triangle";
import ProjectWerewolf from "../project_werewolf";
import ProjectFanswifi from "../project_fanswifi";
// import ProjectCodedrillz from "./project_codedrillz";
import ProjectNauticalcats from "../project_nauticalcats";
import ProjectRediscoverindigo from "../project_rediscoverindigo";
import ProjectPackager from "../project_packager";
import ContactPage from "../contact";

export default function Project({
  className,
  projectRef,
  hostName,
  currentProject,
  toggleProject,
  scrollTop,
}) {
  const renderProject = useCallback(() => {
    switch (currentProject) {
      case `${hostName}packager`:
        return <ProjectPackager />;
      case `${hostName}haikugenerator`:
        return <ProjectHaikugenerator />;
      case `${hostName}werewolf`:
        return <ProjectWerewolf />;
      case `${hostName}triangle`:
        return <ProjectTriangle />;
      case `${hostName}fanswifi`:
        return <ProjectFanswifi />;
      case `${hostName}codedrillz`:
        return <ProjectCodedrillz />;
      case `${hostName}nauticalcats`:
        return <ProjectNauticalcats />;
      case `${hostName}rediscoverindigo`:
        return <ProjectRediscoverindigo />;
      case `${hostName}contact`:
        return <ContactPage routeName={currentProject} />;
      default:
        return <div>Nothing</div>;
    }
  }, [currentProject, hostName]);

  console.log("project.jsx hostName: ", hostName);
  return (
    <div className={className} ref={projectRef}>
      <Link
        to={`/${hostName}`}
        className="project__close-button"
        onClick={(e) => toggleProject("nothing", e)}
      >
        <div className="project__close-button">
          <svg
            id="Layer_1"
            className="project__close-button-svg"
            data-name="Layer 1"
            viewBox="0 0 19.49 19.49"
          >
            <rect
              x="947.17"
              y="540.36"
              width="25"
              height="2.56"
              transform="translate(-1051.84 305.33) rotate(-45)"
            />
            <rect
              x="958.39"
              y="529.14"
              width="2.56"
              height="25"
              transform="translate(-1051.84 305.33) rotate(-45)"
            />
          </svg>
        </div>
      </Link>

      {renderProject()}

      {currentProject !== "contact" && (
        <button className="project__scroll-top" onClick={scrollTop}>
          <svg id="Layer_1" viewBox="0 0 23.49 13.56">
            <polygon points="13.56 1.81 11.74 0 9.93 1.81 0 11.74 1.81 13.56 11.74 3.62 21.68 13.56 23.49 11.74 13.56 1.81" />
          </svg>
        </button>
      )}
    </div>
  );
}
