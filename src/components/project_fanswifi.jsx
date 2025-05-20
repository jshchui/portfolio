import ImgHomescreen from "./../assets/fanswifi/homescreen.JPG";
import ImgCustomer from "./../assets/fanswifi/customer.JPG";
import ImgProduct from "./../assets/fanswifi/product.JPG";
import ImgWhitelabeling from "./../assets/fanswifi/whitelabeling.JPG";
import ImgWhois from "./../assets/fanswifi/whois.JPG";

export default function ProjectFanswifi() {
  return (
    <div className="project__content">
      <h1 className="project__title">Fanswifi</h1>
      <div className="project__eyebrow-container">
        <p className="project__eyebrow">
          <span className="project__eyebrow-symbol">◆</span>MY ROLE: WEB DESIGN
          x DEVELOPMENT <span className="project__eyebrow-symbol">◆</span>
        </p>
        <p className="project__eyebrow">
          <span className="project__eyebrow-symbol">◆</span>TECH: PHOTOSHOP x
          ILLUSTRATOR x HTML/CSS x JAVASCRIPT
          <span className="project__eyebrow-symbol">◆</span>
        </p>
        <p className="project__eyebrow">
          <span className="project__eyebrow-symbol">◆</span>PROJECT: WEBSITE{" "}
          <span className="project__eyebrow-symbol">◆</span>
        </p>
        <p className="project__eyebrow">
          <span className="project__eyebrow-symbol">◆</span>LINK:{" "}
          <a
            href="https://github.com/jshchui/fwnext"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>{" "}
          <span className="project__eyebrow-symbol">◆</span>
        </p>
      </div>
      <p>
        Fanswifi is a social, wifi hotspot platform with built in analytics for
        market insight, allowing their clients to gather valuable insights about
        their customers.
      </p>

      <p>
        For their exhibition in Singapore, I redesigned and developed their
        website to clearly articulate business values to their clients.
      </p>

      <div className="project__divider">❋</div>

      <img
        className="project__image"
        src={ImgHomescreen}
        alt="Fanswifi Homepage"
      />

      <img className="project__image" src={ImgWhois} alt="Fanswifi Audience" />
      <img
        className="project__image"
        src={ImgProduct}
        alt="Fanswifi Instructions"
      />
      <img
        className="project__image"
        src={ImgWhitelabeling}
        alt="Fanswifi White Labeling"
      />
      <img
        className="project__image"
        src={ImgCustomer}
        alt="Fanswifi Customers"
      />
    </div>
  );
}
