import { useTranslation } from 'react-i18next';
import FeaturedServiceBlock from './FeaturedServiceBlock';

const FeaturedService = () => {
  const { t } = useTranslation();

  const services = [
    {
      label: t('featuredService.label'),
      title: t('featuredService.title'),
      description: t('featuredService.description'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services',
      image: '/bmw.jpeg',
      imageAlt: t('featuredService.imageAlt'),
      imagePosition: 'right',
    },
    {
      label: t('featuredService.label2', 'Naše usluge'),
      title: t('featuredService.title2', 'Virtuelne Table'),
      description: t('featuredService.description2', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services',
      image: '/virtual.jpg',
      imageAlt: t('featuredService.imageAlt2', 'Virtuelne table'),
      imagePosition: 'left',
    },
    {
      label: t('featuredService.label3', 'Naše usluge'),
      title: t('featuredService.title3', 'Multimedija'),
      description: t('featuredService.description3', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services',
      image: '/multimedia.jpg',
      imageAlt: t('featuredService.imageAlt3', 'Multimedija'),
      imagePosition: 'right',
    },
    {
      label: t('featuredService.label4', 'Naše usluge'),
      title: t('featuredService.title4', 'Osvjetljenje'),
      description: t('featuredService.description4', 'Aktivacija i konfiguracija virtuelnih tabla, digitalnih prikaza i head-up display sistema.'),
      buttonText: t('featuredService.button'),
      buttonLink: '/services',
      image: '/lighting.jpg',
      imageAlt: t('featuredService.imageAlt4', 'Osvjetljenje'),
      imagePosition: 'left',
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <FeaturedServiceBlock key={index} {...service} />
      ))}
    </>
  );
};

export default FeaturedService;
