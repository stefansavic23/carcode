import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';

const LANGUAGES = [
  { code: 'sr', label: 'SR' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (_, newLang) => {
    if (newLang !== null) {
      i18n.changeLanguage(newLang);
    }
  };

  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'sr';

  return (
    <Box sx={{ ml: { xs: 0, md: 2 }, padding: "10px" }}>
      <ToggleButtonGroup
        value={currentLang}
        exclusive
        onChange={handleChange}
        size="small"
        aria-label="Language"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          '& .MuiToggleButton-root': {
            color: 'text.secondary',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            px: 1.5,
            py: 0.5,
            fontSize: '0.875rem',
            fontWeight: 600,
            '&.Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'background.default',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            },
            '&:hover': {
              backgroundColor: 'rgba(0, 206, 209, 0.15)',
              color: 'primary.main',
            },
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <ToggleButton
            key={lang.code}
            value={lang.code}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
