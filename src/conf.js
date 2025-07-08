import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

api.Hints.setCharacters('ahetincsypodulwgm');

export default {
  settings: {
    digitForRepeat: false,
    hintAlign: "left",
    // hintCharacters: "ahetincsypodulwgm", // not work https://github.com/b0o/surfingkeys-conf/issues/81
    omnibarSuggestionTimeout: 500,
    focusFirstCandidate: false,
    richHintsForKeystroke: 1,
    defaultSearchEngine: "bs",
    // smoothScroll: false,
    scrollStepSize: 110,
    stealFocusOnLoad: false,
    theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "<Space>",

  // Leader for OmniBar searchEngines
  searchleader: "s",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
