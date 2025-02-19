import 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="box">
      <video className="background-video" autoPlay loop muted>
        <source src="./src/pictures/videoframe_292.png" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="text-5xl mb-4">Hi, there... I am a Front End Developer</h1>
        <p className="text-2xl">
          &quot;Great web design without functionality is like a sports car with no engine.&quot;
          – Paul Cookson
        </p>
      </div>
    </section>
  );
};

export default Hero;
