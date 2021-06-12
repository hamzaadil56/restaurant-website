import "./App.css";
import { chefs } from "./data";
import { social } from "./data";
const Chef = () => {
  return (
    <div id="chefs" className="chefs-app">
      <div className="chefs-header">
        <div className="chef-headings">
          <h4>OUR CHEFS</h4>
          <h1>We offer the best ingredients for you</h1>
        </div>
      </div>
      <div className="chefs-container">
        <div className="chefs">
          {chefs.map((chef) => {
            const { id, img, name, desc } = chef;
            return (
              <div className="chef-image-container" key={id}>
                <img className="chef-image" src={img} alt="" />
                <div className="icons">
                  {social.map((socialMedia) => {
                    const { id, url, icon } = socialMedia;
                    return (
                      <a key={id} href={url}>
                        <button>{icon}</button>
                      </a>
                    );
                  })}
                </div>
                <article>
                  <h2>{name}</h2>
                  <p>{desc}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chef;
