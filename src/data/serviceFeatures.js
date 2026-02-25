/**
 * Which feature pills show the info (i) icon per service.
 * Index matches the features array in translation (services.{key}.features).
 */
export const featuresWithInfo = {
  navigation: [false, false, true],
  multimedia: [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  virtualDashboards: [false, false, false, false, false, false, false, false, false, true, false, false, false, false],
  lighting: [true, true, false, true, true],
  securityComfort: [true, false, false, false, false, false, false, false],
  performance: [false, false, false, false, false, false],
};
