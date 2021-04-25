import React, { Component } from 'react';
import ProjectHaikugenerator from './project_haikugenerator';
import ProjectTriangle from './project_triangle';
import ProjectWerewolf from './project_werewolf';
import ProjectFanswifi from './project_fanswifi';
import ProjectCodedrillz from './project_codedrillz';
import ProjectNauticalcats from './project_nauticalcats';
import ProjectRediscoverindigo from './project_rediscoverindigo';
import ProjectPackager from './project_packager';
import ContactPage from './contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Project1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.chooseProject = this.chooseProject.bind(this);
  }

  chooseProject(projectNumber) {

    switch(projectNumber) {
      case `${this.props.hostName}packager`:
        return <ProjectPackager />
      case `${this.props.hostName}haikugenerator`:
        return <ProjectHaikugenerator />
      case `${this.props.hostName}werewolf`:
        return <ProjectWerewolf />
      case `${this.props.hostName}triangle`:
        return <ProjectTriangle />
      case `${this.props.hostName}fanswifi`:
        return <ProjectFanswifi />
      case `${this.props.hostName}codedrillz`:
        return <ProjectCodedrillz />
      case `${this.props.hostName}nauticalcats`:
        return <ProjectNauticalcats />
      case `${this.props.hostName}rediscoverindigo`:
        return <ProjectRediscoverindigo />
      case `${this.props.hostName}contact`:
        return <ContactPage routeName={this.props.currentProject}/>
      default:
        return <div>Nothing</div>
    }
  }

	render() {
		return (
      <div className={this.props.className} ref={this.props.projectRef}>
        <Link to={`/${this.props.hostName}`} className="project__close-button" onClick={this.props.toggleProject}>
          <div className="project__close-button">
            <svg id="Layer_1" className="project__close-button-svg" data-name="Layer 1" viewBox="0 0 19.49 19.49">
              <rect x="947.17" y="540.36" width="25" height="2.56" transform="translate(-1051.84 305.33) rotate(-45)"/>
              <rect x="958.39" y="529.14" width="2.56" height="25" transform="translate(-1051.84 305.33) rotate(-45)"/>
            </svg>
          </div>
        </Link>
        {this.chooseProject(this.props.currentProject)}
        {
          this.props.currentProject !== 'contact' ?
          <button className="project__scroll-top" onClick={this.props.scrollTop}>
            <svg id="Layer_1" viewBox="0 0 23.49 13.56">
              <polygon points="13.56 1.81 11.74 0 9.93 1.81 0 11.74 1.81 13.56 11.74 3.62 21.68 13.56 23.49 11.74 13.56 1.81"/>
            </svg>
          </button> : null
        }
      </div>
		)
	}
}

export default Project1;