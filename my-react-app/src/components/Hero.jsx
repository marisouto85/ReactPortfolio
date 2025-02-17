import 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="box">
      <div className="content">
        <img src="./src/pictures/computerimage.jpg" alt="Computer" className="w-1/2 mb-4" />
        <h1 className="text-5xl mb-4">Front End Developer</h1>
        <p className="text-2xl">&quot;Great web design without functionality is like a sports car with no engine. &quot;
        – Paul Cookson</p>
      </div>
    </section>
  );
};

export default Hero;
