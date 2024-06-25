var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  skipType: false,
  skipDescription: false,
  skipBreaking: false,
  customScope: false,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  jiraPrefix: 'MAZ',
  exclamationMark: false,
  customMessage: '',
};
