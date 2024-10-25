
import React, { useRef } from 'react';
import Courses from '../components/Courses';
import Experts from '../components/Experts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import News from '../components/News';

const Home = () => {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const expertsRef = useRef(null);
  const coursesRef = useRef(null);
  const newsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar
        onCoursesClick={() => scrollToSection(coursesRef)}
        onAboutUsClick={() => scrollToSection(mainRef)}
        onBlogClick={() => scrollToSection(expertsRef)}
        onNewsClick={() => scrollToSection(newsRef)}
        onContactClick={() => scrollToSection(footerRef)}
      />

      <section ref={headerRef}>
        <Header />
      </section>
      <section ref={mainRef}>
        <MainSection />
      </section>
      <section ref={expertsRef}>
        <Experts />
      </section>
      <section ref={coursesRef}>
        <Courses />
      </section>
      <section ref={newsRef}>
        <News />
      </section>
      <section ref={footerRef}>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
