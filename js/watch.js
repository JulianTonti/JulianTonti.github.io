// Refresh the page if the server copy has changed. Uses HEAD -> ETag. Polls every 5 seconds.
async function poll(delay=5000) {
  try {
    const ETAG   = 'ETag';
    const client = localStorage.getItem(ETAG) ?? '';
    const server = (await fetch(window.location.href, { method:'HEAD' })).headers.get(ETAG) ?? '';

    if      (server === '')     { }
    else if (client === '')     { localStorage.setItem(ETAG,server); setTimeout(()=>poll(delay),delay); }
    else if (client !== server) { localStorage.setItem(ETAG,server); window.location.reload(); }
    else                        { setTimeout(()=>poll(delay),delay); }
  }
  catch(e) {}
}
export default poll;
