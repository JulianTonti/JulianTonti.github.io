let title = document.title || '';
document.body.className = 'markdown-body';
document.head.innerHTML = `
  <title>${title}</title>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' media='screen' href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'>
`;
let s = document.createElement('script');
document.head.appendChild(s);
s.onload = () => {
  document.body.innerHTML = marked(document.body.innerHTML);
  s.parentNode.removeChild(s);
}
s.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
