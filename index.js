const commands = {
  alert    : args => alert(args),
  display  : args => document.body.style.display = args,
  markdown : args => import('js/markdown.js'),
  redirect : args => location.assign(args),
  watch    : args => import('js/watch.js'),
};
for (const {name,value} of document.querySelector('script[src="https://julians.page/index.js"]')?.attributes ?? []) {
  const func = name.toLowerCase().split('cmd-')[1];
  if (func && commands[func]) { commands[func](value); }
}
