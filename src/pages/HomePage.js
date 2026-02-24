import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedService from '../components/FeaturedService';
import About from '../components/About';
import Contact from '../components/Contact';
import QandA from '../components/QandA';
import Footer from '../components/Footer';
import { faqCategories } from '../data/faq';

const SCROLL_DELAY_MS = 150;

const HomePage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const faqCategoriesTranslated = useMemo(
    () =>
      faqCategories.map((cat) => ({
        categoryLabel: t(cat.categoryKey),
        questions: cat.questions.map((q) => ({
          question: t(q.questionKey),
          answer: t(q.answerKey),
        })),
      })),
    [t]
  );

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;

    const scrollToSection = () => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timer = setTimeout(scrollToSection, SCROLL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar position="fixed" />
      <Hero />
      <FeaturedService />
      <About />
      <Contact />
      <QandA
        label={t('faq.label')}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        categories={faqCategoriesTranslated}
      />
      <Footer />
    </Box>
  );
};

export default HomePage;
