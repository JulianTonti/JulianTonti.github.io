const commands = {
  display  : args => document.body.style.display = args,
  markdown : args => import("https://julians.page/js/markdown.js"),
  alert    : args => alert(args),
  redirect : args => location.assign(args)
};
let s = document.querySelector('script[src="https://julians.page/index.js"]');
if (s) s.getAttributeNames().filter(n => n.startsWith('cmd-')).forEach(n => {
  let func = n.substring(4);
  let args = s.getAttribute(n);
  if (commands[func]) commands[func](args);
})
