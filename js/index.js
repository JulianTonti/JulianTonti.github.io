import markdown  from './markdown.js';
import redirect  from './redirect.js';
import require   from './require.js';
import resolve   from './resolve.js';
import screencap from './screencap.js';
import unyield   from './unyield.js';
import watch     from './watch.js';

export default {
  alert    : args => alert(args),
  display  : args => document.body.style.display = args,
  markdown ,
  redirect ,
  require  ,
  resolve  ,
  screencap,
  unyield  ,
  watch    ,
};
