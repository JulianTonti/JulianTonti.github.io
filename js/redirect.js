import resolve from './resolve.js';

function redirect(target='') {
  const curr = resolve(location.href);
  const next = resolve(target ?? curr);
  if (next != curr) location.assign(next);
}
export default redirect;
