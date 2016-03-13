import { app, remote } from 'electron';
import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

export default function (fileName) {
  const DIR = path.resolve(`${(app ? app.getPath('userData') : remote.require('electron').app.getPath('userData'))}/json_store`); // eslint-disable-line

  const PATH = `${DIR}/${fileName}.json`;

  if (!fs.existsSync(DIR)) {
    mkdirp.sync(DIR);
  }

  return PATH;
}
