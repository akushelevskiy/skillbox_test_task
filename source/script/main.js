import "../scss/style.scss"
import "./utils/prism.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {initPageMenu} from './modules/header/init-page-menu'
import {initFilter} from './modules/filter/init-filter'
window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initPageMenu();
    initFilter();
  });
});
