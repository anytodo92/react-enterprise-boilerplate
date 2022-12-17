export const getCyConfigValue = <K extends keyof Cypress.Config>(key: K) => {
  const config = Cypress.config();
  if (!config[key]) {
    throw new Error(`Cypress config ${key} not found.`);
  }

  return config[key] as NonNullable<Cypress.Config[K]>;
};
