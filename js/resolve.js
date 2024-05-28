// Sanity check a URL. Trapping an exception on new URL() isn't quite good enough.
function resolve(url='') {
  if (typeof url != 'string' || url.trim() == '') return location.href;
  try {
    url = url.trim();
    url = url.includes('://') ? url : `https://${url}`;
    let {protocol,hostname,port,pathname,search} = new URL(url);
    protocol = protocol.toLowerCase();
    pathname = pathname.replace(/\/\/+/g, '/');
    port = port == '' ? port : `:${port}`;
    return [protocol,'//',hostname,port,pathname,search].join('');
  }
  catch (e) { 
    return location.href;
  }
}
export default resolve;