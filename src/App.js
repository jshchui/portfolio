import React, { Component } from 'react';
import './App.css';
import TriangleLogo from './assets/triangle';
import FanswifiLogo from './assets/fanswifi';
import PackagerLogo from './assets/packager';
import WerewolfLogo from './assets/werewolf';
import CodedrillzLogo from './assets/codedrillz';
import IndigoLogo from './assets/indigo';
import NauticalLogo from './assets/nautical';
import HaikugeneratorLogo from './assets/haikugenerator';
import Project from './components/projects';
import Resume from './assets/resume.pdf';
import Logo from './components/logo';

import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.projectContainerRef = React.createRef();

    this.state = {
      projectShowing: false,
      currentProject: '',
      showMobileMenu: false,
      currentLightBoxImage: '',
      hostName: '',
    }

    this.toggleProject = this.toggleProject.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.toggleLightBox = this.toggleLightBox.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    const pathName = window && window.location && window.location.pathname;
    const isLive = pathName.includes('portfolio');
    if (isLive) this.setState({ hostName: 'portfolio/' });
    if (pathName !== '/' && pathName !== '/portfolio/') {
      this.setState({
        projectShowing: true,
        currentProject: pathName.substr(1)
      })
    }
  }

  componentWillUmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    let clickingClass = e && e.target && e.target.className;
    if(clickingClass && (typeof clickingClass === 'string') && clickingClass.includes('project__image')) {
      this.toggleLightBox(e);
    }
  }

  toggleProject(projectName) {
    if (this.state.projectShowing && projectName === `${this.props.hostName}contact`) {
      this.setState({projectShowing: false});
      setTimeout(() => {
        this.setState({
          currentProject: `${this.props.hostName}contact`,
          projectShowing: true
        })
      }, 600);
    } if (this.state.projectShowing) {
      this.setState({projectShowing: false});
    } else {
      if (projectName !== 'nothing') {
        this.setState({
          currentProject: `${this.state.hostName}${projectName}`,
          projectShowing: true
        });
      }
    }
  }

  toggleMobileMenu() {
    if(this.state.showMobileMenu) {
      this.setState({ showMobileMenu: false });
    } else {
      this.setState({ showMobileMenu: true });
    }
  }

  scrollTop() {
    this.projectContainerRef.current.scrollTo({
      top: this.projectContainerRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  toggleLightBox(e) {
    const imageLink = e && e.target && e.target.src;
    if(this.state.currentLightBoxImage) {
      this.setState({ currentLightBoxImage: '' });
    } else {
      this.setState({ currentLightBoxImage: `${imageLink}` });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div onClick={() => this.toggleLightBox()} className={this.state.currentLightBoxImage ? 'lightbox lightbox--show' : 'lightbox'}>
            <div className="lightbox__content">
              <img src={this.state.currentLightBoxImage} alt="Lightbox placeholder"/>
            </div>
            <p>click anywhere to close</p>
          </div>
          <div className={this.state.showMobileMenu ? 'nav nav--show-mobile' : 'nav'}>
            <button className="hamburger__button" onClick={() => this.toggleMobileMenu()}>
              <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 19.49 19.49">
                <rect x="947.17" y="540.36" width="25" height="2.56" transform="translate(-1051.84 305.33) rotate(-45)"/>
                <rect x="958.39" y="529.14" width="2.56" height="25" transform="translate(-1051.84 305.33) rotate(-45)"/>
              </svg>
            </button>
            <div className="nav__logo"><Logo /></div>
            <div className="nav__menu" onClick={() => this.toggleProject('nothing')}>
              <ul className="nav__menu-item">
                <li><a href={Resume} target="_blank">Resume</a></li>
                <li>
                  <Link to={`/${this.state.hostName}contact`} onClick={() => this.toggleProject('contact')}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="app-body">
            <div className="nav__logo nav__logo--mobile"><Logo /></div>
            <button className="hamburger__button" onClick={() => this.toggleMobileMenu()}>
              <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 25 21.33">
                <rect width="25" height="2.56"/>
                <rect y="9.39" width="25" height="2.56"/
                ><rect y="18.77" width="25" height="2.56"/>
              </svg>
            </button>

            <Link className="app-body__block" to={`/${this.state.hostName}packager`} onClick={() => this.toggleProject('packager')}>
              <PackagerLogo className='App-logo' ariaLabel='logo' />
              {/* <div style={{maxWidth: '200px', fontSize: '13px'}}>Website created for their exhibition in Singapore to clearly articulate Fanswifi's business values</div> */}
              <div className="app-body__title">Packager</div>
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}fanswifi`} onClick={() => this.toggleProject('fanswifi')}>
              <FanswifiLogo className='App-logo' ariaLabel='logo' />
              {/* <div style={{maxWidth: '200px', fontSize: '13px'}}>Website created for their exhibition in Singapore to clearly articulate Fanswifi's business values</div> */}
              <div className="app-body__title">Fanswifi</div>
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}haikugenerator`} onClick={() => this.toggleProject('haikugenerator')}>
              <HaikugeneratorLogo className='App-logo' ariaLabel='logo' />
              <div className="app-body__title">Haiku Generator</div>
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}werewolf`} onClick={() => this.toggleProject('werewolf')}>
              <WerewolfLogo className='App-logo' ariaLabel='logo' />
              <div className="app-body__title">Werewolf</div>  
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}triangle`} onClick={() => this.toggleProject('triangle')}>
              <TriangleLogo className='App-logo' ariaLabel='logo' />
              <div className="app-body__title">Triangle</div>  
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}codedrillz`} onClick={() => this.toggleProject('codedrillz')}>
              <CodedrillzLogo className='App-logo' ariaLabel='logo' />
              <div className="app-body__title">Codedrillz</div>
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}rediscoverindigo`} onClick={() => this.toggleProject('rediscoverindigo')}>
              <IndigoLogo className='App-logo' ariaLabel='logo' />
              <div className="app-body__title">Rediscover Indigo</div>
            </Link>

            <Link className="app-body__block" to={`/${this.state.hostName}nauticalcats`} onClick={() => this.toggleProject('nauticalcats')}>
              <div className="css-logo-animation-hack">
                {/* I need a hack here because I cannot transform rotate and translate seperately */}
                <NauticalLogo className='App-logo' ariaLabel='logo' />
              </div>
              <div className="app-body__title">Nautical Cats</div>
            </Link>
          </div>

          <Project
            className={this.state.projectShowing ? 'project project--show' : 'project project--hide'}
            currentProject={this.state.currentProject}
            toggleProject={this.toggleProject}
            scrollTop={this.scrollTop}
            projectRef={this.projectContainerRef}
            hostName={this.state.hostName}
          />
        </div>
      </Router>
    );
  }
}

export default App;
