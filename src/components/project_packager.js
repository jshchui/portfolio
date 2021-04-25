import React, { Component } from 'react';
import Img1 from './../assets/packager/IMG1.jpg';
import Img2 from './../assets/packager/IMG2.jpg';
import Img3 from './../assets/packager/IMG3.jpg';
import Img4 from './../assets/packager/IMG4.jpg';

class ProjectPackager extends Component {
	render() {
		return (
      <div className="project__content">
        <h1 className="project__title">Banner Packager</h1>
        <img className="project__image" src={Img1} alt="Packager_UI" />
        <p>The packager is an app that streamlines the finalization of web banners so they could be sent to clients for delivery. The process includes minification, renaming, generation of backups (screenshots), and validation.</p>
        <p>
          At The Bannermen, we create web banners on a daily basis. When all the banners are approved and ready to be sent by the client, we have a lengthy process we do to make sure the banners are "packaged" nicely when sent to the clients.
        </p>
        <p>The process includes:</p>
        <ul>
          <li>Renaming all banners to a specific naming convention</li>
          <li>Minifying the javascript and css files</li>
          <li>Create backup (screenshot) of the final/end frame of the web banner</li>
          <li>Making sure there are no unused images</li>
          <li>Making sure the image extensions are correct</li>
          <li>Making sure banner sizes matches with size in the meta tags</li>
        </ul>

        <p>Needless to say, this was quite a lengthy process even for one webbanner. The amount of banners we deliver to clients could range from a few to hundreds. There were days where the packaging process took up most of the work day.</p>

        <p>To save time, I decided to create an app that would automate this process and will complete the whole process within a click of a button. Thus the packager was born. All the process above can now be accomplished just clicking a button. What use to take up to hours can now be completed within seconds!</p>

        <img className="project__image" src={Img2} alt="Banners before packaging" />
        <p className="project__image-caption">Banners before packaging</p>

        <img className="project__image" src={Img3} alt="Banners after packaging" />
        <p className="project__image-caption">Banners after packaging</p>

        <img className="project__image" src={Img4} alt="Backups generated after packaging" />
        <p className="project__image-caption">Backups generated</p>
        
        <div className="project__justify-flex">
          <a className="project__button" href="https://github.com/jshchui/packager" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>

        <div className="project__skills-used">
          <h3>Technologies Used</h3>
          <p>Node JS</p>
          <p>Electron</p>
          <p>Socket.io</p>
          <a href="https://html2canvas.hertzen.com/">html2canvas</a>
        </div>
      </div>
		)
	}
}

export default ProjectPackager;