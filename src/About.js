import { about_images } from "./data";
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-video-container">
        <section className="about">
          <h4>About US</h4>
          <article>
            <h2>We Leave A Delicious Memory For You</h2>
            <p>
              Super Cafe is one of the best restaurant HTML CSS templates with
              ReactJS. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, unde accusamus quam accusantium voluptate dignissimos
              nam iste voluptas pariatur dolore?
            </p>
            <div className="about-images">
              {about_images.map((item) => {
                const { id, img } = item;
                return <img key={id} src={img} />;
              })}
            </div>
          </article>
        </section>
        <section className="video">
          <article>
            <iframe
              //   width="560"
              //   height="315"
              className="video-iframe"
              src="https://www.youtube.com/embed/hNnW9PzzkdI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
