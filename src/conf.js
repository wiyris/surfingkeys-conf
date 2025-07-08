import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

export default {
  settings: {
    digitForRepeat: false,
    hintAlign: "left",
    hintCharacters: "ahetincsypodul=w'g.m", // handsdown
    omnibarSuggestionTimeout: 500,
    focusFirstCandidate: false,
    richHintsForKeystroke: 1,
    defaultSearchEngine: "bs",
    // smoothScroll: false,
    scrollStepSize: 142,
    stealFocusOnLoad: false,
    theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "a",

  // Leader for OmniBar searchEngines
  searchleader: "s",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
