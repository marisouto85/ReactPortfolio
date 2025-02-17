import 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-4">Hi, I&apos;m [Your Name]</h1>
        <p className="text-2xl">A Frontend Developer</p>
      </div>
    </section>
  );
};

export default Hero;
