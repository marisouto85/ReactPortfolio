import 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <img 
                    src="https://via.placeholder.com/300" 
                    alt="About me" 
                    className="about-image" 
                />
                <p>
                    Hello! I&apos;m a passionate Front End Developer who loves creating beautiful and functional web experiences.
                    I specialize in React, CSS, and modern web technologies.
                </p>
            </div>
        </section>
    );
};

export default About;
