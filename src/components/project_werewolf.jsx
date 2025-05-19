import Banner from "./../assets/werewolf/banner.jpg";
import Image1 from "./../assets/werewolf/1.JPG";
import Image2 from "./../assets/werewolf/2.JPG";
import Mobile1 from "./../assets/werewolf/m1.JPG";
import Mobile2 from "./../assets/werewolf/m2.JPG";
import Mobile3 from "./../assets/werewolf/m3.JPG";
import Mobile4 from "./../assets/werewolf/m4.JPG";
import Mobile5 from "./../assets/werewolf/m5.JPG";
import Mobile6 from "./../assets/werewolf/m6.JPG";
import Mobile7 from "./../assets/werewolf/m7.JPG";
import Mobile8 from "./../assets/werewolf/m8.JPG";
import Mobile9 from "./../assets/werewolf/m9.JPG";

export default function ProjectWerewolf() {
  return (
    <div className="project__content">
      <h1 className="project__title">Werewolf</h1>
      <img className="project__image" src={Banner} alt="Werewolf Banner" />

      <p>
        Werewolf is a web application adaption to the popular social game
        Werewolf and Mafia.
      </p>

      <p>
        Currently there are 3 roles, the Werewolf, the Seer, and the Villagers.
        Every night each special roledoes an action hidden from players with
        different roles. The werewolves will select a person to kill and the
        seer will identify a role of a player.
      </p>

      <p>
        During day time, the villagers and the seer must do their best to
        uncover the werewolves and lynch themwhile the werewolves must eliminate
        all the villagers.
      </p>

      <div className="project__justify-flex">
        <a
          className="project__button"
          href="https://github.com/jshchui/fwnext"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="project__button"
          href="https://chat-d457d.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site
        </a>
      </div>

      <div className="project__skills-used">
        <h3>Technologies Used</h3>
        <p>ReactJS</p>
        <p>Firebase Realtime Database</p>
        <p>Fireblase Cloud Functions</p>
        <p>Illustrator</p>
      </div>

      <img className="project__image" src={Image1} alt="Werewolf Homescreen" />
      <img className="project__image" src={Image2} alt="Werewolf Gamescreen" />

      <div className="project__mobile-container">
        <img
          className="project__mobile-image"
          src={Mobile1}
          alt="Werewolf Mobile Game Screen"
        />
        <img
          className="project__mobile-image"
          src={Mobile2}
          alt="Werewolf Mobile Player Screen"
        />
        <img
          className="project__mobile-image"
          src={Mobile3}
          alt="Werewolf Mobile Dead Screen"
        />
      </div>

      <div className="project__mobile-container">
        <img
          className="project__mobile-image"
          src={Mobile4}
          alt="Werewolf Villager"
        />
        <img
          className="project__mobile-image"
          src={Mobile5}
          alt="Werewolf Seer"
        />
        <img
          className="project__mobile-image"
          src={Mobile6}
          alt="Werewolf Werewolf"
        />
      </div>

      <div className="project__mobile-container">
        <img
          className="project__mobile-image"
          src={Mobile7}
          alt="Werewolf Lynching"
        />
        <img
          className="project__mobile-image"
          src={Mobile8}
          alt="Werewolf Seer Turn"
        />
        <img
          className="project__mobile-image"
          src={Mobile9}
          alt="Werewolf Turn"
        />
      </div>
    </div>
  );
}
