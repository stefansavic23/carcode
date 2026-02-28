import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedService from '../components/FeaturedService';
import Contact from '../components/Contact';
import QandA from '../components/QandA';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import RevealSection from '../components/RevealSection';
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
      <RevealSection direction="bottom" threshold={0.06}>
        <QandA
          label={t('faq.label')}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          categories={faqCategoriesTranslated}
        />
      </RevealSection>
      <RevealSection direction="bottom" threshold={0.06} delay={0.05}>
        <ReviewsSection />
      </RevealSection>
      <RevealSection direction="bottom" threshold={0.06} delay={0.05}>
        <Contact />
      </RevealSection>
      <Footer />
    </Box>
  );
};

export default HomePage;
