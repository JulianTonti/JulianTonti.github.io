(function()
{
  function onover(event) {
    event.preventDefault();
  }
  function onpaste(event) {
    let file = (event.clipboardData || window.clipboardData).files[0];
    convert_file(file);
  }
  function ondrop(event) {
    event.preventDefault(); // prevents file being opened
    let file = null;
    if (event.dataTransfer.items) {
      if (event.dataTransfer.items[0].kind === 'file') {
        file = event.dataTransfer.items[0].getAsFile();
      }
    }
    else {
      file = event.dataTransfer.files[0];
    }
    convert_file(file);
  }
  function convert_file(file) {
    if (!file || file.type.substr(0,6) != "image/") {
      navigator.clipboard.writeText("This only works with images. You pasted something else");
    }
    else {
      let reader = new FileReader();
      reader.onloadend = function() {
        navigator.clipboard.writeText(`<img src="${reader.result}" />`);
      }
      reader.readAsDataURL(file);
    }
  }
  function init() {
    if (document.readyState == 'loading') {
      return setTimeout(init,100);
    }
    document.body.removeEventListener("dragover", onover);
    document.body.removeEventListener("drop", ondrop);
    document.body.removeEventListener('paste', onpaste);
    document.body.addEventListener("dragover", onover);
    document.body.addEventListener("drop", ondrop);
    document.body.addEventListener('paste', onpaste);
  }
  init();
})();
