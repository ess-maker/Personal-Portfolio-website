import React, { Suspense, useEffect, useState } from 'react';
import styles from '../style';
import Inbutton from './Inbutton';
import assets from '../assets/imges';
import Loding from './Loding';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleProjectClick = () => {
    // Scroll to the project section
    const projectSection = document.getElementById('projectSection');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<Loding />}>
      <div
      id='home'
        className={`${styles.flexBetween} px-14 py-10 lg:py-24 mt-10 lg:mt-0 lg:px-20 flex-col-reverse gap-20 lg:flex-row`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? '0' : '20px'})`,
          transition: 'opacity 1s ease-in, transform 0.5s ease-out',
        }}
      >
        <div>
          <h1 className={`${styles.heading1} dark:text-white mb-2`}>
            Hi 👋, I'm <span className="underline">Hamza</span>
          </h1>
          <p className={`${styles.Body1} text-Gray_600 dark:text-white max-w-3xl my-10`}>
            Coding user interfaces has never been just a job for me; instead, it's a constant source
            of challenges that drive me to grow and learn. It has transformed me into an individual
            who is always eager to explore and adopt new technologies.
          </p>
          <div className="inline-flex gap-4">
            <Inbutton name="Download CV" 
            link = "https://drive.google.com/file/d/1Z96tZvmCF6sL7BmNwIbhwITOiQul49em/view?usp=sharing" />
            <Inbutton name="See My Project" onClick={handleProjectClick} styles = "!bg-transparent !text-xl !font-bold text-Gray_Dark_Default underline" />
          </div>
        </div>
        <div className="w-72 h-80 dark:bg-gray_dark_200  bg-[#E5E7EB] relative">
          <img
            src={assets.Pic}
            alt="myimg"
            className="absolute hover:right-0 hover:bottom-0 duration-500 cursor-pointer ease-linear  right-10 w-[18rem] object-cover h-80 bottom-10"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;