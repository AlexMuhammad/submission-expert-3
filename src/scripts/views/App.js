/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import ParserUrl from '../routes/parser-url';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import Loader from '../utils/loader';

class App {
  constructor({
    menuButton,
    closeMenu,
    drawer,
    content,
  }) {
    this._menuButton = menuButton;
    this._closeMenu = closeMenu;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuButton: this._menuButton,
      closeMenu: this._closeMenu,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    Loader.hideLoading();
    const url = ParserUrl.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;
