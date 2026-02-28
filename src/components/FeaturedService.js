import { useTranslation } from 'react-i18next';
import FeaturedServiceBlock from './FeaturedServiceBlock';
import RevealSection from './RevealSection';

const FeaturedService = () => {
  const { t } = useTranslation();

  const services = [
    {
      label: t('featuredService.label'),
      title: t('featuredService.title'),
      description: t('featuredService.description'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services',
      image: '/bmwx6.jpeg',
      imageAlt: t('featuredService.imageAlt'),
      imagePosition: 'right',
    },
    {
      label: t('featuredService.label2', 'Naše usluge'),
      title: t('featuredService.title2', 'Virtuelne Table'),
      description: t('featuredService.description2', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services/virtual-table',
      image: '/virtual.jpg',
      imageAlt: t('featuredService.imageAlt2', 'Virtuelne table'),
      imagePosition: 'left',
    },
    {
      label: t('featuredService.label3', 'Naše usluge'),
      title: t('featuredService.title3', 'Multimedija'),
      description: t('featuredService.description3', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services/multimedia',
      image: '/multimedia.jpg',
      imageAlt: t('featuredService.imageAlt3', 'Multimedija'),
      imagePosition: 'right',
    },
    {
      label: t('featuredService.label4', 'Naše usluge'),
      title: t('featuredService.title4', 'Osvjetljenje'),
      description: t('featuredService.description4', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services/osvjetljenje',
      image: '/lighting.jpg',
      imageAlt: t('featuredService.imageAlt4', 'Osvjetljenje'),
      imagePosition: 'left',
    },
    {
      label: t('featuredService.label5', 'Naše usluge'),
      title: t('featuredService.title5', 'Retrofiti i ugradnje'),
      description: t('featuredService.description5', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services/retrofit',
      image: '/retrofit.jpeg',
      imageAlt: t('featuredService.imageAlt5', 'Retrofiti i ugradnje'),
      imagePosition: 'right',
    },
    {
      label: t('featuredService.label6', 'Naše usluge'),
      title: t('featuredService.title6', 'Konverzija sistema'),
      description: t('featuredService.description6', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services/konverzija-sistema',
      image: '/system.jpeg',
      imageAlt: t('featuredService.imageAlt6', 'Konverzija sistema'),
      imagePosition: 'left',
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <RevealSection
          key={index}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={0}
        >
          <FeaturedServiceBlock {...service} />
        </RevealSection>
      ))}
    </>
  );
};

export default FeaturedService;