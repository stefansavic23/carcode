import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Collapse,
  useTheme,
} from '@mui/material';

/**
 * Reusable FAQ (Q&A) accordion section.
 * @param {string} label - Small uppercase label above title (e.g. "FAQ")
 * @param {string} title - Main section title
 * @param {string} [subtitle] - Optional description below title
 * @param {Array<{ categoryLabel: string, questions: Array<{ question: string, answer: string }> }>} categories - Categories with question/answer pairs
 */
const QandA = ({ label, title, subtitle, categories }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState({});

  const toggle = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: 'background.default',
        scrollMarginTop: { xs: 56, sm: 64 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          {label && (
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'primary.main',
                mb: 1,
              }}
            >
              {label}
            </Typography>
          )}
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: subtitle ? 1.5 : 0,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1rem' },
                color: 'text.secondary',
                maxWidth: 560,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {categories?.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: categoryIndex < categories.length - 1 ? 4 : 0 }}>
            {category.categoryLabel && (
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                {category.categoryLabel}
              </Typography>
            )}
            <Box
              sx={{
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              {category.questions?.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isOpen = expanded[key];
                return (
                  <Box
                    key={questionIndex}
                    sx={{
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box
                      component="button"
                      onClick={() => toggle(categoryIndex, questionIndex)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                      id={`faq-question-${key}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                        py: 2,
                        px: 0,
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'text.primary',
                        transition: 'background-color 0.2s ease, color 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'action.hover',
                        },
                        '&:focus-visible': {
                          outline: `2px solid ${theme.palette.primary.main}`,
                          outlineOffset: 2,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          transition: 'transform 0.3s ease',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                        aria-hidden
                      >
                        +
                      </Box>
                      <Typography
                        component="span"
                        sx={{
                          flex: 1,
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                    <Collapse
                      in={isOpen}
                      id={`faq-answer-${key}`}
                      role="region"
                      aria-labelledby={`faq-question-${key}`}
                      sx={{
                        '& .MuiCollapse-wrapperInner': {
                          overflow: 'hidden',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          pl: 5,
                          pr: 0,
                          pb: 2,
                          pt: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '0.9rem', sm: '0.95rem' },
                            color: 'text.secondary',
                            lineHeight: 1.7,
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </Collapse>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default QandA;
