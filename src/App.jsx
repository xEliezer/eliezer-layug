import { useEffect } from 'react';
import './App.css'
import gsap  from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis'



const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
      lerp: 0.07, // Adjusts scrolling speed (0 = instant, 1 = no smoothing)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Start Lenis scroll
    lenis.start();

    return () => {
      lenis.stop(); // Cleanup when component unmounts
    };
  }, []);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-100 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
    
  )
  
}

export default App;
