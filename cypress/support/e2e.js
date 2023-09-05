Cypress.on('uncaught:exception', (err) => {
    // Log the error to the console
    console.error('Uncaught Exception:', err.message);

    return false;
  });