document.body.style.visibility = 'hidden';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
function render() {
  if (document.readyState == 'loading') return document.onreadystatechange = render;
  const src_css = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css';
  const src_js  = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
  if (!document.querySelector(`link[href="${src_css}"]`)) {
    const link = document.createElement('link');
    Object.assign(link, {
      rel   : 'stylesheet',
      type  : 'text/css',
      media : 'screen',
      href  : src_css
    });
    document.head.appendChild(link);
  }
  document.body.className = (document.body.className + ' markdown-body').trimStart();
  document.body.innerHTML = marked.parse(document.body.innerHTML);
  document.body.style.visibility = 'visible';
}
render();
export default render;
