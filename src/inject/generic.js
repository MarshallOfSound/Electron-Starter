import './rendererEmitter';
import './core';

import SettingsController from '../main/utils/Settings';
global.Settings = new SettingsController();
Settings.uncouple();

require(`./${process.platform}`);

const waitForBody = setInterval(() => {
  if (document.body) {
    clearInterval(waitForBody);
    require('electron').remote.getCurrentWindow().show();
  }
}, 10);
