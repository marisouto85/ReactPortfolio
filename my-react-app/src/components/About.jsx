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
          &quot;Hi! I’m Maria from Spain and currently living in Germany. I’m on
          an exciting journey of learning coding, diving into the world of tech
          and development. It&apos;s been an amazing experience combining my
          passion for problem-solving with the new skills I&apos;m gaining along
          the way!&quot;
        </p>
        <p>
          {" "}
          Love travelling, it can open the do the door to new experiences,
          offering a fresh perspective on life. Exploring different cultures,
          landscapes, and histories broadens the mind and fosters empathy for
          others. Every journey is an adventure that leaves you with stories to
          tell and memories that last a lifetime.
        </p>
        <p>
          {" "}
          Also Swimming, for me is a way to experience both freedom and
          tranquility. Gliding through water offers a sense of weightlessness
          and peace, providing a physical and mental escape from the stress of
          daily life. It&apos;s a sport that allows you to connect with nature,
          whether swimming in the open sea or a calm lake, and it also
          strengthens the body, promoting overall health and well-being.
        </p>
        <p>
          Reading traditional literature connects us to the wisdom and stories
          of our ancestors. These texts often explore timeless themes—love,
          honor, struggle, and triumph—allowing us to reflect on the human
          experience across centuries. Whether diving into the works of Homer,
          Shakespeare, or other classical authors, traditional literature opens
          up a world of intellectual and emotional discovery, offering insights
          that resonate through the ages. Together, these passions form a
          balance of exploration, reflection, and personal growth, weaving
          together the joy of adventure, the serenity of nature, and the
          richness of human history.
        </p>
      </div>
    </section>
  );
};

export default About;
