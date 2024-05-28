import commands from './index.js';

let s = document.querySelector('script[src="https://julians.page/js/main.js"]');
if (s !== null) {
  for (let {name,value} of s.attributes) {
    name = name.toLowerCase();
    if (name.startsWith('cmd-')) {
      let func = name.substring(4);
      if (commands[func]) {
        commands[func](value);
      }
    }
  }
}
export default {};