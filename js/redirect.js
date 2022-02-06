function resolve_path(path) {
  if (path.search('://') == -1) path = location.origin + '/' + path;
  let [protocol,address] = path.split('://');
  return protocol + '://' + address
    .split('/')
    .filter(v => v != '.' && v != '')
    .reduce((a,v) => { v == '..' ? a.pop() : a.push(v); return a; },[])
    .join('/')
  ;
}
function redirect() {
  let s = document.querySelector(`script`);
  let curr = resolve_path(location.href);
  let next = resolve_path(s.getAttribute('to') || '');
  if (next != curr) location.assign(next);
}
export default redirect;
 