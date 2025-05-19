import Img1 from "./../assets/packager/IMG1.jpg";
import Img2 from "./../assets/packager/IMG2.jpg";
import Img3 from "./../assets/packager/IMG3.jpg";
import Img4 from "./../assets/packager/IMG4.jpg";

export default function ProjectPackager() {
  return (
    <div className="project__content">
      <h1 className="project__title">Banner Packager</h1>

      <img className="project__image" src={Img1} alt="Packager UI" />
      <p>
        The packager is an app that streamlines the finalization of web banners
        so they can be sent to clients for delivery. The process includes
        minification, renaming, generation of backups (screenshots), and
        validation.
      </p>

      <p>
        At The Bannermen, we create web banners on a daily basis. When all the
        banners are approved and ready to be sent by the client, we have a
        lengthy process we follow to make sure the banners are "packaged" nicely
        before delivery.
      </p>

      <p>The process includes:</p>
      <ul>
        <li>Renaming all banners to a specific naming convention</li>
        <li>Minifying the JavaScript and CSS files</li>
        <li>
          Creating a backup (screenshot) of the final/end frame of the web
          banner
        </li>
        <li>Verifying no unused images remain</li>
        <li>Ensuring image extensions are correct</li>
        <li>Matching banner sizes with the meta tag definitions</li>
      </ul>

      <p>
        Needless to say, this was quite a lengthy process, even for one web
        banner. The volume we deliver could range from a few to hundreds, and
        there were days where packaging took up most of the work day.
      </p>

      <p>
        To save time, I built an app to automate the entire workflow. What used
        to take hours now happens with a single click, completing the process in
        seconds.
      </p>

      <img
        className="project__image"
        src={Img2}
        alt="Banners before packaging"
      />
      <p className="project__image-caption">Banners before packaging</p>

      <img
        className="project__image"
        src={Img3}
        alt="Banners after packaging"
      />
      <p className="project__image-caption">Banners after packaging</p>

      <img
        className="project__image"
        src={Img4}
        alt="Backups generated after packaging"
      />
      <p className="project__image-caption">Backups generated</p>

      <div className="project__justify-flex">
        <a
          className="project__button"
          href="https://github.com/jshchui/packager"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="project__skills-used">
        <h3>Technologies Used</h3>
        <p>Node.js</p>
        <p>Electron</p>
        <p>Socket.io</p>
        <a
          href="https://html2canvas.hertzen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          html2canvas
        </a>
      </div>
    </div>
  );
}
