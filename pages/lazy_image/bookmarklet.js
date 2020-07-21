function onpaste(event) {
  let file = (event.clipboardData || window.clipboardData).files[0];
  if (file && file.type.substr(0,6) == "image/") {
    let reader = new FileReader();
    reader.onloadend = function() {
      let src = reader.result;
      navigator.clipboard.writeText(`<img src="${src}" />`);
      document.querySelector('#img1').innerHTML = `&lt;img src="${src}" /&gt;`;
    }
    reader.readAsDataURL(file);
  }
  else {
    document.querySelector('#img1').innerHTML = "This only works with images. You pasted something else";
  }
}
window.removeEventListener('paste', onpaste);
window.addEventListener('paste', onpaste);
