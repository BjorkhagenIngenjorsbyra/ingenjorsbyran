import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the state so it doesn't scroll again on re-renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Index;
