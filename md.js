function render() {
  if (document.readyState == 'loading') return document.onreadystatechange = render;
  if (window.rendered) return;
  window.rendered = true;
  document.body.style.visibility = 'hidden';
  document.head.innerHTML += `
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'>
  `;
  let s = document.createElement('script');
  document.head.appendChild(s);
  s.onload = () => {
    document.body.className = 'markdown-body';
    document.body.innerHTML = marked(document.body.innerHTML);
    document.body.style.visibility = 'visible';
    s.parentNode.removeChild(s);
    let h = document.querySelector('h1');
    if (h && document.title == '') document.title = h.innerText.trim();
  }
  s.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
}
render();
