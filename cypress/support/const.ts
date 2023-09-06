const AllEnvVariables = Cypress.env("environments")
const SelectedEnviornment: string = Cypress.env("env-selected")

export const BaseUrl: string = AllEnvVariables[SelectedEnviornment]["baseUrl"]