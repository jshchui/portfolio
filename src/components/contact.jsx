import ProfileImg from "./../assets/me.png";
import Resume from "./../assets/resume.pdf";

export default function ContactPage() {
  return (
    <div className="project__content">
      <img className="profile-img" src={ProfileImg} alt="Jackie" />
      <p>
        I am Front-end Developer and a design student graduate from Simon Fraser
        University Majoring in the School of Interactive Arts and Technology.
      </p>

      <p>
        Outside of design, I enjoy wondering why I lost my last League of
        Legends game and browsing about new technology, games, and creative
        designs .
      </p>

      <p>
        If you would like to collaborate or just have a chat, feel free to
        contact my E-mail or Phone!
      </p>
      <p>E-mail: jshchui@gmail.com</p>
      <p>Phone: 778-926-5883</p>
      <a
        className="project__button project__button--contact"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        className="project__button project__button--contact"
        href="https://github.com/jshchui"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}
