import ImgControls from "./../assets/nauticalcats/controls.png";
import ImgFallmap from "./../assets/nauticalcats/fall.jpg";
import ImgIcemap from "./../assets/nauticalcats/ice.jpg";
import ImgHomepage from "./../assets/nauticalcats/nauticalhomepage.jpg";
import ImgInstructions from "./../assets/nauticalcats/nauticalhowtoplay.jpg";
import ImgVs from "./../assets/nauticalcats/nauticalvs.jpg";
import ImgWhalemap from "./../assets/nauticalcats/whale.jpg";
// import WebPlayer from './';

export default function ProjectNauticalcats() {
  return (
    <div className="project__content">
      <h1 className="project__title">Nautical Cats</h1>
      <div className="project__eyebrow-container">
        <p className="project__eyebrow">
          MY ROLE: GAME DESIGN x PROTOTYPING x ANIMATION{" "}
        </p>
        <p className="project__eyebrow">
          TECH: ILLUSTRATOR x PHOTOSHOP x UNITY
        </p>
        <p className="project__eyebrow">PROJECT: GAME DEVELOPMENT</p>
      </div>
      <img
        className="project__image"
        src={ImgHomepage}
        alt="Nautical Cats Homescreen"
      />
      <p>
        Nautical Cats is a 2-D platformer player vs player (PVP) capture the
        fish game. The essential idea behind the game is for players to collect
        more Fish than their opponents before the time runs out.
      </p>

      <h2>Role</h2>
      <p>
        In Nautical Cats, I was in charge of designing the mechanics of the
        game, along with the characters and the maps. I was also in charge of
        coding a early prototype and also did all the animations in the game.
      </p>

      <h2>Overview</h2>
      <p>
        The initial task for us was to create a fun and intriguing game along
        with a proper core loop (chain of actions that players does in the
        game), Smart Depth (mechanics and strategy within the game), and UI
        (User Interface).
      </p>
      <p>
        Due to limited time and resources, our team decided to do a multiplayer
        game because games are just more fun with friends and other people.
        Playing with friends creates tension, competition, and most importantly,
        laughter.
      </p>

      <h2>Basic Instructions</h2>
      <div className="project__image-container">
        <img
          className="project__image project__image--half"
          src={ImgInstructions}
          alt="Nautical Cats Instructions"
        />
        <img
          className="project__image project__image--half"
          src={ImgVs}
          alt="Nautical Cats Versus Screen"
        />
      </div>

      <p>
        Each player starts off with 3 fishes in their chest and one fish will
        spawn in the middle of the map, where the players would have to battle
        it out and sabotage enemy player's chest in order to bring back more
        fishes to their own respective chests.
      </p>

      <h2>Core Loop and Smart Depths</h2>
      <p>
        Core loop in nautical cats consist of players obtaining fish, storing
        fish, and attacking/defending from the enemy. Strategy involves
        effectively using one of the four different cats in the game.
      </p>
      <p>Fat Cat: Slow and heavy, but has high health and a great throw</p>
      <p>Fast Cat: Weak and low health but runs fast</p>
      <p>Skinny Cat: Average health and speed but has a very high jump</p>
      <p>
        Stout Cat: Low speed, throw distance, and health, but boast a strong
        attack
      </p>

      <h2>Controls</h2>
      <img
        className="project__image"
        src={ImgControls}
        alt="Nautical Cats Controls"
      />

      <h2>Maps</h2>
      <img
        className="project__image"
        src={ImgWhalemap}
        alt="Nautical Cats Whale Map"
      />
      <p className="project__image-caption">
        Whale Island: Consist of a whale that dives or spouts at random times
      </p>

      <img
        className="project__image"
        src={ImgFallmap}
        alt="Nautical Cats Waterfall Map"
      />
      <p className="project__image-caption">
        Nautical Falls: Consist of a river that actively tries to pull you down
        in the depths.
      </p>

      <img
        className="project__image"
        src={ImgIcemap}
        alt="Nautical Cats Ice Map"
      />
      <p className="project__image-caption">
        Icy Cliffs: Extra Slippery with raining icicles!
      </p>

      {/* <p>
        You can <a href="/webplayer/webplayer.html">try the game here.</a>{" "}
        However, the controls are different on PC and it unfortunately does not
        work on chrome. The web version currently supports only 2 players and
        will require a numpad.
      </p> */}

      <div className="project__justify-flex">
        <div className="project__collaborators">
          <p>Controls P1:</p>
          <p>Jump: W</p>
          <p>Move Left: A</p>
          <p>Move Right: D</p>
          <p>Pick Up Fish: G</p>
          <p>Attack: H</p>
        </div>

        <div className="project__skills-used">
          <p>Controls P2:</p>
          <p>Jump: Up Arrow</p>
          <p>Move Left: Left Arrow</p>
          <p>Move Right: Right Arrow</p>
          <p>Pick Up Fish: Numpad 4</p>
          <p>Attack: Numpad 5</p>
        </div>
      </div>

      {/* <div className="project__justify-flex">
        <div className="project__collaborators">
          <h3>Collaborators</h3>
          <p>Bobby Soetarto</p>
          <p>Louie Liu</p>
          <p>Janelynn Chan</p>
        </div>

        <div className="project__skills-used">
          <h3>Technologies Used</h3>
          <p>Illustrator</p>
          <p>Photoshop</p>
          <p>Unity</p>
        </div>
      </div> */}
    </div>
  );
}
