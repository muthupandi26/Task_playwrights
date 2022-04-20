const common = `
  --require config/config.js 
  --require setup/assertions.js 
  --require setup/hooks.js 
  --require step-definitions/**/*.steps.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
  // default: `${common} features/**/*email_verification_check.feature`
};