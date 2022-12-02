/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/App';

const app = new App({
  menuButton: document.querySelector('.header__menu'),
  closeMenu: document.querySelector('.close__menu'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content-root'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
