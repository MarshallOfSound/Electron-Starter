import { screen, app } from 'electron';
import path from 'path';

export default () => {
  const screenSize = screen.getPrimaryDisplay().workAreaSize;
  const defaultHeight = screenSize.height * 3 / 4;
  const defaultWidth = screenSize.width * 3 / 4;


  const baseConfig = {
    width: Settings.get('width', defaultWidth),
    height: Settings.get('height', defaultHeight),
    x: Settings.get('X'),
    y: Settings.get('Y'),
    show: false,
    autoHideMenuBar: true,
    frame: Settings.get('nativeFrame'),
    icon: path.resolve(`${__dirname}/../assets/img/main.png`),
    title: app.getName(),
    nodeIntegration: true,
  };

  return baseConfig;
};
