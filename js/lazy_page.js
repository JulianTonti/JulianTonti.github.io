function render() {
  if (document.readyState == 'loading') return document.onreadystatechange = render;
  const src_css = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css';
  const src_js  = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
  if (!document.querySelector(`link[href="${src_css}"]`)) {
    document.body.style.visibility = 'hidden';
    document.head.innerHTML += `
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='${src_css}'>
    `;
  }
  if (!document.querySelector(`script[src="${src_js}"]`)) {
    let s = document.createElement('script');
    document.head.appendChild(s);
    s.onload = () => {
      document.body.className = 'markdown-body';
      document.body.innerHTML = marked.parse(document.body.innerHTML);
      document.body.style.visibility = 'visible';
      s.parentNode.removeChild(s);
      let h = document.querySelector('h1');
      if (h && document.title == '') document.title = h.innerText.trim();
    }
    s.src = src_js;
  }
}
render();
