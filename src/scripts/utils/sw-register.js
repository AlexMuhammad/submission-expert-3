/* eslint-disable no-console */
import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not running');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker enrolled');
  } catch (err) {
    console.log('Failed to register', err);
  }
};

export default swRegister;
