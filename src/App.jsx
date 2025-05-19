import { useState, useCallback, useEffect, useRef } from "react";
import "./App.scss";
import PackagerLogo from "./assets/packager";
import TriangleLogo from "./assets/triangle";
import WerewolfLogo from "./assets/werewolf";
import Project from "./components/projects";
import Logo from "./components/logo";

import { TopBanner } from "./components/TopBanner/TopBanner";

import Resume from "./assets/resume.pdf";

import { Routes, Route, Link } from "react-router";

function App() {
  const projectContainerRef = useRef(null);

  const [hostName, setHostName] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [projectShowing, setProjectShowing] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  console.log("hostName: ", hostName);

  const projectData = [
    {
      key: "packager",
      title: "Packager",
      Logo: <PackagerLogo className="App-logo" aria-label="logo" />,
    },
    // { key: 'fanswifi', title: 'Fanswifi', Logo: FanswifiLogo },
    // { key: 'haikugenerator', title: 'Haiku Generator', Logo: HaikugeneratorLogo },
    {
      key: "werewolf",
      title: "Werewolf",
      Logo: <WerewolfLogo className="App-logo" aria-label="logo" />,
    },
    {
      key: "triangle",
      title: "Triangle",
      Logo: <TriangleLogo className="App-logo" aria-label="logo" />,
    },
    // { key: 'codedrillz', title: 'Codedrillz', Logo: CodedrillzLogo },
    // { key: 'rediscoverindigo', title: 'Rediscover Indigo', Logo: IndigoLogo },
    // { key: 'nauticalcats', title: 'Nautical Cats', Logo: NauticalLogo },
  ];

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    const pathName = window.location?.pathname || "";
    if (pathName.includes("portfolio")) {
      setHostName("portfolio/");
    }
    if (pathName !== "/" && pathName !== "/portfolio/") {
      setProjectShowing(true);
      setCurrentProject(pathName.slice(1));
    }
    // return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleMobileMenu = useCallback(
    () => setShowMobileMenu((prev) => !prev),
    []
  );

  const toggleProject = useCallback(
    (projectName) => {
      if (projectShowing && projectName === `${hostName}contact`) {
        setProjectShowing(false);
        setTimeout(() => {
          setCurrentProject(`${hostName}contact`);
          setProjectShowing(true);
        }, 600);
        return;
      }
      if (projectShowing) {
        setProjectShowing(false);
      } else if (projectName !== "nothing") {
        setCurrentProject(`${hostName}${projectName}`);
        setProjectShowing(true);
      }
    },
    [projectShowing, hostName]
  );

  const scrollTop = useCallback(() => {
    projectContainerRef.current?.scrollTo({
      top: projectContainerRef.current.offsetTop,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="App">
      {/* Mobile Navigation */}
      <TopBanner />
      {/* <div className={showMobileMenu ? "nav nav--show-mobile" : "nav"}>
        <button
          className="hamburger__button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 19.49 19.49">
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
        </button>
        <div className="nav__logo">
          <Logo />
        </div>
        <div className="nav__menu" onClick={() => toggleProject("nothing")}>
          <ul className="nav__menu-item">
            <li>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li>
              <Link
                to={`/${hostName}contact`}
                onClick={() => toggleProject("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div className="app-body"> */}
      {/* <div className="nav__logo nav__logo--mobile">
          <Logo />
        </div> */}
      <button
        className="hamburger__button"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg viewBox="0 0 25 21.33">
          <rect width="25" height="2.56" />
          <rect y="9.39" width="25" height="2.56" />
          <rect y="18.77" width="25" height="2.56" />
        </svg>
      </button>
      <h2 className="app-body__projects" aria-label="Projects section">
        <span className="title-symbols" aria-hidden="true">
          ◆
        </span>
        <span className="title-text">PROJECTS</span>
        <span className="title-symbols" aria-hidden="true">
          ◆
        </span>
      </h2>
      <div className="app-body">
        {projectData.map(({ key, title, Logo }) => (
          <Link
            key={key}
            className="app-body__block"
            to={`/${hostName}${key}`}
            onClick={() => toggleProject(key)}
          >
            {Logo}
            <div className="app-body__title">{title}</div>
          </Link>
        ))}
      </div>
      <Project
        className={
          projectShowing ? "project project--show" : "project project--hide"
        }
        currentProject={currentProject}
        toggleProject={toggleProject}
        scrollTop={scrollTop}
        projectRef={projectContainerRef}
        hostName={hostName}
      />
    </div>
  );
}

export default App;
