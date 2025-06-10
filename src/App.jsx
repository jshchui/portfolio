import { useState, useCallback, useEffect, useRef } from "react";
import "./App.scss";
import PackagerLogo from "./assets/packager";
import TriangleLogo from "./assets/triangle";
import WerewolfLogo from "./assets/werewolf";
import IndigoLogo from "./assets/indigo";
import FanswifiLogo from "./assets/fanswifi";
import Project from "./components/Project/projects";
import Logo from "./components/logo";

import { TopBanner } from "./components/TopBanner/TopBanner";
import { Footer } from "./components/Footer/Footer";
import MouseTransition from "./components/MouseTransition/MouseTransition";

import Resume from "./assets/resume.pdf";

import { Routes, Route, Link } from "react-router";
import NauticalLogo from "./assets/nautical";
import MicronLogo from "./assets/micron";

function App() {
  const projectContainerRef = useRef(null);

  const [hostName, setHostName] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPageKey, setCurrentPageKey] = useState("A");

  // State to control the visibility and data for the transition
  const [transitionState, setTransitionState] = useState({
    isActive: false,
    clickX: 0,
    clickY: 0,
    nextPage: null,
  });

  const [projectShowing, setProjectShowing] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  console.log("hostName: ", hostName);

  const projectData = [
    {
      key: "micron",
      title: "Micron",
      label: "Website",
      Logo: <MicronLogo aria-label="logo" />,
    },
    {
      key: "packager",
      title: "Packager",
      label: "App",
      Logo: <PackagerLogo aria-label="logo" />,
    },
    {
      key: "fanswifi",
      title: "Fanswifi",
      label: "Web",
      Logo: <FanswifiLogo aria-label="logo" />,
    },
    // { key: 'haikugenerator', title: 'Haiku Generator', Logo: HaikugeneratorLogo },
    {
      key: "werewolf",
      title: "Werewolf",
      label: "Web",
      Logo: <WerewolfLogo aria-label="logo" />,
    },
    {
      key: "triangle",
      title: "Triangle",
      label: "Product Dsgn",
      Logo: <TriangleLogo aria-label="logo" />,
    },
    // { key: 'codedrillz', title: 'Codedrillz', Logo: CodedrillzLogo },
    {
      key: "rediscoverindigo",
      title: "Rediscover Indigo",
      label: "UX / UI Dsgn",
      Logo: <IndigoLogo aria-label="logo" />,
    },
    {
      key: "nauticalcats",
      title: "Nautical Cats",
      label: "Game Dsgn",
      Logo: <NauticalLogo aria-label="logo" />,
    },
  ];

  // const handlePageSwapNeeded = useCallback(() => {
  //   setCurrentPageKey(transitionState.nextPage);
  // }, [transitionState.nextPage]);

  const handlePageSwapNeeded = useCallback(() => {
    if (!transitionState.nextPage) {
      setProjectShowing(false);
      return;
    }
    setCurrentProject(`${hostName}${transitionState.nextPage}`);
    setProjectShowing(true);
    // setView(transitionState.nextView);
    // setActiveProject(transitionState.nextActiveProject);
  }, [transitionState.nextPage, hostName]);

  // Callback for when the entire transition (including reveal) is finished
  const handleTransitionComplete = useCallback(() => {
    setTransitionState({
      isActive: false,
      clickX: 0,
      clickY: 0,
      nextPage: null,
    });
  }, []);
  console.log("hostName: ", hostName);

  useEffect(() => {
    // this is for lightbox
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
    (projectName, event) => {
      // event.preventDefault();
      console.log("projectName: ", projectName);
      console.log("event: ", event);
      if (projectShowing && projectName === `${hostName}contact`) {
        setProjectShowing(false);
        setTimeout(() => {
          setCurrentProject(`${hostName}contact`);
          setProjectShowing(true);
        }, 600);
        return;
      }
      if (projectShowing) {
        // setProjectShowing(false);
        setTransitionState({
          isActive: true,
          clickX: event.clientX,
          clickY: event.clientY,
          nextPage: null,
        });
      } else if (projectName !== "nothing") {
        // setCurrentProject(`${hostName}${projectName}`);
        // setProjectShowing(true);
        setTransitionState({
          isActive: true,
          clickX: event.clientX,
          clickY: event.clientY,
          nextPage: projectName,
        });
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
    <div className={`App ${projectShowing ? "App--hide-scroll" : ""} theme-1`}>
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
      <div className="app-body__selected-works">
        <p className="app-body__selected-works-title">SELECTED WORKS</p>
      </div>
      <div className="app-body">
        {projectData.map(({ key, title, label, Logo }) => (
          <Link
            key={key}
            className="app-body__block"
            to={`/${hostName}${key}`}
            onClick={(e) => toggleProject(key, e)}
          >
            <div className="app-body__logo">{Logo}</div>
            <div className="app-body__title">
              <span>{title}</span>
              <span className="app-body__label">{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer hostName={hostName} toggleProject={toggleProject} />
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
      {transitionState.isActive && (
        <MouseTransition
          clickX={transitionState.clickX}
          clickY={transitionState.clickY}
          onPageSwapNeeded={handlePageSwapNeeded}
          onTransitionEnd={handleTransitionComplete}
        />
      )}
    </div>
  );
}

export default App;
