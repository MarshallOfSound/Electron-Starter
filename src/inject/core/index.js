import { remote } from 'electron';

// Do generic things here
document.body.innerHTML = 'This is a really basic app';
document.title = remote.app.getName();
