export default (app) => {
  // DEV: Better scrolling experience
  app.commandLine.appendSwitch('enable-smooth-scrolling', '1');

  // DEV: Better looking scrollbars
  app.commandLine.appendSwitch('enable-overlay-scrollbar', '1');

  // DEV: Uncomment this to get fancy webkit API's
  // app.commandLine.appendSwitch('enable-experimental-web-platform-features', '1');

  // DEV: Uncomment this to get access to the users desktop as a media stream
  // app.commandLine.appendSwitch('enable-usermedia-screen-capture', '1');
};
