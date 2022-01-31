/*

# 2020-07-15-Wed:

Utility helper for importing old-style javascripts from within a module.
Be aware that scripts will go into the global (window) scope.

Script loading is asynchronous so do not assume that the order of scripts 
provided will be the order that they necessarily load in.

The callback will fire when all have loaded.

*/
import sync from "./unyield.js";

function require(src,cb) {
  if (typeof src == 'string') require_one(src,cb);
  else if (Array.isArray(src)) require_many(src,cb);
}
function require_one(src,cb) {
  let script = document.createElement('script');
  document.body.appendChild(script);
  script.onload = cb;
  script.src = src;
}
function require_many(srcs, cb) {
  sync(function* (unyield) {
    for (let src of srcs) require_one(src, unyield);
    for (let src of srcs) yield;
    cb();
  });
}
export default require;
