import "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src="./src/pictures/Maria-profile.png"
          alt="About me"
          className="about-image"
        />
        <p>
          &quot;Hi! I’m Maria from Spain and currently living in Germany. I’m on an
          exciting journey of learning coding, diving into the world of tech and
          development. It&apos;s been an amazing experience combining my passion for
          problem-solving with the new skills I&apos;m gaining along the way!&quot;
        </p>
      </div>
    </section>
  );
};

export default About;
